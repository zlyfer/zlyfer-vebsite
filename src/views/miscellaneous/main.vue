<template>
  <div id="miscellaneous">Hello miscellaneous!</div>
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
