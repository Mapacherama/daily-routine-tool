/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables

import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'

import RoutineBuilder from '@/components/RoutineBuilder.vue'
import Home from '@/views/Home.vue'
import TimelineView from '@/components/TimelineView.vue'
import RoutineViewer from '@/components/RoutineViewer.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path:"/routine-builder",
    name: "Routine-Builder",
    component: RoutineBuilder,
  },
  {
    path:"/routine-viewer",
    name: "Routine-Viewer",
    component: RoutineViewer,
  },
  {
    path:"/timeline-view",
    name: "Timeline-View",
    component: TimelineView,
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(routes),
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
