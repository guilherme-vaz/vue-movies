<template>
  <div class="home">
    <div class="feature-card">
      <router-link :to="'/movie/' + firstId">
        <img
          v-if="movies != ''"
          :src="firstPoster"
          alt="Movie poster"
          class="feature-img"
        />
        <img v-else class="feature-img" src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" alt="">
        <div class="detail" v-if="movies != ''">
          <h3>{{ firstTitle }}</h3>
        </div>
        <div v-else class="detail">
          <h3>Search for any kinda of media below!</h3>
        </div>
      </router-link>
    </div>
    <form @submit.prevent="SearchMovies" class="search-box">
      <input
        type="text"
        placeholder="What are you looking for?"
        v-model="search"
      />
      <input type="submit" value="Search" />
    </form>
    <div class="movies-list">
      <div class="movie" v-for="movie in movies" :key="movie.imdbID">
        <router-link :to="'/movie/' + movie.imdbID" class="movie-link">
          <div class="product-img">
            <img :src="movie.Poster" alt="Movie poster" />
            <div class="type">{{ movie.Type }}</div>
          </div>
          <div class="detail">
            <p class="year">{{ movie.Year }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import env from "../env";
import axios from "axios";
import {moviePlot} from "./MovieDetail";

export default {
  setup() {
    const search = ref("");
    const movies = ref([]);
    const resp = ref([]);
  

    const firstTitle = ref("");
    const firstPoster = ref("");
    const firstId = ref("");

    const SearchMovies = async () => {
      if (search.value != "") {
        resp.value = await axios.get(`http://www.omdbapi.com/?apikey=${env.apikey}&s=${search.value}`)
        movies.value = resp.value.data.Search;

        firstTitle.value = movies.value[0].Title;
        firstPoster.value = movies.value[0].Poster;
        firstId.value = movies.value[0].imdbID;
        search.value = "";
        
      }
    };

    

    return {
      search,
      movies,
      SearchMovies,
      firstTitle,
      firstPoster,
      firstId,
      moviePlot
    };
  },
};
</script>

<style >
header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  background-color: #8f3b76;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
}

header h1 {
  color: #fff;
  font-size: 28px;
}

header span {
  color: #1ac0c6;
}

.home .feature-card {
  position: relative;
}

.feature-card .feature-img {
  display: block;
  width: 100%;
  height: 300px;
  object-fit: cover;

  position: relative;
  z-index: 0;
}

.feature-card .detail {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 1rem;
  z-index: 1;
}

.feature-card h3 {
  color: #fff;
  margin-bottom: 1rem;
}

.feature-card p {
  color: #fff;
  margin-bottom: 0.5rem;
}

.search-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.search-box input {
  display: block;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.search-box input[type="text"] {
  width: 100%;
  color: #fff;
  background-color: #c7417b;
  font-size: 20px;
  padding: 10px 16px;
  border-radius: 8px;
  margin-bottom: 15px;
  transition: 0.4s;
}

.search-box input[type="text"]::placeholder {
  color: #f3f3f3;
}

.search-box input[type="text"]:focus {
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
}

.search-box input[type="submit"] {
  widows: 100%;
  max-width: 300px;
  background-color: #1ac0c6;
  padding: 1rem;
  border-radius: 8px;
  color: #fff;
  font-size: 20px;
  text-transform: uppercase;
  transition: 0.4s;
}

.search-box input[type="submit"]:active {
  background-color: #3b8070;
}

.movies-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0px 8px;
}

.movie {
  max-width: 50%;
  flex: 1 1 50%;
  padding: 16px 8px;
}

.movie-link {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.product-img {
  position: relative;
  display: block;
}

.product-img img {
  display: block;
  width: 100%;
  height: 275px;
  object-fit: cover;
}

.product-img .type {
  position: absolute;
  padding: 8px 16px;
  background-color: #42b883;
  color: #fff;
  bottom: 16px;
  left: 0;
  text-transform: capitalize;
}

.detail {
  background-color: #e74645;
  padding: 16px 8px;
  flex: 1 1 100%;
  border-radius: 0px 0px 8px 8px;
}

.detail .year {
  color: #fff;
  font-size: 14px;
}

.detail .year h3 {
  color: #fff;
  font-weight: 600;
  font-size: 18px;
}

@media screen and (min-width: 700px){
  .home {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
  }

  .feature-card .detail {
    max-width: 100%;
    border-radius: 5px 5px 0 0;
  }

  .feature-card .feature-img {
    height: initial;
  }

  .feature-img {
    max-width: 100%;
  }


  .movies-list{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 900px;
  }

  .movie {
    max-width: 25%;
    flex: 30%;
  }
  
  .movie .detail {
    max-width: 40%;
  }


  .search-box {
    max-width: 600px;
  }

  .product-img img {

    object-fit: cover;
  }
}
</style>
