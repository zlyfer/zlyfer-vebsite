<template>
  <div id="app">
    <navbar />
    <router-view id="routerview"></router-view>
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
      };
    },
    methods: {
      showTagInfo(tag) {
        let tinfo = this.taginfo[tag];
        this.$bvToast.toast(tinfo.desc, {
          title: tinfo.title,
          variant: tinfo.variant,
          autoHideDelay: 5000,
          solid: true,
        });
      },
    },
    mounted() {},
  };
</script>

<style>
  :root {
  }
  *::-webkit-scrollbar-track {
    background-color: #fff;
  }
  *::-webkit-scrollbar {
    width: 8px;
  }
  *::-webkit-scrollbar-thumb {
    background-color: hsl(100, 61%, 3%);
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
    height: calc(100vh - 56px - 64px - 64px) !important;
    min-height: calc(100vh - 56.8125px);
  }
  div.card.modules {
    width: 42.5%;
    float: left;
    margin-left: 5%;
    margin-top: 50px;
    transition: box-shadow 0.3s ease;
  }
  div.card.modules:last-child {
    margin-bottom: 50px;
  }
  div.card.modules:hover {
    /* Source: https://gist.github.com/serglo/f9f0be9a66fd6755a0bda85f9c64e85f */
    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 3px 3px -2px rgba(0, 0, 0, 0.12), 0 1px 8px 0 rgba(0, 0, 0, 0.2);
  }
  a.btn.visit.module::before {
    content: "Visit ";
  }
  .visit.module {
    color: var(--success);
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
  }
  span.badge:hover {
    filter: brightness(1.1);
  }
  h4.card-title {
    font-weight: bold;
    color: #424242;
    font-size: 1.64rem;
  }
</style>
