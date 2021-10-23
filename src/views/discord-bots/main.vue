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
      <b-card-text> DynChan </b-card-text>
      <template v-slot:footer>
        <a href="https://dynchan.net/home" target="_blank">
          <b-button variant="light" class="visit module"> DynChan Website </b-button>
        </a>
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
