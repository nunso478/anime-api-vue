<template>
  <div class="">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="pesquisa" />
    <button @click="carregaInfo(pesquisa)">Pesquisar anime</button>
    <div class="casa">
  <div v-for="(item, index) in resultados" :key="index">
      <app-card largura="250px">
        <h3>{{ item.title }} <button>&#10084;</button></h3>
        <img :src="item.image_url" alt="" />
        <!--<h3>{{item.data[0].title}}</h3>
     <img :src="item.links[0].href" alt="">
     <p>{{item.data[0].description}}</p> -->
      </app-card>
    </div>
    </div>
  
  </div>
</template>

<script>
import axios from "axios";
import appCard from "@/components/app-card.vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    appCard,
  },
  data() {
    return {
      resultados: "",
      pesquisa: "",
    };
  },
  methods: {
    carregaInfo(query) {
      //axios.get('https://images-api.nasa.gov/search?q=earth&media_type=image')
      axios
        .get("https://api.jikan.moe/v3/search/anime?q=" + query)
        .then((res) => {
          this.resultados = res.data.results; //res.data.collection.items
          console.log(res.data.results);
        });
    },
  },
};
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
.hello {
  background-image: url("../assets/fundo.jpg");
  background-size: cover;
  height: 100%;
}
.casa{
  display: flex;
  flex-flow: row wrap;
  color: aqua;
}
</style>
