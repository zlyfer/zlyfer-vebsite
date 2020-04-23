<template>
  <!-- TODO: Make date filter centered. -->
  <!-- TODO: Load on demand and not everything at once. -->
  <div id="vplan">
    <b-card no-body id="tableCard">
      <b-card-header header-tag="nav" id="tableCardHeader">
        <b-button-toolbar key-nav>
          <b-button-group class="mx-1">
            <b-button id="datefilter" variant="primary">Datum Filter</b-button>
            <b-dropdown :text="datesSelect.cyear" variant="outline-primary">
              <b-dropdown-item
                v-for="year in getDatesSelectKeys('years')"
                v-on:click="setDatesSelectKeys('year', year)"
                :key="year"
                :active="datesSelect.cyear == year"
                :disabled="year == 'Jahr'"
                >{{ year }}</b-dropdown-item
              >
            </b-dropdown>
            <b-dropdown v-if="datesSelect.cyear != 'Jahr'" :text="datesSelect.cmonth" variant="outline-primary">
              <b-dropdown-item
                v-for="month in getDatesSelectKeys('months')"
                v-on:click="setDatesSelectKeys('month', month)"
                :key="month"
                :active="datesSelect.cmonth == month"
                :disabled="month == 'Monat'"
                >{{ month }}</b-dropdown-item
              >
            </b-dropdown>
            <b-dropdown
              v-if="datesSelect.cmonth != 'Monat'"
              :text="datesSelect.cday"
              dropright
              variant="outline-primary"
            >
              <b-dropdown-item
                v-for="day in getDatesSelectKeys('days')"
                v-on:click="setDatesSelectKeys('day', day)"
                :key="day"
                :active="datesSelect.cday == day"
                :disabled="day == 'Tag'"
                >{{ day }}</b-dropdown-item
              >
            </b-dropdown>
          </b-button-group>
        </b-button-toolbar>
      </b-card-header>
      <b-card-body id="tableCardBody">
        <b-table responsive hover head-variant="light" :items="plans[activePlan]" :fields="fields" :busy="isBusy">
          <template v-slot:cell(info)="data">
            <span
              v-bind:style="{
                'font-style': `${data.item.Info == 'Keine Information' ? 'italic' : ''}`,
              }"
            >
              {{ data.item.Info }}
            </span>
            <template v-if="data.item.Vertretungstext != 'Keine Information'">
              <b-badge pill :id="data.item.ID" :v-b-ooltip="data.item.Vertretungstext" variant="warning">!</b-badge>
              <b-tooltip :target="data.item.ID" triggers="hover" variant="warning">{{
                data.item.Vertretungstext
              }}</b-tooltip>
            </template>
          </template>
          <template v-slot:table-busy>
            <div class="text-center text-primary my-2">
              <b-spinner id="loadingSpinner" class="align-middle"></b-spinner>
              <strong id="loadingText">Lade Vertretungsplan</strong>
              <b-badge pill variant="primary" target="_blank" :href="currentBusy">{{ currentBusy }}</b-badge>
            </div>
          </template>
        </b-table>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import axios from "axios";
const CONSTANTS = require("../constants.js");
export default {
  data() {
    return {
      isBusy: true,
      currentBusy: "",
      activePlan: "",
      plans: {},
      fields: [{ label: "Kurs", key: "Kurs", stickyColumn: true }, "Stunde", "Fach", "Raum", "Lehrer", "Info"],
      dates: [],
      datesSelect: {
        cyear: "Jahr",
        cmonth: "Monat",
        cday: "Tag",
        data: {},
      },
    };
  },
  methods: {
    loadDates() {
      // Get Available Dates:
      this.currentBusy = CONSTANTS.VPLAN.API_DATES;
      axios.get(CONSTANTS.VPLAN.API_DATES).then((r) => {
        let dates = [];
        Object.keys(r.data.entries).forEach((date) => {
          dates.push({
            name: `${r.data.entries[date]} ${date}`,
            id: `${r.data.entries[date]}, ${date}`,
          });

          // datesSelect:
          let year = date.substr(6, 4);
          let month = date.substr(3, 2);
          let day = date.substr(0, 2);
          if (!this.datesSelect.data[year]) this.datesSelect.data[year] = {};
          if (!this.datesSelect.data[year][month]) this.datesSelect.data[year][month] = [];
          this.datesSelect.data[year][month].push(`${r.data.entries[date]} ${day}.`);
        });
        this.dates = dates;
        this.activePlan = dates[dates.length - 1].id;
        this.setDatesSelectKeys("year", dates[dates.length - 1].id.split(", ")[1].substr(6, 4));
        this.setDatesSelectKeys("month", dates[dates.length - 1].id.split(", ")[1].substr(3, 2));
        this.setDatesSelectKeys(
          "day",
          `${dates[dates.length - 1].id.split(", ")[0]} ${dates[dates.length - 1].id.split(", ")[1].substr(0, 2)}.`
        );
      });
    },
    getDatesSelectKeys(key) {
      switch (key) {
        case "years":
          return ["Jahr"].concat(Object.keys(this.datesSelect.data));
        case "months":
          if (this.datesSelect.data[this.datesSelect.cyear])
            return ["Monat"].concat(Object.keys(this.datesSelect.data[this.datesSelect.cyear]));
          else return ["Monat"];
        case "days":
          if (this.datesSelect.data[this.datesSelect.cyear][this.datesSelect.cmonth])
            return ["Tag"].concat(this.datesSelect.data[this.datesSelect.cyear][this.datesSelect.cmonth]);
          else return ["Tag"];
        default:
          return [];
      }
    },
    setDatesSelectKeys(key, value) {
      switch (key) {
        case "year":
          this.datesSelect.cyear = value;
          this.datesSelect.cmonth = "Monat";
          this.datesSelect.cday = "Tag";
          break;
        case "month":
          this.datesSelect.cmonth = value;
          this.datesSelect.cday = "Tag";
          break;
        case "day":
          this.datesSelect.cday = value;
          if (value != "Tag")
            if (
              !Object.keys(this.plans).includes(
                `${this.datesSelect.cday.split(" ")[0]}, ${this.datesSelect.cday.split(" ")[1].substr(0, 2)}.${
                  this.datesSelect.cmonth
                }.${this.datesSelect.cyear}`
              )
            )
              this.getPlan(
                CONSTANTS.VPLAN.API +
                  `${this.datesSelect.cday.split(" ")[1].substr(0, 2)}${this.datesSelect.cmonth}${
                    this.datesSelect.cyear
                  }/`
              );
            else
              this.activePlan = `${this.datesSelect.cday.split(" ")[0]}, ${this.datesSelect.cday
                .split(" ")[1]
                .substr(0, 2)}.${this.datesSelect.cmonth}.${this.datesSelect.cyear}`;
          break;
        default:
          break;
      }
    },
    getPlan(api) {
      // Get Actual Tables:
      this.currentBusy = api;
      this.isBusy = true;
      // this.plans = [];
      axios.get(api).then((r) => {
        // Split entries into different days:
        r.data.entries.forEach((e) => {
          if (!Object.keys(this.plans).includes(e["Datum"])) {
            this.plans[e["Datum"]] = [];
          }
          let exists = this.plans[e["Datum"]].find((t) => {
            let tmp = JSON.parse(JSON.stringify(t));
            delete tmp._cellVariants;
            if (tmp["Info"] == "Keine Information") tmp["Info"] = "N/A";
            return JSON.stringify(tmp) == JSON.stringify(e);
          });
          if (!exists) {
            this.plans[e["Datum"]].push(e);
          }
        });
        // Style rows and cells:
        // TODO: Optimize: Only apply this for the received data not everything again.
        for (let plan in this.plans) {
          plan = this.plans[plan];
          let currentkurs = {
            name: "",
            variant: true,
          };
          plan.forEach((e) => {
            // Color-Code same "Kurs"-Keys:
            if (e.Kurs != currentkurs.name) {
              currentkurs.name = e.Kurs;
              currentkurs.variant = !currentkurs.variant;
            }
            if (e.Kurs == currentkurs.name) {
              currentkurs.name = e.Kurs;
              e._cellVariants = {
                Kurs: currentkurs.variant ? "warning" : "info",
              };
            }
            // Color "Entfall" red:
            if (e.Info == "Entfall") e._cellVariants = { ...e._cellVariants, Info: "danger" };
            // If "N/A" anywhere, convert to "Keine Information" in italic:
            for (let key in e)
              if (!key.startsWith("_") && e[key] == "N/A") {
                e[key] = "Keine Information";
              }
          });
        }
        this.activePlan = `${this.datesSelect.cday.split(" ")[0]}, ${this.datesSelect.cday
          .split(" ")[1]
          .substr(0, 2)}.${this.datesSelect.cmonth}.${this.datesSelect.cyear}`;
        this.isBusy = false;
      });
    },
  },
  mounted() {
    this.loadDates();
  },
};
</script>

<style>
.alert {
  margin: 0 !important;
}
#oldButton {
  margin-left: 10px;
}
.b-table-sticky-header,
.b-table {
  margin-bottom: 0 !important;
  min-height: 100% !important;
  height: 100% !important;
}
.table-responsive {
  margin-bottom: 0 !important;
}
#tableCard {
  border: none !important;
}
#tableCardHeader {
  border: none !important;
}
#tableCardBody {
  padding: 0 !important;
  height: calc(100vh - 56px - 64px - 64px) !important;
}
#loadingSpinner,
#loadingText {
  margin-right: 10px;
}
tr {
  border: none;
}
.planselect .nav-link {
  border: 1px solid var(--light) !important;
}
.planselect .nav-link.active {
  border: 1px solid var(--primary) !important;
}
#datefilter:focus,
#datefilter:active {
  outline: none !important;
  box-shadow: none;
}
</style>
