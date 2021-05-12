<template>
     <div class="hello">
     <div v-for="(item, index) in resultados" :key="index">
     <h3>{{item.name}} </h3>
     <img :src="item.image_url" alt="">
     <button @click="navega(index)">{{index}}</button>
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
      navega(manga){
          this.$router.push('/mangas/'+ manga);
    },  
    carregaInfo(){
      //axios.get('https://images-api.nasa.gov/search?q=earth&media_type=image')
      axios.get('https://api.jikan.moe/v3/manga/90/characters')
        .then(
          res =>{
            this.resultados = res.data.characters //res.data.collection.items
            console.log(res);
          }
        )
    }
  },
  mounted (){
       this.carregaInfo();
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
