import { createRouter, createWebHistory } from 'vue-router'

import * as Public from '@/views/public'
import * as Admin from '@/views/admin'

import Login from '@/views/auth/Login.vue'

import { authGuard } from '@/_helpers/auth_guard'


const routes = [
  {
    path: '/',
    name: 'public',
    component: Public.PublicLayout,
    children: [
      { path: '/', name: 'Home', component: Public.Home },
      { path: '/cocktail', name: 'Cocktail', component: Public.Cocktail },
      { path: '/contact', name: 'Contact', component: Public.Contact },
    ]
  },
  {
    path: '/login', name: 'Login', component: Login
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin.AdminLayout,
    children: [
      // donne : http://localhost:8080/admin/dashboard
      { path: 'dashboard', name: 'Dashboard', component: Admin.Dashboard },
      { path: 'users/add', component: Admin.UserAdd },
      { path: 'users/edit/:id(\\d+)', component: Admin.UserEdit, props: true },
      { path: 'users/index', component: Admin.UserIndex },
      { path: 'cocktail/edit', component: Admin.CocktailEdit },
      { path: 'cocktail/index', component: Admin.CocktailIndex },
      { path: '/:pathMatch(.*)*', redirect: '/admin/dashboard' }
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

// Verrouillage de la partie admin avec vérification de la présence d'un token
router.beforeEach((to, from, next) => {
  console.log(to)
  if(to.matched[0].name == 'admin'){
    // Vérification de l'existence du token 
    authGuard(); 
  }
  // if the user is not authenticated, `next` is called twice
  next()
})

export default router
