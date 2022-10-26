<template>
  <div id="discord-bots">
    <b-card
      class="modules"
      img-src="../img/discord-bots/dynchan.png"
      img-alt="DynChan WebPanel"
      :header-bg-variant="getDarkMode() ? 'dark' : 'light'"
      :header-text-variant="getDarkMode() ? 'light' : 'dark'"
      :bg-variant="getDarkMode() ? 'dark' : 'light'"
      :text-variant="getDarkMode() ? 'light' : 'dark'"
      footer-bg-variant="success"
    >
      <template v-slot:header>
        <b-badge pill @click="showTagInfo('english')" variant="secondary">ENGLISH</b-badge>
        <b-badge pill @click="showTagInfo('github')" variant="dark">GITHUB</b-badge>
      </template>
      <b-card-title>DynChan WebPanel</b-card-title>
      <b-card-text> DynChan </b-card-text>
      <template v-slot:footer>
        <a href="https://dynchan.net/" target="_blank">
          <b-button :variant="getDarkMode() ? 'light' : 'dark'" class="visit module"> DynChan Website </b-button>
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
