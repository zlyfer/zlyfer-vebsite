<template>
  <div id="discord-bots">
    <b-card
      class="modules"
      title="DynChan Control Panel"
      img-src="./img/discord-bots/dynchan.png"
      img-alt="Discord Control Panel Image"
      footer-bg-variant="success"
    >
      <template v-slot:header>
        <b-badge pill @click="showTagInfo('english')" variant="secondary">ENGLISH</b-badge>
        <b-badge pill @click="showTagInfo('wip')" variant="warning">WIP</b-badge>
      </template>
      <b-card-text>
        DynChan Control Panel
      </b-card-text>
      <template v-slot:footer>
        <b-button-group class="card-link">
          <b-button variant="light" class="visit module" to="discord-bots/control-panel"
            >DynChan Control Panel</b-button
          >
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
