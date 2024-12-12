<template>
  <div class="movie-detail-page">
    <b-card
      v-if="movie"
      :title="movie.name"
      :img-src="movie.poster_url"
      img-alt="Movie Poster"
      style="max-width: 25rem"
      img-top
    >
      <p><strong>Director:</strong> {{ movie.director }}</p>
      <p><strong>Actors:</strong> {{ movie.actors }}</p>
      <p><strong>Year:</strong> {{ movie.year }}</p>
      <p><strong>Summary:</strong> {{ movie.summary }}</p>
      <p><strong>IMDB Rating:</strong> {{ movie.imdb_rating }}</p>
      <p><strong>Available on:</strong> {{ movie.available_platforms }}</p>
      <b-button href="/movies">Back to Movies</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movie: null,
    };
  },
  mounted() {
    const movieId = this.$route.params.id;
    fetch(`http://127.0.0.1:8000/api/movies/${movieId}`)
      .then((response) => response.json())
      .then((data) => {
        this.movie = data;
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });
  },
};
</script>

<style scoped>
.movie-detail-page {
  text-align: center;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.movie-detail-page .b-card {
  max-width: 800px;
  margin: 0 auto;
}
.btn {
  background: black;
  border: none;
  margin-top: 10px;
}
</style>
