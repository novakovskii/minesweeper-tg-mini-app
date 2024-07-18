import { createWebHistory, createRouter } from 'vue-router'

import LoginView from '../views/LoginView.vue'
import MainView from '../views/MainView.vue'
import GameView from '../views/GameView.vue'
import ProfileView from '../views/ProfileView.vue'
import HelpView from '../views/HelpView.vue'

const routes = [
  { path: '/', component: LoginView },
  { path: '/main', component: MainView },
  { path: '/game', component: GameView, props: route => ({ difficulty: route.query.difficulty })},
  { path: '/profile', component: ProfileView },
  { path: '/help', component: HelpView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router