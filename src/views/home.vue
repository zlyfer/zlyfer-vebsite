<template>
  <div id="home">
    <b-jumbotron header="zlyfer.net!!" lead="Meine persönliche Website mit meinen Projekten">
      <hr class="my-4" />
      <p>
        Dies ist die neuste überarbeitete Version. Von Zeit zu Zeit werden alle alten bekannten Features implementiert.
      </p>
      <b-button variant="primary" target="_blank" href="https://old.zlyfer.net">
        Alte Version
      </b-button>
    </b-jumbotron>
    <b-card
      class="modules"
      title="MODULE_TITLE"
      img-src="./img/_placeholder.png"
      img-alt="MODULE_IMAGE_ALT"
      footer-bg-variant="success"
    >
      <template v-slot:header>
        <b-badge pill @click="showTagInfo('german')" variant="secondary">GERMAN</b-badge>
        <b-badge pill @click="showTagInfo('english')" variant="secondary">ENGLISH</b-badge>
        <b-badge pill @click="showTagInfo('discontinued')" variant="danger">DISCONTINUED</b-badge>
        <b-badge pill @click="showTagInfo('wip')" variant="warning">WIP</b-badge>
        <b-badge pill @click="showTagInfo('finished')" variant="success">FINISHED</b-badge>
        <b-badge pill @click="showTagInfo('github')" variant="dark">GITHUB</b-badge>
      </template>
      <b-card-text>
        MODULE_TEXT
      </b-card-text>
      <template v-slot:footer>
        <b-button-group class="card-link">
          <b-button variant="dark" class="visit github">GitHub</b-button>
          <b-button variant="light" class="visit module" to="MODULE_URL">MODULE_NAME</b-button>
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
