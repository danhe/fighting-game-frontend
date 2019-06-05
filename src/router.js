import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/character/creation',
      name: 'Créer ton personnage',
      component: () => import(/* webpackChunkName: "about" */ './views/CharacterCreation.vue'),
    },
    {
      path: '/fight/start',
      name: 'Lance un combat',
      component: () => import(/* webpackChunkName: "about" */ './views/MatchStart.vue'),
    },
  ],
})
