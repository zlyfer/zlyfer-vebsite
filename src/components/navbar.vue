<template>
  <div id="navbar">
    <b-navbar toggleable="lg" type="dark" fixed="top">
      <b-navbar-brand to="/">
        <b-icon-house class="h3 mb-0"></b-icon-house>
        Home
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item class="top" to="/games"
            ><b-icon-controller class="h3 mb-0"></b-icon-controller> Games
          </b-nav-item>
          <b-nav-item class="top" to="/visual-demonstrations">
            <b-icon-image-alt class="h3 mb-0"></b-icon-image-alt>Visual Demonstrations
          </b-nav-item>
          <b-nav-item class="top" to="/bbs2">
            <b-icon-building class="h3 mb-0"></b-icon-building> BBS II Emden
          </b-nav-item>
          <b-nav-item class="top" to="/miscellaneous">
            <b-icon-columns-gap class="h3 mb-0"></b-icon-columns-gap>Miscellaneous</b-nav-item
          >
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="top" to="/impressum"
            ><b-icon-file-text class="h3 mb-0"></b-icon-file-text> Impressum
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="margin"></div>

    <b-navbar toggleable="lg" type="dark" fixed="bottom">
      <b-navbar-toggle target="nav-collapse-bot"></b-navbar-toggle>
      <b-collapse id="nav-collapse-bot" is-nav>
        <b-navbar-nav style="width: 100% !important" justified="true">
          <b-nav-item class="social" id="github" target="_blank" href="https://github.com/zlyfer">GITHUB</b-nav-item>
          <b-nav-item
            class="social"
            id="youtube"
            target="_blank"
            href="https://www.youtube.com/channel/UCz57bHmcp5TGRY6URQYWLkQ"
            >YOUTUBE</b-nav-item
          >
          <b-nav-item class="social" id="instagram" target="_blank" href="https://www.instagram.com/zlyfer/"
            >INSTAGRAM</b-nav-item
          >
          <b-nav-item class="social" id="spotify" target="_blank" href="https://open.spotify.com/user/zlyfer"
            >SPOTIFY</b-nav-item
          >
          <b-nav-item class="social" id="steam" target="_blank" href="https://steamcommunity.com/id/zlyfer/"
            >STEAM</b-nav-item
          >
          <b-nav-item class="social" id="deviantart" target="_blank" href="https://www.deviantart.com/zlyfer"
            >DEVIANTART</b-nav-item
          >
          <b-nav-item class="social" id="slyncarli" target="_blank" href="https://www.twitch.tv/slyncarli"
            >TWITCH SLYNCARLI</b-nav-item
          >
          <b-nav-item class="social" id="zlyfah" target="_blank" href="https://www.twitch.tv/zlyfah"
            >TWITCH ZLYFAH</b-nav-item
          >
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
  nav {
    background-color: #161611 !important;
    background-image: url("../assets/navbar.svg");
    background-repeat: no-repeat;
    background-size: cover;
  }
  .nav-link {
    color: white !important;
  }
  .navbar-brand {
    text-align: center;
    min-width: 100px;
    width: auto;
    float: left;
  }
  .nav-item.top,
  .navbar-brand {
    border-radius: 5px;
  }
  .nav-item:hover,
  .navbar-brand:hover {
    background-color: #ffffff22;
    backdrop-filter: blur(10px);
  }

  div.margin {
    margin-top: 56.5px;
  }
  .social {
    backdrop-filter: blur(10px);
    margin: 5px;
  }
  .social:hover {
    filter: opacity(0.6);
  }
  #github {
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
  svg {
    margin-right: 5px;
  }
</style>
