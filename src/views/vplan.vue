<template>
	<div id="vplan">
		<b-alert show dismissible>
			Diese Seite befindet sich noch in Entwicklung.
			<b-button
				id="oldButton"
				variant="primary"
				target="_blank"
				href="http://vplan.zlyfer.net"
				>Alte Version</b-button
			>
		</b-alert>

		<b-card title="Card Title" no-body id="tableCard">
			<b-card-header header-tag="nav" id="tableCardHeader">
				<b-nav fill>
					<b-nav-item
						class="planselect"
						v-for="date in dates"
						:key="date.id"
						:active="activePlan == date.id"
						v-on:click="activePlan = date.id"
					>
						<span>
							{{ date.name }}
						</span>
						<!-- :variant="`${activePlan == date.id ? 'light' : 'primary'}`" -->
						<b-badge variant="primary">{{ plans[date.id].length }} </b-badge>
					</b-nav-item>
				</b-nav>
			</b-card-header>
			<b-card-body id="tableCardBody">
				<b-table
					responsive
					hover
					head-variant="light"
					:items="plans[activePlan]"
					:fields="fields"
					:busy="isBusy"
				>
					<template v-slot:cell(info)="data">
						<span
							v-bind:style="{
								'font-style': `${
									data.item.Info == 'Keine Information' ? 'italic' : ''
								}`
							}"
						>
							{{ data.item.Info }}
						</span>
						<template v-if="data.item.Vertretungstext != 'Keine Information'">
							<b-badge
								pill
								:id="data.item.ID"
								:v-b-ooltip="data.item.Vertretungstext"
								variant="warning"
								>!</b-badge
							>
							<b-tooltip
								:target="data.item.ID"
								triggers="hover"
								variant="warning"
								>{{ data.item.Vertretungstext }}</b-tooltip
							>
						</template>
					</template>
					<template v-slot:table-busy>
						<div class="text-center text-primary my-2">
							<b-spinner id="loadingSpinner" class="align-middle"></b-spinner>
							<strong id="loadingText">Lade Vertretungsplan</strong>
							<b-badge
								pill
								variant="primary"
								target="_blank"
								:href="currentBusy"
								>{{ currentBusy }}</b-badge
							>
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
				fields: [
					{ label: "Kurs", key: "Kurs", stickyColumn: true },
					"Stunde",
					"Fach",
					"Raum",
					"Lehrer",
					"Info"
				],
				dates: {}
			};
		},
		methods: {
			loadDates() {
				// Get Available Dates:
				this.currentBusy = CONSTANTS.VPLAN.DATES;
				axios.get(CONSTANTS.VPLAN.DATES).then(r => {
					let dates = [];
					Object.keys(r.data.entries).forEach(date => {
						dates.push({
							name: `${r.data.entries[date]} ${date}`,
							id: `${r.data.entries[date]}, ${date}`
						});
					});
					this.dates = dates;
					this.activePlan = dates[0].id;
					this.isBusy = false;
				});
			}
		},
		mounted() {
			// Get Actual Tables:
			this.currentBusy = CONSTANTS.VPLAN.VPLAN;
			axios.get(CONSTANTS.VPLAN.VPLAN).then(r => {
				// Split entries into different days:
				r.data.entries.forEach(e => {
					if (!Object.keys(this.plans).includes(e["Datum"])) {
						this.plans[e["Datum"]] = [];
					} else this.plans[e["Datum"]].push(e);
				});

				// Style rows and cells:
				for (let plan in this.plans) {
					plan = this.plans[plan];
					let currentkurs = {
						name: "",
						variant: true
					};
					plan.forEach(e => {
						// Color-Code same "Kurs"-Keys:
						if (e.Kurs != currentkurs.name) {
							currentkurs.name = e.Kurs;
							currentkurs.variant = !currentkurs.variant;
						}
						if (e.Kurs == currentkurs.name) {
							currentkurs.name = e.Kurs;
							e._cellVariants = {
								Kurs: currentkurs.variant ? "warning" : "info"
							};
						}
						// Color "Entfall" red:
						if (e.Info == "Entfall")
							e._cellVariants = { ...e._cellVariants, Info: "danger" };
						// If "N/A" anywhere, convert to "Keine Information" in italic:
						for (let key in e)
							if (!key.startsWith("_") && e[key] == "N/A") {
								e[key] = "Keine Information";
							}
					});
				}
				this.loadDates();
			});
		}
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
</style>