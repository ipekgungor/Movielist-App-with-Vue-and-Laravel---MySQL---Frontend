<template>
  <div class="movies-page">
    <h1>Movies</h1>
    <div class="search-bar">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search for a movie..."
        class="search-input"
      />
    </div>
    <div class="movies-container">
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
        <b-button :href="'/movies/' + movie.id">View Details</b-button>
        <b-button @click="addFavorite(movie.id)">Add to Favorites</b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movies: [],
      searchQuery: "",
    };
  },
  computed: {
    filteredMovies() {
      return this.movies.filter((movie) => {
        return movie.name
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase());
      });
    },
  },
  methods: {
    addFavorite(movieId) {
      fetch("http://127.0.0.1:8000/api/favorites", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ movie_id: movieId }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.message === "This movie is already in your favorites!") {
            alert("This movie is already in your favorites!");
          } else if (data.message === "Movie added to favorites") {
            alert("Movie added to favorites!");
            this.fetchFavorites(); //reload favorite list
          }
        })
        .catch(() => {});
    },
  },
  mounted() {
    fetch("http://127.0.0.1:8000/api/movies")
      .then((response) => response.json())
      .then((data) => {
        this.movies = data;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  },
};
</script>

<style scoped>
.movies-page {
  text-align: center;
  margin: 20px;
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

.movies-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
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

.movie-card .btn {
  background: black;
  border: none;
  margin: 4px;
}
</style>
