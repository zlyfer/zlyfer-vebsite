<template>
  <div id="app">
    <navbar />
    <router-view :style="'filter: invert(' + invert + ') hue-rotate(' + hue_rotate + 'deg);'" id="routerview"></router-view>
  </div>
</template>

<script>
  import navbar from "@/components/navbar.vue";

  export default {
    name: "app",
    components: {
      navbar,
    },
    data() {
      return {
        taginfo: {
          german: {
            title: "German Language",
            desc: "This page/project is written in German.",
            variant: "secondary",
          },
          english: {
            title: "English Language",
            desc: "This page/project is written in English.",
            variant: "secondary",
          },
          discontinued: {
            title: "Discontinued",
            desc: "This page/project is not finished/polished and got canceled.",
            variant: "danger",
          },
          wip: {
            title: "Work in Progress",
            desc: "This page/project is still work in progress and is subject to change.",
            variant: "warning",
          },
          finished: {
            title: "Finished",
            desc: "This page/project is finished and will only receive hotfixes.",
            variant: "success",
          },
          github: {
            title: "GitHub",
            desc: "This page/project is available as GitHub repository.",
            variant: "dark",
          },
        },
        darkmode: false,
        invert: 0,
        hue_rotate: 0,
      };
    },
    methods: {
      showTagInfo(tag) {
        let tinfo = this.taginfo[tag];
        this.$bvToast.toast(tinfo.desc, {
          title: tinfo.title,
          variant: tinfo.variant,
          autoHideDelay: 50000,
          solid: true,
        });
      },
      toggleDarkMode(change = false) {
        if (change) {
          this.darkmode = !this.darkmode;
          this.$cookies.set("darkmode", this.darkmode);
        }
        if (this.darkmode) {
          document.documentElement.style.setProperty("--bg", "#161616");
          document.documentElement.style.setProperty("--antibg", "#ececec");
          // this.invert = 1;
          // this.hue_rotate = 180;
        } else {
          document.documentElement.style.setProperty("--antibg", "#161616");
          document.documentElement.style.setProperty("--bg", "#ececec");
          // this.invert = 0;
          // this.hue_rotate = 0;
        }
      },
    },
    mounted() {
      if (!this.$cookies.isKey("darkmode")) this.$cookies.set("darkmode", false);
      this.darkmode = this.$cookies.get("darkmode") == "true" ? true : false;
      this.toggleDarkMode();
    },
  };
</script>

<style>
  :root {
    --bg: #ececec;
    --antibg: #161616;
  }
  body {
    background-color: var(--bg) !important;
  }
  * {
    transition: filter 0.1s ease-in;
  }
  *::-webkit-scrollbar-track {
    background-color: var(--bg);
  }
  *::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
  *::-webkit-scrollbar-thumb {
    background-color: #161616;
  }
  *::-webkit-scrollbar-thumb:hover {
    background-color: hsl(100, 61%, 33%);
  }
  div#app {
    padding: 0;
    margin: 0;
    width: 100%;
  }
  #routerview {
    overflow-y: auto;
    height: calc(100vh - (60px * 2)) !important;
  }
  div.card.modules {
    width: calc(50% - 75px);
    max-width: calc(960px - 50px);
    float: left;
    border: none;
  }
  div.card.modules:nth-of-type(odd) {
    margin: 50px 25px 0 50px;
  }
  div.card.modules:nth-of-type(even) {
    margin: 50px 0 0 25px;
  }
  img.card-img {
    border-radius: 0px;
  }
  div.card.modules:last-child {
    margin-bottom: 50px;
  }
  a.btn.visit,
  button.visit {
    display: block;
    border-radius: 0;
    height: 45px;
    line-height: 32px;
  }
  a.btn.visit.module::before {
    content: "Visit ";
  }
  div.card-footer {
    padding: 0;
    border-top: none;
  }
  .visit {
    font-weight: 200px !important;
    min-width: 100%;
    float: left;
  }
  .visit.module {
    /* background-color: var(--success); */
    background-color: #4caf50;
    color: var(--light);
    border: none;
  }
  .visit.module:hover {
    /* color: var(--success); */
    color: #4caf50;
  }
  .visit.github {
    color: var(--light);
  }
  div.btn-group.card-link {
    float: right;
  }
  span.badge {
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    margin-right: 5px;
    border: 1px solid transparent;
  }
  span.badge:hover {
    filter: brightness(1.1);
  }
  h4.card-title {
    font-weight: bold;
    font-size: 1.64rem;
  }

  /* div.toast {
    filter: opacity(0.5);
    backdrop-filter: blur(10px);
  }
  div.b-toast:hover div.toast,
  header.toast-header {
    filter: opacity(1);
  } */
</style>
