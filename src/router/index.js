import { createRouter, createWebHistory } from 'vue-router'
import ForumIndex from '../views/ForumIndex.vue'

const routes = [
  {
    path: '/',
    name: 'ForumIndex',
    component: ForumIndex,
    meta: { title: '论坛首页' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

router.afterEach((to) => {
  if (to.meta?.title) {
    document.title = `${to.meta.title} - DiscuzX 社区`
  }
})

export default router