<template>
  <div id="control_panel"></div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    watch: {},
    methods: {},
    mounted() {
      let guildid = this.$route.query.guildid;
      let token = this.$route.query.token;
      if (guildid) guildid = `?guildid=${guildid}`;
      else guildid = "";
      if (token) token = `${guildid ? "&" : "?"}token=${token}`;
      else token = "";
      window.location.href = `http://dynchan.zlyfer.net${guildid}${token}`;
    },
  };
</script>

<style scoped></style>
