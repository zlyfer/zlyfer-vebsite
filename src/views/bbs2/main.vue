<template>
  <div id="bbs2">
    <b-card
      class="modules"
      img-src="../img/bbs2/vertretungsplan.png"
      img-alt="Vertretungsplan"
      :header-bg-variant="getDarkMode() ? 'dark' : 'light'"
      :header-text-variant="getDarkMode() ? 'light' : 'dark'"
      :bg-variant="getDarkMode() ? 'dark' : 'light'"
      :text-variant="getDarkMode() ? 'light' : 'dark'"
      footer-bg-variant="success"
    >
      <template v-slot:header>
        <b-badge pill @click="showTagInfo('german')" variant="secondary">GERMAN</b-badge>
        <b-badge pill @click="showTagInfo('discontinued')" variant="danger">DISCONTINUED</b-badge>
      </template>
      <b-card-title>Vertretungsplan</b-card-title>
      <b-card-text> My own version of the replacement plan of my old school. </b-card-text>
      <template v-slot:footer>
        <b-button :variant="getDarkMode() ? 'light' : 'dark'" class="visit module" to="/bbs2/vplan">Vertretungsplan</b-button>
      </template>
    </b-card>

    <b-card
      class="modules"
      img-src="../img/_placeholder.png"
      img-alt="Vertretungsplan API"
      :header-bg-variant="getDarkMode() ? 'dark' : 'light'"
      :header-text-variant="getDarkMode() ? 'light' : 'dark'"
      :bg-variant="getDarkMode() ? 'dark' : 'light'"
      :text-variant="getDarkMode() ? 'light' : 'dark'"
      footer-bg-variant="success"
    >
      <template v-slot:header>
        <b-badge pill @click="showTagInfo('german')" variant="secondary">GERMAN</b-badge>
        <b-badge pill @click="showTagInfo('discontinued')" variant="danger">DISCONTINUED</b-badge>
      </template>
      <b-card-title>Vertretungsplan API</b-card-title>
      <b-card-text> The API of the replacement plan of my old school. </b-card-text>
      <template v-slot:footer>
        <b-button :variant="getDarkMode() ? 'light' : 'dark'" class="visit module" to="/bbs2/vplan-api">Vertretungsplan API</b-button>
      </template>
    </b-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    methods: {
      getDarkMode() {
        return this.$parent.darkmode;
      },
      showTagInfo(tag) {
        this.$parent.showTagInfo(tag);
      },
    },
    mounted() {},
  };
</script>

<style scoped></style>
