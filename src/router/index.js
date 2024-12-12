import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import MoviesPage from "../components/MoviesPage.vue";
import MoviePage from "../components/MoviePage.vue";
import FavoritesPage from "../components/FavoritesPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/favorites",
    name: "FavoritesPage",
    component: FavoritesPage,
  },
  {
    path: "/movies",
    name: "MoviesPage",
    component: MoviesPage,
  },
  {
    path: "/movies/:id",
    name: "MoviePage",
    component: MoviePage,
    props: true, // Get parameters like prop in the url
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
