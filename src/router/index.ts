import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import {SYSTEM_TITLE} from '@/config/constant'
import { breadcrumEvent } from './router-logic'
let routeModules: any[] = []
const requireRoute = require.context('./modules', true, /\.ts/)
requireRoute.keys().forEach(key => {
    routeModules.push(...(requireRoute(key).default || requireRoute(key)))
})

const routes: Array<RouteRecordRaw> = [
  ...routeModules
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to: any, from: any, next: any) => {
  (window as any).document.title = to.meta.title + ' - ' + SYSTEM_TITLE
  breadcrumEvent(to)
  next()
})

export default router
