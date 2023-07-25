import { createRouter, createWebHistory } from 'vue-router'
import { useUiStore } from '../stores/ui'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignUpView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LogInView.vue')
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: () => import('../views/FeedBackView.vue')
    },
    {
      path: '/lesson',
      name: 'lesson',
      component: () => import('../views/LessonView.vue')
    },
    {
      path: '/exercise',
      name: 'exercise',
      component: () => import('../views/ExerciseView.vue')
    }
  ]
})

router.beforeEach((to, _, next) => {
  const uiStore = useUiStore()

  if (
    !uiStore.$state.isLogged &&
    (to.name === 'feedback' || to.name === 'lesson' || to.name === 'exercise')
  ) {
    return next({ name: 'login' })
  } else {
    next()
  }
})

export default router
