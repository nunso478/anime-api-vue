<template>
  <div id="app">
    <app-card cor="lightblue">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/pesquisa">pesquisa</router-link> |
        <router-link to="/mangas">mangas</router-link> |
        <router-link to="/person">person</router-link> |
        <router-link to="/favoritos">favoritos</router-link> |
        <router-link to="/login">login</router-link> |
        <router-link to="/register">register</router-link>
      </div>
      
    </app-card>
    <router-view />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import appCard from "./components/app-card.vue";
export default Vue.extend({
  components: {
    appCard,
  },
});
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  background: none;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
body{
  background-image: url("./assets/fundo.jpg");
  background-size: cover;
  height: 100vh;
}
</style>
