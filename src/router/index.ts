import { createMemoryHistory, createRouter as _createRouter, createWebHistory } from 'vue-router'

// Components
const Home = () => import('@/views/Home.vue')
const About = () => import('@/views/About.vue')
const NotFound = () => import(/* webpackPrefetch: true */ '@/views/NotFound.vue')

// Helpers
const isSSR = typeof window === 'undefined'
const history = isSSR ? createMemoryHistory() : createWebHistory()

export default function createRouter() {
  return _createRouter({
    history,
    routes: [
      { path: '/', component: Home, name: 'home' },
      { path: '/about', component: About, name: 'about' },
      { path: '/:pathMatch(.*)*', component: NotFound, name: 'not-found' }
    ]
  })
}
