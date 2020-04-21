<template>
  <div id="home">
    <b-jumbotron header="zlyfer.net!!" lead="Meine persönliche Website mit meinen Projekten">
      <hr class="my-4" />
      <p>
        Dies ist die neuste überarbeitete Version. Von Zeit zu Zeit werden alle alten bekannten Features implementiert.
        Test
      </p>
      <b-button variant="primary" target="_blank" href="https://old.zlyfer.net">
        Alte Version
      </b-button>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style>
:root {
  --accent-color: hsl(215, 90%, 60%);
  --light-accent-color: hsl(215, 90%, 65%);
  --dark-accent-color: hsl(215, 90%, 55%);
  --background-color: #ffffff;
}
*::-webkit-scrollbar-track {
  background-color: var(--background-color);
}
*::-webkit-scrollbar {
  width: 15px;
}
*::-webkit-scrollbar-thumb {
  background-color: var(--light-accent-color);
}
*::-webkit-scrollbar-thumb:hover {
  background-color: var(--dark-accent-color);
}
</style>
