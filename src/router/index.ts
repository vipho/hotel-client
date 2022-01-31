import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import {nextTick} from 'vue';
import {t} from '@/utils/locale'
import Home from '@/views/Home/Home.vue'
import Guests from '@/views/Guests/Guests.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: t('home-page'),
    },
  },
  {
    path: '/guests',
    name: 'Guests',
    component: Guests,
    meta: {
      title: t('guests-page'),
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.afterEach((to, from) => {
  nextTick(() => {
    //@ts-ignore
    document.title = to.meta.title ? `${to.meta.title} — ${t('project')}` : t('project');
  })
})

export default router
