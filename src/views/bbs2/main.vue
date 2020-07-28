<template>
  <div id="bbs2">
    <b-card
      class="modules"
      title="Vertretungsplan"
      img-src="./img/bbs2/vertretungsplan.png"
      img-alt="Vertretungsplan"
      footer-bg-variant="success"
    >
      <template v-slot:header>
        <b-badge pill @click="showTagInfo('german')" variant="secondary">GERMAN</b-badge>
        <b-badge pill @click="showTagInfo('wip')" variant="warning">WIP</b-badge>
      </template>
      <b-card-text>
        My own version of the replacement plan of my old school.
      </b-card-text>
      <template v-slot:footer>
        <b-button-group class="card-link">
          <b-button variant="light" class="visit module" to="/bbs2/vplan">Vertretungsplan</b-button>
        </b-button-group>
      </template>
    </b-card>
    <b-card
      class="modules"
      title="Vertretungsplan API"
      img-src="./img/_placeholder.png"
      img-alt="Vertretungsplan API"
      footer-bg-variant="success"
    >
      <template v-slot:header>
        <b-badge pill @click="showTagInfo('german')" variant="secondary">GERMAN</b-badge>
        <b-badge pill @click="showTagInfo('wip')" variant="warning">WIP</b-badge>
      </template>
      <b-card-text>
        The API of the replacement plan of my old school.
      </b-card-text>
      <template v-slot:footer>
        <b-button-group class="card-link">
          <b-button variant="light" class="visit module" to="/bbs2/vplan-api">Vertretungsplan API</b-button>
        </b-button-group>
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
      showTagInfo(tag) {
        this.$parent.showTagInfo(tag);
      },
    },
    mounted() {},
  };
</script>

<style scoped></style>
