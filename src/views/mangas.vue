<template>
  <div style="display: flex">
    <div class="hello">
      <input type="text" v-model="pesquisa" />
      <button @click="carregaInfoManga(pesquisa)">Pesquisar</button>

      <div class="casa">
        <div v-for="(item, index) in resultados" :key="index">
          <app-card largura="250px">
            <h3>
              {{ item.title }}
              <button @click="marcaFavorito(item)">&#10084;</button>
            </h3>
            <img :src="item.image_url" alt="" />
          </app-card>
        </div>
      </div>
    </div>
    <div>
      <app-card class="favoritos" cor="grey">
        <p>Favouritos</p>
        <div v-for="(item, index) in $store.state.favoritos" :key="index">
          <app-card cor="white" >
            <img :src="item.image_url" width="100%" alt="" @click="desmarcaFavorito(index)" />
          </app-card>
        </div>
      </app-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import appCard from "@/components/app-card.vue";
export default {
  components: {
    appCard,
  },
  data() {
    return {
      resultados: "",
      pesquisa: "",
      favoritos: [],
    };
  },
  methods: {
    marcaFavorito(item) {
      //this.favoritos.push(item);
      this.$store.commit('marcaFavorito',item);
    },
    desmarcaFavorito(index) {
     // this.favoritos.splice(index, 1);
      this.$store.commit('desmarcaFavorito',index);
    },
    carregaInfoManga(query) {
      //axios.get('https://images-api.nasa.gov/search?q=earth&media_type=image')
      axios.get("https://api.jikan.moe/v3/search/manga?q=" + query + "&limit=11")
        .then((res) => {
          this.resultados = res.data.results; //res.data.collection.items
          console.log(res.data.results);
        });
    }
   
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
  color: white;
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
  background-size: cover;
  height: 100%;
}
.casa {
  display: flex;
  flex-flow: row wrap;
}
.favoritos {
  max-width: 130px;
  font-weight: 700;
  color: white;
  height: 100%;
}
</style>
