import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Home from '@/views/Home/Home.vue'
import Booking from '@/views/Booking/Booking.vue'
import Books from '@/views/Books/Books.vue'
import Book from "@/views/Books/Book.vue";
import Profile from "@/views/Profile/Profile.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/booking',
    name: 'Booking',
    component: Booking,
  },
  {
    path: '/books',
    name: 'Books',
    component: Books,
  },
  {
    path: '/books/:id',
    name: 'Book',
    component: Book,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
