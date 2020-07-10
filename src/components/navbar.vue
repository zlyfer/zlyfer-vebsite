<template>
  <div id="navbar">
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand to="/">
        <b-icon-house-fill class="h3 mb-0"></b-icon-house-fill>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/games">Games</b-nav-item>
          <b-nav-item to="/visual-demonstrations">Visual Demonstrations</b-nav-item>
          <b-nav-item to="/bbs2-emden">BBS2 Emden</b-nav-item>
          <b-nav-item to="/miscellaneous">Miscellaneous</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/impressum"> Impressum </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
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

<style scoped>
  .nav-link {
    color: white !important;
  }
  .navbar-brand {
    text-align: center;
    min-width: 40px;
    width: auto;
  }
  .nav-item,
  .navbar-brand {
    border-radius: 5px;
  }
  .nav-item:hover,
  .navbar-brand:hover {
    background-color: #00000022;
  }
</style>
