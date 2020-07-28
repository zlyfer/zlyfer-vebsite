<template>
  <div id="404">
    <img src="../assets/404.png" />
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
