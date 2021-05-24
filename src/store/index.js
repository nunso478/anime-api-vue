import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    favoritos: []
  },
  mutations: {
    marcaFavorito(state, item) {
      if (!(!!state.favoritos.find(res=> item.mal_id === res.mal_id))){
        state.favoritos = [...state.favoritos, item]
        localStorage.setItem('favoritoLocal',JSON.stringify(state.favoritos))
      }
    },
    desmarcaFavorito(state, index) {
      state.favoritos.splice(index, 1);
      localStorage.setItem('favoritoLocal',JSON.stringify(state.favoritos))
    },
    iniciaFavoritos(state,list){
      state.favoritos = list
    }


  },
  actions: {
    CarregaFavoritos({commit}){
      const favoritoLocalStorage = localStorage.getItem('favoritoLocal')
      if (!favoritoLocalStorage){
        localStorage.setItem('favoritoLocal','[]')
      
      }
      else
      {
        commit('iniciaFavoritos',JSON.parse(favoritoLocalStorage))
      }

    }
    
    
  },
  modules: {
  },
  getters: {

  }
})
