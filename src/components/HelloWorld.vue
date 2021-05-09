<template>
   
     <div class="hello">
    <h1>{{ msg }}</h1>
     <input type="text" v-model="pesquisa">
     <button @click="carregaInfo(pesquisa)">Pesquisar anime</button>
     <div v-for="(item, index) in resultados"
     :key="index">
     <h3>{{item.title}} <button>&#10084;</button></h3>
     <img :src="item.image_url" alt="">
     <!--<h3>{{item.data[0].title}}</h3>
     <img :src="item.links[0].href" alt="">
     <p>{{item.data[0].description}}</p> -->
  </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
      data(){
    return{
      resultados:"",
      pesquisa:""
      
    }
  },
  methods:{
    carregaInfo(query){
      //axios.get('https://images-api.nasa.gov/search?q=earth&media_type=image')
      axios.get('https://api.jikan.moe/v3/search/anime?q='+ query)
        .then(
          res =>{
            this.resultados = res.data.results //res.data.collection.items
            console.log(res.data.results);
          }
        )
    }
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
</style>
