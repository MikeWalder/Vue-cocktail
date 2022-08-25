import { createRouter, createWebHistory } from 'vue-router'

import * as Public from '@/views/public'
//import NotFound from '@/views/public/NotFound.vue'
import * as Admin from '@/views/admin'



const routes = [
  {
    path: '/',
    name: 'Public',
    component: Public.PublicLayout,
    children: [
      { path: '/', name: 'Home', component: Public.Home },
      { path: '/cocktail', name: 'Cocktail', component: Public.Cocktail },
      { path: '/contact', name: 'Contact', component: Public.Contact },
    ]
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin.AdminLayout,
    children: [
      // donne : http://localhost:8080/admin/dashboard
      { path: 'dashboard', name: 'Dashboard', component: Admin.Dashboard },
      { path: 'users/add', component: Admin.UserAdd },
      { path: 'users/edit/:id', component: Admin.UserEdit },
      { path: 'users/index', component: Admin.UserIndex },
      { path: 'cocktail/edit', component: Admin.CocktailEdit },
      { path: 'cocktail/index', component: Admin.CocktailIndex },
    ]
  },
  {
    path: '/:pathMatch(.*)*', redirect: '/'  // redirection 
    //path: '/:pathMatch(.*)*', component: NotFound // Appel d'un composant
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
