<template>
  <div id="impressum">
    <b-container>
      <b-row>
        <b-col></b-col>
        <b-col cols="12">
          <b-card title="Contact">
            <b-container>
              <b-row>
                <b-col cols="4"> <strong>Name</strong> </b-col>
                <b-col>Frederik Shull</b-col>
              </b-row>
              <b-row>
                <b-col cols="4"> <strong>E-Mail</strong> </b-col>
                <b-col>zlyfer(at)zlyfer.net</b-col>
              </b-row>
              <b-row>
                <b-col cols="4"> <strong>Address</strong> </b-col>
                <b-col>Bahnhofstraße 13</b-col>
              </b-row>
              <b-row>
                <b-col cols="4"></b-col>
                <b-col>36037 Fulda</b-col>
              </b-row>
              <b-row>
                <b-col cols="4"></b-col>
                <b-col>Germany</b-col>
              </b-row>
            </b-container>
          </b-card>
          <b-card title="Use of Cookies">
            <b-card-text><h5>What Are Cookies</h5></b-card-text>
            <b-card-text
              >As is common practice with almost all professional websites this site uses cookies, which are tiny files
              that are downloaded to your computer, to improve your experience. This page describes what information
              they gather, how we use it and why we sometimes need to store these cookies. We will also share how you
              can prevent these cookies from being stored however this may downgrade or 'break' certain elements of the
              sites functionality.
            </b-card-text>
            <b-card-text><h5>How We Use Cookies</h5></b-card-text>
            <b-card-text
              >We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry
              standard options for disabling cookies without completely disabling the functionality and features they
              add to this site. It is recommended that you leave on all cookies if you are not sure whether you need
              them or not in case they are used to provide a service that you use.
            </b-card-text>
            <b-card-text><h5>Disabling Cookies</h5></b-card-text>
            <b-card-text
              >You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help
              for how to do this). Be aware that disabling cookies will affect the functionality of this and many other
              websites that you visit. Disabling cookies will usually result in also disabling certain functionality and
              features of the this site. Therefore it is recommended that you do not disable cookies.
            </b-card-text>
            <b-card-text><h5>The Cookies We Set</h5></b-card-text>
            <b-card-text><h6>Login related cookies</h6></b-card-text>
            <b-card-text
              >We use cookies when you are logged in so that we can remember this fact. This prevents you from having to
              log in every single time you visit a new page. These cookies are typically removed or cleared when you log
              out to ensure that you can only access restricted features and areas when logged in.
            </b-card-text>
            <b-card-text><h6>Site preferences cookies</h6></b-card-text>
            <b-card-text
              >In order to provide you with a great experience on this site we provide the functionality to set your
              preferences for how this site runs when you use it. In order to remember your preferences we need to set
              cookies so that this information can be called whenever you interact with a page is affected by your
              preferences.
            </b-card-text>
            <b-card-text><h5>More Information</h5></b-card-text>
            <b-card-text
              >Hopefully that has clarified things for you and as was previously mentioned if there is something that
              you aren't sure whether you need or not it's usually safer to leave cookies enabled in case it does
              interact with one of the features you use on our site. This Cookies Policy was created with the help of
              the <a href="https://cookiepolicygenerator.com">GDPR Cookies Policy Generator</a>.
            </b-card-text>
          </b-card>
          <b-card title="Fonts">
            <b-card-text
              >This website uses some fonts and icons from Google Fonts. Visit
              <a href="https://fonts.google.com/">Google Fonts</a> for more information.<br />
              Credits to the font used in my logos & banners are below!
            </b-card-text>
          </b-card>
          <b-card title="Vue Bootstrap">
            <b-card-text
              >This site uses Vue Bootstrap. Visit <a href="https://bootstrap-vue.org/">Vue Bootstrap</a> for more
              information.</b-card-text
            >
          </b-card>
          <b-card title="Logo & Banner">
            <b-card-text
              >The font used in my logos and banners is a slightly modified version of
              <a href="https://fonts2u.com/scriber-bold-stencil.font">Scriber Bold Stencil</a> from
              <a href="https://fonts2u.com/font-designers/jonathan-hill.html">Jonathan Hill</a>. Their website:
              <a href="http://www.thenorthernblock.co.uk/">thenorthernblock.co.uk</a>!</b-card-text
            >
          </b-card>
          <b-card title="GitHub">
            <b-card-text
              >This site is open source and can be found on
              <a href="https://github.com/zlyfer/zlyfer-vebsite">github/zlyfer</a>!</b-card-text
            >
          </b-card>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
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

<style scoped>
  div.card {
    margin-bottom: 10px;
  }
  div.card:first-of-type {
    margin-top: 100px;
  }
  div.card:last-of-type {
    margin-bottom: 100px;
  }
</style>
