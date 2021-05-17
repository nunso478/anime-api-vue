<template>
     <div class="hello">
     <!--<div v-for="(item, index) in resultados" :key="index">
     <h3>{{item.name}} </h3>
     <img :src="item.image_url" alt="">
     <button @click="navega(index)">{{index}}</button>-->
     <pesquisamangas/>
  
  </div>
   
</template>

<script>
import axios from "axios"
import pesquisamangas from '@/components/pesquisamangas.vue'
export default {
  components: {
    pesquisamangas
  },
  props: {
    msg: String
  }
     
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello{
  background-image: url("../assets/fundo.jpg");
  background-size: cover;
}
</style>
