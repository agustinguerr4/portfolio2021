<template>
  <metainfo>
    <!-- <template v-slot:title="{ content }">{{
      content ? `${content} | SITE_NAME` : `SITE_NAME`
    }}</template> -->
  </metainfo>
  <router-view />
</template>

<script>
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "primevue/resources/themes/saga-green/theme.css";
//import "./assets/css/theme.css"
import "@/assets/src/_variables.scss";
import "@/assets/src/_grid.scss";
import "@/assets/src/_formlayout.scss";
import "@/assets/src/_display.scss";
import "@/assets/src/_text.scss";
import "@/assets/src/flexbox/_flexbox.scss";
import "@/assets/src/_spacing.scss";
import "@/assets/src/_elevation.scss";
// import { useMeta } from "vue-meta";

export default {
  name: "App",
  // metaInfo: {
  //   title: "Agustin Guerra - FrontEnd Developer",
  //   htmlAttrs: {
  //     lang: "en",
  //     amp: true,
  //   },
  // },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

@media screen and (max-width: 768px) {
  .dock-window.dock-advanced {
    min-height: calc(100vh - 34px);
    max-width: 100vw;
    overflow: hidden;
  }
  .p-dock-list {
    width: 100vw;
  }
  .p-dock .p-dock-action {
    width: 2rem;
    height: 2rem;
  }
  .p-dock-list {
    margin-bottom: 2px !important;
  }
}

@media screen and (min-width: 768px) {
  .dock-window.dock-advanced {
    height: calc(100vh - 34px) !important;
  }
  .p-dock-list {
    margin-bottom: 4px !important;
  }
}

body {
  margin: 0;
  padding: 0;
}
</style>
