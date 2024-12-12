<template>
  <div id="app">
    <MovieNavbar />
    <router-view></router-view> <!--For other routes-->
    <MovieFooter />
  </div>
</template>

<script>
import MovieNavbar from "./components/MovieNavbar.vue";
import MovieFooter from "./components/MovieFooter.vue";

export default {
  name: "App",
  components: {
    MovieNavbar,
    MovieFooter,
  },
};
</script>

<style></style>
