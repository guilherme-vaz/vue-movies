<template>
  <div>
    <!-- ==== HEADER ==== -->
    <header @click="back">
      <h1><span>Vue</span>Movies</h1>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
import {useRouter} from 'vue-router';

export default {
  name: "Vue Movie App",
  setup() {
    const router = useRouter();
    const back = () => router.replace("/")

    return {back}
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;600;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira Sans", sans-serif;
}

*::selection {
  background-color: transparentize(#42b883, 0.5);
}

body {
  background-color: #8f3b76;
}

a {
  text-decoration: none;
}

header {
  cursor: pointer;
}
</style>
