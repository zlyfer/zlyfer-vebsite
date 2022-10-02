<template>
  <div id="navbar">
    <b-navbar toggleable="md" type="dark" fixed="top">
      <!-- <b-navbar-brand to="/">
        <b-icon-house class="h3 mb-0"></b-icon-house>
        Home
      </b-navbar-brand> -->
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="top">
          <b-nav-item class="top" to="/">
            <b-icon-house class="h3 mb-0"></b-icon-house>
            Home
          </b-nav-item>
          <b-nav-item class="top" to="/discord-bots">
            <img src="../assets/discord.svg" alt="" width="28" height="28" title="Discord" />
            Discord Bots
          </b-nav-item>
          <b-nav-item class="top" to="/games">
            <b-icon-controller class="h3 mb-0"></b-icon-controller>
            Games
          </b-nav-item>
          <b-nav-item class="top" to="/visual-demonstrations">
            <b-icon-image-alt class="h3 mb-0"></b-icon-image-alt>
            Visual Demonstrations
          </b-nav-item>
          <b-nav-item class="top" to="/bbs2">
            <b-icon-building class="h3 mb-0"></b-icon-building>
            BBS II Emden
          </b-nav-item>
          <b-nav-item class="top" to="/miscellaneous">
            <b-icon-columns-gap class="h3 mb-0"></b-icon-columns-gap>
            Miscellaneous
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="top" @click="toggleDarkMode(true)">
            <b-icon-brightness-high-fill v-if="$parent.darkmode" class="h3 mb-0"></b-icon-brightness-high-fill>
            <b-icon-brightness-high v-if="!$parent.darkmode" class="h3 mb-0"></b-icon-brightness-high>
            <span>{{ $parent.darkmode ? "Light" : "Dark" }} Mode</span>
          </b-nav-item>
          <b-nav-item class="top" to="/imprint">
            <b-icon-file-text class="h3 mb-0"></b-icon-file-text>
            Imprint
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="margin"></div>

    <b-navbar toggleable="lg" type="dark" fixed="bottom">
      <b-navbar-toggle target="nav-collapse-bot"></b-navbar-toggle>
      <b-collapse id="nav-collapse-bot" is-nav>
        <b-navbar-nav style="width: 100% !important" justified>
          <b-nav-item class="social" id="youtube" target="_blank" href="https://youtube.com/channel/UCz57bHmcp5TGRY6URQYWLkQ">
            Youtube
          </b-nav-item>
          <b-nav-item class="social" id="tiktok" target="_blank" href="https://www.tiktok.com/@zlyfer2"> TikTok </b-nav-item>
          <b-nav-item class="social" id="zlyfah" target="_blank" href="https://twitch.tv/zlyfer2"> Twitch </b-nav-item>
          <b-nav-item class="social" id="instagram" target="_blank" href="https://instagram.com/zlyfer.arts/"> Instagram </b-nav-item>
          <b-nav-item class="social" id="github" target="_blank" href="https://github.com/zlyfer"> Github </b-nav-item>
          <!-- <b-nav-item class="social" id="spotify" target="_blank" href="https://open.spotify.com/user/zlyfer">
            SPOTIFY
          </b-nav-item> -->
          <!-- <b-nav-item class="social" id="steam" target="_blank" href="https://steamcommunity.com/id/zlyfer/">
            STEAM
          </b-nav-item> -->
          <!-- <b-nav-item class="social" id="deviantart" target="_blank" href="https://deviantart.com/zlyfer"> Deviantart </b-nav-item> -->
          <!-- <b-nav-item class="social" id="slyncarli" target="_blank" href="https://twitch.tv/slyncarli">
            TWITCH SLYNCARLI
          </b-nav-item> -->
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
    methods: {
      toggleDarkMode(change = false) {
        this.$parent.toggleDarkMode(change);
      },
    },
    mounted() {},
  };
</script>

<style scoped>
  nav.fixed-top {
    background-color: #161611 !important;
    background-image: url("../assets/navbar.svg");
    background-repeat: no-repeat;
    background-size: cover;
  }
  nav.fixed-bottom {
    background-color: #161611 !important;
  }
  .nav-link {
    color: #f1f1f1 !important;
  }
  .navbar-brand {
    color: #f1f1f1 !important;
    text-align: center;
    min-width: 110px;
    width: auto;
    height: 46px;
    float: left;
  }
  .nav-item.top,
  .navbar-brand {
    line-height: 30px;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }
  .nav-item:hover,
  .navbar-brand:hover {
    background-color: #ffffff22;
    backdrop-filter: blur(10px);
  }
  .navbar {
    padding: 0;
    min-height: 45px;
  }
  div.margin {
    margin-top: 45px;
  }
  .social {
    backdrop-filter: blur(10px);
    height: 45px;
    line-height: 30px;
  }
  #github {
    background-color: #24292e;
  }
  #tiktok {
    background-color: #24292e;
  }
  #youtube {
    background-color: #d32f2f;
  }
  #instagram {
    background-color: #c2185b;
  }
  #spotify {
    background-color: #43a047;
  }
  #steam {
    background-color: #424242;
  }
  #deviantart {
    background-color: #4caf50;
  }
  #slyncarli {
    background-color: #7b1fa2;
  }
  #zlyfah {
    background-color: #7b1fa2;
  }
  .social:hover {
    background-color: #ffffffa1 !important;
  }
  .social:hover a {
    color: #161616ff !important;
  }
  svg {
    margin-right: 5px;
  }
</style>
