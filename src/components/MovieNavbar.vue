<template>
  <b-navbar toggleable="lg" type="dark" variant="light">
    <b-navbar-brand href="/">MovieList App</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/">Home</b-nav-item>
        <b-nav-item href="/movies">Movies</b-nav-item>
        <b-nav-item href="/favorites">Favorites</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "MovieNavbar",
};
</script>
