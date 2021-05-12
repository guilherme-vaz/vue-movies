<template>
  <div class="movie-detail">
    <h2 class="movie-title">{{ movie.Title }}</h2>
    <img :src="movie.Poster" alt="Movie Poster" class="featured-img" />
    <p class="movie-year">{{ movie.Year }}</p>
    <p class="movie-plot">{{ movie.Plot }}</p>
    <p class="movie-genres">{{ movie.Genre }}</p>
  </div>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import env from "@/env.js";

export default {
  setup() {
    const movie = ref({});
    const route = useRoute();
    const resp = ref(null);
    const moviePlot = ref("");

    onBeforeMount(async () => {
      resp.value = await axios.get(
        `http://www.omdbapi.com/?apikey=${env.apikey}&i=${route.params.id}&plot=full`
      );
      movie.value = resp.value.data;
      moviePlot.value = resp.value.data.Plot;
    });

    return { movie };
  },
};
</script>

<style>
.movie-detail {
  padding: 16px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.movie-title {
  color: #fff;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 16px;
  text-align: center;
}

.featured-img {
  display: block;
  max-width: 200px;
  margin-bottom: 1rem;
}


.movie-year {
  color: lightgray;
  font-size: 0.95rem;
  opacity: 0.7;
}

.movie-plot {
  color: #fff;
  line-height: 1.4;
  font-size: 18px;
  text-align: center;
  margin: 0.95rem 0 0.95rem 0;
}

.movie-genres {
  color: lightgray;
  font-size: 0.75rem;
  opacity: 0.6;
  border: 1px solid gray;
  border-radius: 0.75rem;
  padding: 0.5rem;
}

@media screen and (min-width: 700px) {
  .movie-detail {
    padding: 16px;
    max-width: 50%;
  }

  .movie-plot {
    max-width: 600px;
  }
}
</style>