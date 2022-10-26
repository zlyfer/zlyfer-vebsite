<template>
  <div id="home">
    <b-card
      :header-bg-variant="getDarkMode() ? 'dark' : 'light'"
      :header-text-variant="getDarkMode() ? 'light' : 'dark'"
      :bg-variant="getDarkMode() ? 'dark' : 'light'"
      :text-variant="getDarkMode() ? 'light' : 'dark'"
    >
      <b-card-title>zlyfer.net</b-card-title>
      <b-card-text> My personal website with my projects </b-card-text>
      <hr class="my-4" />
      <b-button variant="primary" target="_blank" href="https://old.zlyfer.net"> Old Version </b-button>
    </b-card>

    <!-- <b-card class="modules" title="MODULE_TITLE" img-src="../img/_placeholder.png" img-alt="MODULE_IMAGE_ALT" footer-bg-variant="danger">
      <template v-slot:header>
        <b-badge pill @click="showTagInfo('german')" variant="secondary">GERMAN</b-badge>
        <b-badge pill @click="showTagInfo('english')" variant="secondary">ENGLISH</b-badge>
        <b-badge pill @click="showTagInfo('discontinued')" variant="danger">DISCONTINUED</b-badge>
        <b-badge pill @click="showTagInfo('wip')" variant="warning">WIP</b-badge>
        <b-badge pill @click="showTagInfo('finished')" variant="success">FINISHED</b-badge>
        <b-badge pill @click="showTagInfo('github')" variant="dark">GITHUB</b-badge>
      </template>
      <b-card-text> MODULE_TEXT </b-card-text>
      <template v-slot:footer>
        <b-button variant="dark" class="visit github">GitHub</b-button>
        <b-button variant="light" class="visit module" to="MODULE_URL">MODULE_NAME</b-button>
        <b-button-group class="card-link"> </b-button-group>
      </template>
    </b-card> -->
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
