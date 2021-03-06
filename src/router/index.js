import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import pesquisa from '../views/pesquisa.vue'
import login from '../views/login.vue'
import register from '../views/register.vue'
import manga from '../views/manga.vue'
import mangas from '../views/mangas.vue'
import person from '../views/person.vue'
import favoritos from '../views/favoritos.vue'
import PageNotFound from '../views/PageNotFound.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pesquisa',
    component: pesquisa
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/register',
    component: register
  },
  {
    path: '/mangas',
    component: mangas,
    beforeEnter: (to, from, next) => {
      if ((store.state.user.length == 0)) {
        console.log('user', store.state.user)
        next('/login')
      } else {
        console.log('tem login')
        next()
      }
    }
  },
  {
    path: '/person',
    component: person,
    beforeEnter: (to, from, next) => {
      if ((store.state.user.length == 0)) {
        console.log('user', store.state.user)
        next('/login')
      } else {
        console.log('tem login')
        next()
      }
    }
  },
  {
    path: '/favoritos',
    component: favoritos
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  { path: "*", component: PageNotFound }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
