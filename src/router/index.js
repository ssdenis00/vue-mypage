import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useUiStore } from '../stores/ui'

const redirectCustom = () => {
  const uiStore = useUiStore()

  if (!uiStore.$state.isLogged) {
    return { path: '/' }
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('../views/SignInView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LogInView.vue')
    },
    {
      path: '/feedback',
      name: 'feedback',
      redirect: redirectCustom,
      component: () => import('../views/FeedBackView.vue')
    },
    {
      path: '/lesson',
      name: 'lesson',
      redirect: redirectCustom,
      component: () => import('../views/LessonView.vue')
    },
    {
      path: '/exercise',
      name: 'exercise',
      redirect: redirectCustom,
      component: () => import('../views/ExerciseView.vue')
    }
  ]
})

export default router
