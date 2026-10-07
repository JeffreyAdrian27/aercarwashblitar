// frontend/src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ServicesView from '../views/ServicesView.vue'
import PricingView from '../views/PricingView.vue'
import GalleryView from '../views/GalleryView.vue'
import PromoView from '../views/PromoView.vue'
import LocationView from '../views/LocationView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/services', name: 'Services', component: ServicesView },
  { path: '/pricing', name: 'Pricing', component: PricingView },
  { path: '/gallery', name: 'Gallery', component: GalleryView },
  { path: '/promo', name: 'Promo', component: PromoView },
  { path: '/location', name: 'Location', component: LocationView },
  { path: '/contact', name: 'Contact', component: ContactView },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
