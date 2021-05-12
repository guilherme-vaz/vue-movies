import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './components/Home';
import MovieDetail from './components/MovieDetail'


const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: "/", component: Home },
      { path: "/movie/:id", name: "MovieDetail", component: MovieDetail}
    ]
});

const app = createApp(App)
app.use(router);
app.mount('#app')
