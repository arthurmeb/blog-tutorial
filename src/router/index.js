import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Braidsy from '../views/Braidsy.vue'
import fullDetails from '../views/fullDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/braidsy',
    name: 'Braidsy',
    component: Braidsy
  },
  {
    path: '/post/:id',
    name: 'fullDetails',
    component: fullDetails,
    props: true
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
