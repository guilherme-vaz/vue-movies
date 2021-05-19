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
  background-color: #35495E;
}

a {
  text-decoration: none;
}

header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  background-color: #2C3D4E;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

header h1 {
  color: #fff;
  font-size: 28px;
}

header span {
  color: #1ac0c6;
}
</style>
