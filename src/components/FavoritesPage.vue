<template>
  <div class="favorites-page">
    <h1>Your Favorite Movies</h1>
    <div class="search-bar">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search for a movie..."
        class="search-input"
      />
    </div>
    <div class="favorites-container">
      <b-card
        v-for="movie in filteredMovies"
        :key="movie.id"
        :title="movie.name"
        :img-src="movie.poster_url"
        img-alt="Movie Poster"
        img-top
        tag="article"
        class="movie-card"
        style="max-height: 45rem"
      >
        <p><strong>Director:</strong> {{ movie.director }}</p>
        <p><strong>Actors:</strong> {{ movie.actors }}</p>
        <p><strong>Year:</strong> {{ movie.year }}</p>
        <div class="movie-buttons">
          <b-button :href="'/movies/' + movie.id">View Details</b-button>
          <b-button @click="deleteFavorite(movie.id)"
            >Remove from Favorites</b-button
          >
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      favoriteMovies: [],
      searchQuery: "",
    };
  },
  computed: {
    filteredMovies() {
      return this.favoriteMovies.filter((movie) => {
        return movie.name
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase());
      });
    },
  },
  mounted() {
    this.fetchFavorites();
  },
  methods: {
    fetchFavorites() {
      fetch("http://127.0.0.1:8000/api/favorites")
        .then((response) => response.json())
        .then((data) => {
          this.fetchMoviesDetails(data);
        })
        .catch((error) => {
          console.error("Error fetching favorite movies:", error);
        });
    },

    fetchMoviesDetails(favorites) {
      const movieIds = favorites.map((favorite) => favorite.movie_id);

      Promise.all(
        movieIds.map((id) =>
          fetch(`http://127.0.0.1:8000/api/movies/${id}`).then((response) =>
            response.json()
          )
        )
      )
        .then((movies) => {
          this.favoriteMovies = movies;
        })
        .catch((error) => {
          console.error("Error fetching movie details:", error);
        });
    },

    deleteFavorite(movieId) {
      fetch(`http://127.0.0.1:8000/api/favorites/${movieId}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Movie removed from favorites:", data);
          this.favoriteMovies = this.favoriteMovies.filter(
            (movie) => movie.id !== movieId
          );
          alert("Movie removed from favorites!");
        })
        .catch((error) => {
          console.error("Error removing movie from favorites:", error);
          alert("Error removing movie from favorites!");
        });
    },
  },
};
</script>

<style scoped>
.favorites-page {
  text-align: center;
  margin: 20px;
}

.favorites-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.search-bar {
  margin-bottom: 20px;
}

.search-input {
  padding: 10px;
  font-size: 16px;
  width: 80%;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.movie-card {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 300px;
  width: 100%;
  background-color: #f8f9fa;
}

.movie-card img {
  width: 100%;
  height: 450px;
  object-fit: cover;
  border-radius: 8px;
}

.movie-card p {
  font-size: 14px;
  color: #555;
}

.movie-buttons {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.btn {
  background: black;
  border: none;
}
</style>
