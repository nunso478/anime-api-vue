<template>
  <div id="app">
    <app-card cor="#2f3640">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/pesquisa">pesquisa</router-link> |
        <router-link to="/mangas">mangas</router-link> |
        <router-link to="/person">person</router-link> |
        <router-link to="/favoritos">favoritos</router-link> |
        <b-dropdown right text="Sign">
          <router-link to="/login">login</router-link>
          <b-dropdown-divider></b-dropdown-divider>
          <router-link to="/register">register</router-link>
        </b-dropdown>
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
  mounted() {
    //this.$store.dispatch('carregaInfoManga')
    this.$store.dispatch("CarregaFavoritos");
  },
});
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(41, 36, 36);
  height: 100vh;
  background: none;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: red;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
body {
  background-image: url("./assets/fundo.jpg");
  background-size: cover;
  height: 100vh;
}
</style>
