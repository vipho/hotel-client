import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import {nextTick} from 'vue';
import Home from '@/views/Home.vue'
import {t} from '@/utils/locale'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: t('main-page'),
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
