<template>
  <div id="control_panel">
    <b-row style="width: 100%">
      <b-col cols="3">
        <b-card
          header="Info"
          style="width: 100%; cursor: pointer; text-align: center; font-weight: bold;"
          border-variant="info"
          header-bg-variant="info"
          header-text-variant="light"
          class="m-3"
          v-on:click="showInfoBody = !showInfoBody"
          sub-title="Info and Status Updates (Click to Minimize!)"
          sub-title-tag="h5"
          v-if="loggedIn"
        >
          <div v-if="showInfoBody" style="text-align: left !important; font-weight: initial;">
            Changes can take up to <strong>60 seconds</strong> to be applied! Changes will not be applied to currently
            existing dynamic channels at the moment (subject to change)! In the meantime please just delete the existing
            dynamic channels (just leave until empty) and create new ones. <br />
            <strong> Advanced permissions will come soon (hopefully)!</strong>
          </div>
        </b-card>

        <b-card
          header="Authenticate"
          sub-title="Login with your credentials to authenticate."
          style="width: 100%; text-align: center; font-weight: bold;"
          border-variant="primary"
          header-bg-variant="primary"
          header-text-variant="light"
          class="m-3 login"
          :class="{ loggedIn: loggedIn }"
        >
          <b-input-group prepend="Guild ID" class="labeledInput lI35 m-1">
            <b-form-input
              v-model="auth.guildid"
              v-on:input="
                refresh = true;
                loggedIn = false;
              "
              v-on:keyup.enter="updateAll()"
              placeholder="Guild ID"
            >
            </b-form-input>
          </b-input-group>
          <b-input-group prepend="Token" class="labeledInput lI35 m-1">
            <b-form-input
              :type="hideToken ? 'password' : 'text'"
              v-model="auth.token"
              v-on:input="
                refresh = true;
                loggedIn = false;
              "
              placeholder="Token"
              v-on:keyup.enter="updateAll()"
              style="padding-right: 40px;"
            >
            </b-form-input>
            <div class="h4" style="position: absolute; right: 10px; top: 5px; cursor: pointer; z-index: 5000">
              <b-icon-eye-fill size="lg" v-if="!hideToken" @click="hideToken = true"></b-icon-eye-fill>
              <b-icon-eye-slash-fill v-if="hideToken" @click="hideToken = false"></b-icon-eye-slash-fill>
            </div>
          </b-input-group>
          <b-button
            :variant="refresh ? 'info' : 'outline-info'"
            v-on:click="updateAll()"
            style="width: 100%;"
            class="m-1"
          >
            {{ refresh ? "Refresh" : "Login" }}
          </b-button>
        </b-card>

        <b-card
          header="Bot Settings"
          sub-title="General preferences of the bot."
          style="width: 100%; text-align: center; font-weight: bold;"
          class="m-3"
          border-variant="primary"
          header-bg-variant="light"
          header-text-variant="dark"
          v-if="loggedIn"
        >
          <b-input-group
            prepend="Custom Prefix"
            class="labeledInput lI50-50 m-1"
            v-b-tooltip.hover.top="`The keyword the bot listens to. Usage: '` + guild.prefix + ` command'`"
          >
            <b-form-input v-model="guild.prefix" placeholder="Bot Prefix"> </b-form-input>
          </b-input-group>
          <b-input-group
            prepend="Bot Status"
            class="labeledInput lI50-50 m-1"
            v-b-tooltip.hover.top="'Global option to disable the bot'"
          >
            <b-button
              class="buttonRound"
              :variant="guild.enabled == '1' ? 'success' : 'danger'"
              v-on:click="guild.enabled = oneZeroToggle(guild.enabled)"
            >
              {{ guild.enabled == "1" ? "Enabled" : "Disabled" }}
            </b-button>
          </b-input-group>
          <b-input-group class="m-1">
            <b-button style="width: 100%;" variant="success" v-on:click="saveBotSettings()">
              Save Bot Settings
            </b-button>
          </b-input-group>
        </b-card>

        <b-card
          header="Control Roles"
          sub-title="Roles that can control the bot and generate a new token."
          style="width: 100%; text-align: center; font-weight: bold;"
          class="m-3"
          border-variant="primary"
          header-bg-variant="light"
          header-text-variant="dark"
          v-if="loggedIn"
        >
          <b-list-group style="text-align: left; max-height: 30vh; !important; overflow-y: scroll;">
            <b-list-group-item class="controlRole">
              <b-input-group prepend="Add Role" class="labeledInput m-1">
                <b-input
                  autocomplete="off"
                  list="controlRoles-list"
                  v-on:change="newControlRole = idOnly($event)"
                  placeholder="Role ID"
                >
                </b-input>
                <datalist id="controlRoles-list">
                  <option v-for="role in meta.roles" :key="role.id"> {{ role.name }}: {{ role.id }} </option>
                </datalist>
                <b-button variant="success" class="buttonRound" v-on:click="addRole()">
                  Add
                </b-button>
              </b-input-group>
            </b-list-group-item>
            <b-list-group-item v-for="role in controlRoles" :key="role" class="controlRole">
              <h6>{{ getNameOfId(role, meta.roles) }}</h6>
              {{ role }}
              <b-badge variant="danger" v-on:click="deleteControlRole(role)">Remove</b-badge>
            </b-list-group-item>
            <b-list-group-item v-if="controlRoles.length == 0" class="controlRole">
              <h6>No Control Roles defined.</h6>
              Only the server owner can control the bot.
            </b-list-group-item>
          </b-list-group>
        </b-card>
      </b-col>

      <b-col cols="9" v-if="loggedIn">
        <b-button variant="success" size="lg" class="m-3" style="width: 100%" v-on:click="newConfig()"
          >New Configuration</b-button
        >
        <b-card
          class="m-3"
          v-for="config in configs"
          :key="config.id"
          :header="'Configuration: ' + config.name"
          style="width: 100%; text-align: center; font-weight: bold; float: left;"
          flush
          border-variant="info"
          header-bg-variant="info"
          header-text-variant="light"
        >
          <b-row no-gutters>
            <b-col class="m-3">
              <b-list-group flush>
                <b-list-group-item>General</b-list-group-item>
                <b-input-group
                  prepend="Name"
                  class="labeledInput lI75-25 m-1"
                  v-b-tooltip.hover.top="`Name of the configuration so you can identify it`"
                >
                  <b-form-input v-model="config.name" placeholder="Config Name"> </b-form-input>
                </b-input-group>
                <b-input-group
                  prepend="Config Status"
                  class="labeledInput lI50-50 m-1"
                  v-b-tooltip.hover.top="`Enable/Disable this configuration`"
                >
                  <b-button
                    class="buttonRound"
                    :variant="config.enabled == '1' ? 'success' : 'danger'"
                    v-on:click="config.enabled = oneZeroToggle(config.enabled)"
                  >
                    {{ config.enabled == "1" ? "Enabled" : "Disabled" }}
                  </b-button>
                </b-input-group>
                <!-- <b-input-group prepend="Color" :append="config.color" class="labeledInput lI75-25 m-1">
                  <b-input type="color" :value="config.color" v-on:change="config.color = $event"> </b-input>
                </b-input-group> -->
                <b-input-group
                  prepend="Triggerchannel"
                  class="labeledInput lI60-40 m-1"
                  v-b-tooltip.hover.top="`The channel you have to join to create your own dynamic channel`"
                >
                  <b-input
                    autocomplete="off"
                    list="triggerChannel-list"
                    v-on:change="config.triggerchannel = idOnly($event)"
                    :value="getNameOfId(config.triggerchannel, meta.channels) + ': ' + config.triggerchannel"
                    placeholder="Voice ID"
                  >
                  </b-input>
                  <datalist id="triggerChannel-list">
                    <option v-for="channel in filterChannelType(meta.channels, 'voice')" :key="channel.id">
                      {{ channel.name }}: {{ channel.id }}
                    </option>
                  </datalist>
                </b-input-group>

                <b-input-group
                  prepend="Create Text Channel"
                  class="labeledInput lI50-50 m-1"
                  v-b-tooltip.hover.top="`If enabled, also create dynamic text channels`"
                >
                  <b-button
                    class="buttonRound"
                    :variant="config.createtext == '1' ? 'success' : 'danger'"
                    v-on:click="config.createtext = oneZeroToggle(config.createtext)"
                  >
                    {{ config.createtext == "1" ? "Yes" : "No" }}
                  </b-button>
                </b-input-group>
                <b-input-group
                  prepend="Delay"
                  :append="config.delay == 1 ? 'second' : 'seconds'"
                  class="labeledInput lI75-25 m-1"
                  v-b-tooltip.hover.top="`The seconds the bot waits until triggering. 0 = instantly`"
                >
                  <b-form-spinbutton v-model="config.delay" min="0" max="5"> </b-form-spinbutton>
                </b-input-group>
                <b-input-group
                  prepend="Isolate"
                  class="labeledInput lI50-50 m-1"
                  v-b-tooltip.hover.top="
                    `If dynamic text channels and this option are enabled, text channels will only be visible for people inside the corresponding voice channel`
                  "
                >
                  <b-button
                    class="buttonRound"
                    :variant="config.isolate == '1' ? 'success' : 'danger'"
                    v-on:click="config.isolate = oneZeroToggle(config.isolate)"
                  >
                    {{ config.isolate == "1" ? "Yes" : "No" }}
                  </b-button>
                </b-input-group>
              </b-list-group>
            </b-col>
            <b-col class="m-3">
              <b-list-group flush>
                <b-list-group-item>Voice Channel</b-list-group-item>
                <b-input-group
                  prepend="Category"
                  class="labeledInput lI75-25 m-1"
                  v-b-tooltip.hover.top="`The category the voice channels will be placed in`"
                >
                  <b-input
                    autocomplete="off"
                    list="voiceCategory-list"
                    v-on:change="config.vcategory = idOnly($event)"
                    :value="getNameOfId(config.vcategory, meta.channels) + ': ' + config.vcategory"
                    placeholder="Category ID"
                  >
                  </b-input>
                  <datalist id="voiceCategory-list">
                    <option v-for="channel in filterChannelType(meta.channels, 'category')" :key="channel.id">
                      {{ channel.name }}: {{ channel.id }}
                    </option>
                  </datalist>
                </b-input-group>
                <b-input-group
                  prepend="Prefix"
                  class="labeledInput lI75-25 m-1"
                  v-b-tooltip.hover.top="`Text before the voice channels' name, optional`"
                >
                  <b-form-input v-model="config.vprefix" placeholder="Prefix"> </b-form-input>
                </b-input-group>
                <b-input-group
                  prepend="Infix"
                  class="labeledInput lI75-25 m-1"
                  v-b-tooltip.hover.top="`The name of the voice channels`"
                >
                  <b-form-spinbutton v-model="config.vinfix" :formatter-fn="nameFormatter" min="1" max="2" wrap>
                  </b-form-spinbutton>
                  <b-input
                    v-if="nameFormatter(config.vinfix) == 'Custom'"
                    v-model="config.vinfix"
                    placeholder="Custom Value"
                  >
                  </b-input>
                </b-input-group>
                <b-input-group
                  prepend="Suffix"
                  class="labeledInput lI75-25 m-1"
                  v-b-tooltip.hover.top="`Text after the voice channels' name, optional`"
                >
                  <b-form-input v-model="config.vsuffix" placeholder="Suffix"> </b-form-input>
                </b-input-group>
                <b-input-group
                  prepend="Userlimit"
                  :append="config.vuserlimit == '1' ? 'user' : 'users'"
                  class="labeledInput lI75-25 m-1"
                  v-b-tooltip.hover.top="
                    `How many people can join the voice channels (admins and users with move permissions excluded). 0 = unlimited`
                  "
                >
                  <b-form-spinbutton v-model="config.vuserlimit" min="0" max="99"> </b-form-spinbutton>
                </b-input-group>
                <b-input-group
                  prepend="Bitrate"
                  append="kps"
                  class="labeledInput lI75-25 m-1"
                  v-b-tooltip.hover.top="`The bitrate of the voice channels. Default: 64000`"
                >
                  <b-form-spinbutton v-model="config.vbitrate" min="8000" max="96000" step="1000"> </b-form-spinbutton>
                </b-input-group>
              </b-list-group>
            </b-col>
            <b-col class="m-3">
              <b-list-group flush>
                <b-list-group-item>Text Channel</b-list-group-item>
                <b-input-group prepend="Category" class="labeledInput lI75-25 m-1">
                  <b-input
                    autocomplete="off"
                    list="textCategory-list"
                    v-on:change="config.tcategory = idOnly($event)"
                    :value="getNameOfId(config.tcategory, meta.channels) + ': ' + config.tcategory"
                    placeholder="Category ID"
                    v-b-tooltip.hover.top="`The category the text channels will be placed in`"
                  >
                  </b-input>
                  <datalist id="textCategory-list">
                    <option v-for="channel in filterChannelType(meta.channels, 'category')" :key="channel.id">
                      {{ channel.name }}: {{ channel.id }}
                    </option>
                  </datalist>
                </b-input-group>
                <b-input-group
                  prepend="Prefix"
                  class="labeledInput lI75-25 m-1"
                  v-b-tooltip.hover.top="`Text before the text channels' name`"
                >
                  <b-form-input v-model="config.tprefix" placeholder="Prefix"> </b-form-input>
                </b-input-group>
                <b-input-group
                  prepend="Infix"
                  class="labeledInput lI75-25 m-1"
                  v-b-tooltip.hover.top="`The name of the text channels`"
                >
                  <b-form-spinbutton v-model="config.tinfix" :formatter-fn="nameFormatter" min="1" max="2" wrap>
                  </b-form-spinbutton>
                  <b-input
                    v-if="nameFormatter(config.tinfix) == 'Custom'"
                    v-model="config.tinfix"
                    placeholder="Custom Value"
                  >
                  </b-input>
                </b-input-group>
                <b-input-group
                  prepend="Suffix"
                  class="labeledInput lI75-25 m-1"
                  v-b-tooltip.hover.top="`Text after the text channel's name`"
                >
                  <b-form-input v-model="config.tsuffix" placeholder="Suffix"> </b-form-input>
                </b-input-group>
                <b-input-group
                  prepend="NSFW"
                  class="labeledInput lI50-50 m-1"
                  v-b-tooltip.hover.top="`If enabled, text channels will be marked as nsfw`"
                >
                  <b-button
                    class="buttonRound"
                    :variant="config.tnsfw == '1' ? 'success' : 'danger'"
                    v-on:click="config.tnsfw = oneZeroToggle(config.tnsfw)"
                  >
                    {{ config.tnsfw == "1" ? "Yes" : "No" }}
                  </b-button>
                </b-input-group>
                <b-input-group
                  prepend="Topic"
                  class="labeledInput lI75-25 m-1"
                  v-b-tooltip.hover.top="`The topic of the text channels`"
                >
                  <b-form-input v-model="config.ttopic" placeholder="Text Channel Topic"> </b-form-input>
                </b-input-group>
                <b-list-group-item> </b-list-group-item>
              </b-list-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="m-3">
              <b-list-group flush>
                <b-button squared variant="success" class="m-1" v-on:click="saveConfig(config)">
                  Save Configuration
                </b-button>
                <b-button squared variant="danger" class="m-1" v-on:click="deleteConfig(config.configid)">
                  Delete Configuration
                </b-button>
              </b-list-group>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import axios from "axios";
  const CONSTANTS = require("@/constants.js");
  export default {
    data() {
      return {
        hideToken: true,
        showInfoBody: false,
        refresh: false,
        loggedIn: false,
        newControlRole: "",
        auth: {
          guildid: "",
          token: "",
        },
        guild: {},
        configs: [],
        controlRoles: [],
        meta: {
          roles: [],
          channels: [],
        },
      };
    },
    watch: {},
    methods: {
      filterChannelType(list, type) {
        return list.filter((e) => e.type == type);
      },
      idOnly(event) {
        let list = event.split(": ");
        return list[list.length - 1];
      },
      getNameOfId(id, list) {
        if (id == "") return "";
        let ret = "Unknown: ";
        list.forEach((e) => {
          if (e.id == id) ret = e.name;
        });
        return ret;
      },
      oneZeroToggle(value) {
        if (value == "0") return "1";
        else return "0";
      },
      nameFormatter(value) {
        let stringNames = { "1": "Username", "2": "Displayname" };
        let intNames = [1, 2];
        let nameConversions = ["Username", "Displayname"];
        if (intNames.includes(value)) return nameConversions[value - 1];
        else if (Object.keys(stringNames).includes(value)) return stringNames[value];
        else return "Custom";
      },
      newConfig() {
        axios
          .put(CONSTANTS.DYNCHAN.API + "/config/add/", {
            guildid: this.auth.guildid,
            token: this.auth.token,
            new: {
              name: "New Configuration",
              enabled: "0",
              color: "#438921",
              triggerchannel: "",
              createtext: "1",
              delay: "0",
              isolate: "1",
              vcategory: "",
              vprefix: "",
              vinfix: 2,
              vsuffix: "",
              vuserlimit: "0",
              vbitrate: "64000",
              tcategory: "",
              tprefix: "",
              tinfix: 2,
              tsuffix: "",
              tnsfw: "0",
              ttopic: "",
            },
          })
          .then(this.updateAll)
          .catch(console.warn);
      },
      addRole() {
        if (!isNaN(this.newControlRole) && this.newControlRole != "")
          axios
            .put(CONSTANTS.DYNCHAN.API + "/role/add/", {
              guildid: this.auth.guildid,
              token: this.auth.token,
              new: {
                roleid: this.newControlRole,
              },
            })
            .then((r) => {
              this.newControlRole = "";
              this.updateAll();
            })
            .catch(console.warn);
      },
      saveBotSettings() {
        axios
          .patch(CONSTANTS.DYNCHAN.API + "/guild/change/", {
            guildid: this.auth.guildid,
            token: this.auth.token,
            prefix: this.guild.prefix,
            enabled: this.guild.enabled,
          })
          .then(this.updateAll)
          .catch(console.warn);
      },
      deleteControlRole(id) {
        axios
          .delete(CONSTANTS.DYNCHAN.API + "/role/delete/", {
            data: {
              guildid: this.auth.guildid,
              token: this.auth.token,
              roleid: id,
            },
          })
          .then(this.updateAll)
          .catch(console.warn);
      },
      saveConfig(config) {
        axios
          .patch(CONSTANTS.DYNCHAN.API + "/config/change/", {
            guildid: this.auth.guildid,
            token: this.auth.token,
            configid: config.configid,
            new: {
              name: config.name,
              enabled: config.enabled,
              color: config.color,
              triggerchannel: config.triggerchannel,
              createtext: config.createtext,
              delay: config.delay,
              isolate: config.isolate,
              vcategory: config.vcategory,
              vprefix: config.vprefix,
              vinfix: config.vinfix,
              vsuffix: config.vsuffix,
              vuserlimit: config.vuserlimit,
              vbitrate: config.vbitrate,
              tcategory: config.tcategory,
              tprefix: config.tprefix,
              tinfix: config.tinfix,
              tsuffix: config.tsuffix,
              tnsfw: config.tnsfw,
              ttopic: config.ttopic,
            },
          })
          .then(this.updateAll)
          .catch(console.warn);
      },
      deleteConfig(id) {
        axios
          .delete(CONSTANTS.DYNCHAN.API + "/config/delete/", {
            data: {
              guildid: this.auth.guildid,
              token: this.auth.token,
              configid: id,
            },
          })
          .then(this.updateAll())
          .catch(console.warn);
      },
      updateAll() {
        this.refresh = false;
        this.loggedIn = false;
        this.guild = {};
        this.configs = [];
        this.controlRoles = [];
        this.meta = {
          roles: [],
          channels: [],
        };
        if (this.auth.guildid != "") {
          this.getGuild();
          this.getConfigs();
          this.getControlRoles();
          this.getMetaRoles();
          this.getMetaChannels();
        }
      },
      getGuild() {
        axios
          .post(CONSTANTS.DYNCHAN.API + "/guild/", {
            guildid: this.auth.guildid,
            token: this.auth.token,
          })
          .then((r) => {
            this.guild = r.data.guild;
            this.loggedIn = true;
          })
          .catch(console.warn);
      },
      getConfigs() {
        axios
          .post(CONSTANTS.DYNCHAN.API + "/configs/", {
            guildid: this.auth.guildid,
            token: this.auth.token,
          })
          .then((r) => {
            this.configs = r.data.items;
          })
          .catch(console.warn);
      },
      getControlRoles() {
        axios
          .post(CONSTANTS.DYNCHAN.API + "/roles/", {
            guildid: this.auth.guildid,
            token: this.auth.token,
          })
          .then((r) => {
            this.controlRoles = r.data.items;
          })
          .catch(console.warn);
      },
      getMetaRoles() {
        axios
          .post(CONSTANTS.DYNCHAN.API + "/meta/roles/", {
            guildid: this.auth.guildid,
            token: this.auth.token,
          })
          .then((r) => {
            this.meta.roles = r.data.items;
          })
          .catch(console.warn);
      },
      getMetaChannels() {
        axios
          .post(CONSTANTS.DYNCHAN.API + "/meta/channels/", {
            guildid: this.auth.guildid,
            token: this.auth.token,
          })
          .then((r) => {
            this.meta.channels = r.data.items;
          })
          .catch(console.warn);
      },
    },
    mounted() {
      if (this.$route.query.guildid && this.$route.query.token) {
        this.auth.guildid = this.$route.query.guildid;
        this.auth.token = this.$route.query.token;
        this.updateAll();
      }
    },
  };
</script>

<style scoped>
  *:focus,
  *:active {
    outline: none !important;
    box-shadow: none !important;
  }
  span.badge {
    float: right !important;
    font-size: 15px;
  }
  .labeledInput div.input-group-prepend div.input-group-text {
    display: block;
    font-weight: bold;
    text-align: center !important;
  }
  .lI35 div.input-group-prepend {
    width: 35%;
  }
  .lI35 div.input-group-prepend div.input-group-text {
    width: 100%;
  }
  .lI75-25 div.input-group-prepend {
    width: 25%;
  }
  .lI75-25 div.input-group-append {
    width: 20%;
  }
  .lI75-25 div.input-group-prepend div.input-group-text {
    width: 100%;
  }
  .lI75-25 div.input-group-append div.input-group-text {
    width: 100%;
  }
  .lI75-25 button {
    width: 75% !important;
  }
  .lI80-40 div.input-group-prepend {
    width: 40%;
  }
  /* .lI80-40 div.input-group-append {
    width: 20%;
  } */
  .lI80-40 div.input-group-prepend div.input-group-text {
    width: 100%;
  }
  /* .lI80-40 div.input-group-append div.input-group-text {
    width: 100%;
  } */
  .lI80-40 button {
    width: 60% !important;
  }
  .lI50-50 div.input-group-prepend {
    width: 50%;
  }
  .lI50-50 div.input-group-prepend div.input-group-text {
    width: 100%;
  }
  .lI50-50 button {
    width: 50% !important;
  }
  button {
    font-weight: bold;
  }
  div.list-group-item:not(.controlRole) {
    border: none !important;
  }
  .buttonRound {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }
  .login {
    margin-left: calc(38.5vw) !important;
    margin-top: calc(25vh) !important;
    z-index: 1000;
    transition: margin-left 1s ease, margin-top 1s ease;
  }
  .loggedIn {
    margin-left: 1rem !important;
    margin-top: 1rem !important;
  }
</style>
