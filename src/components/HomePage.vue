<template>
  <div class="homepage">
    <main>
      <div class="hero-container">
        <h1>MOVIE LIST APP</h1>
        <p>
          Discover different movies, organize your list as you wish and enjoy
          the world of movies!
        </p>
      </div>
      <div class="text-area">
        <div class="slogan">
          <p>
            Unleash your inner movie buff and explore films tailored to your
            taste! Click for endless fun!
          </p>
          <b-button href="/">GET STARTED</b-button>
        </div>
      </div>
      <div class="movie-cards">
        <div>
          <b-card
            title="Discover Our Movie Collection"
            img-src="https://s3-us-west-1.amazonaws.com/wp.uploads.wamu.org/uploads/sites/3/2015/12/2015_12_18_year-end-best.jpg"
            img-alt="Image"
            img-top
            tag="article"
            img-height="500px"
            class="movie-card mb-4"
          >
            <b-card-text>
              Explore a wide variety of movies, from timeless classics to the
              latest blockbusters. Find your next favorite film, whether you're
              in the mood for action, drama, comedy, or something else entirely.
              Browse through detailed information and discover where to stream
              your movies!
            </b-card-text>

            <b-button href="/movies">View Movies</b-button>
          </b-card>
        </div>
        <div>
          <b-card
            title="Manage Your Favorite Movies"
            img-src="https://dims.apnews.com/dims4/default/ddf480c/2147483647/strip/true/crop/3000x3562+0+0/resize/504x599!/quality/90/?url=https%3A%2F%2Fstorage.googleapis.com%2Fafs-prod%2Fmedia%2Fe53811360eed4b8ba26b5f635d703a7c%2F3000.jpeg"
            img-alt="Image"
            img-top
            tag="article"
            img-height="500px"
            class="movie-card mb-4"
          >
            <b-card-text>
              Keep track of the films you love the most! Add movies to your
              favorites list and easily access them whenever you want. Whether
              it's a classic you've rewatched countless times or a recent hit,
              your favorites are just a click away. Never miss a movie you want
              to watch again.
            </b-card-text>

            <b-button href="/favorites">View Favorites</b-button>
          </b-card>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
.hero-container {
  background: url("https://static1.srcdn.com/wordpress/wp-content/uploads/2023/11/greatest-movies-of-all-time.jpg")
    center center/cover no-repeat;
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  object-fit: contain;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

.hero-container > h1 {
  color: #fff;
  font-size: 100px;
  margin-top: 100px;
}

.hero-container > p {
  margin-top: 8px;
  color: #fff;
  font-size: 32px;
}

.text-area {
  height: 40vh;
  width: 100%;
  padding: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slogan {
  height: 25vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;
  border-radius: 100px;
  border: solid;
}

.slogan > p {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 20px;
  font-weight: 800px;
  color: darkslategray;
  margin: 0 0 10px 0;
}

.slogan > b-button {
  font-size: 16px;
}

.movie-cards {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  margin-top: 40px;
}

.movie-card {
  max-width: 25rem;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.btn {
  background: black;
  border: none;
  margin-top: 10px;
}
</style>
