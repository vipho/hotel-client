import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import {nextTick} from 'vue';
import {t} from '@/utils/locale'
import Home from '@/views/Home/Home.vue'
import Booking from '@/views/Booking/Booking.vue'
import Books from '@/views/Books/Books.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: t('homePage'),
    },
  },
  {
    path: '/booking',
    name: 'Booking',
    component: Booking,
    meta: {
      title: t('bookingPage'),
    },
  },
  {
    path: '/books',
    name: 'Books',
    component: Books,
    meta: {
      title: t('booksPage'),
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
