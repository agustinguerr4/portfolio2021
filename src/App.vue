<template>
  <router-view />
</template>

<script>
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "primevue/resources/themes/saga-green/theme.css";
//import "./assets/css/theme.css"
import "primeflex/src/_variables.scss";
import "primeflex/src/_grid.scss";
import "primeflex/src/_formlayout.scss";
import "primeflex/src/_display.scss";
import "primeflex/src/_text.scss";
import "primeflex/src/flexbox/_flexbox.scss";
import "primeflex/src/_spacing.scss";
import "primeflex/src/_elevation.scss";

export default {
  name: "App",
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
.p-dock-list{
  width: 100vw;
}
.p-dock .p-dock-action {
    width: 2rem;
    height: 2rem;
}
}

@media screen and (min-width: 768px) {
  .dock-window.dock-advanced {
    height: calc(100vh - 34px) !important;
  }
}

body {
  margin: 0;
  padding: 0;
}
</style>
