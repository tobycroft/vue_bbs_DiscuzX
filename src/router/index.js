import { createRouter, createWebHistory } from 'vue-router'
import ForumIndex from '../views/ForumIndex.vue'
import ForumDisplay from '../views/ForumDisplay.vue'
import ViewThread from '../views/ViewThread.vue'

const routes = [
  {
    path: '/',
    name: 'ForumIndex',
    component: ForumIndex,
    meta: { title: '论坛首页' },
  },
  {
    path: '/forum/:fid',
    name: 'ForumDisplay',
    component: ForumDisplay,
    meta: { title: '版块' },
  },
  {
    path: '/thread/:tid',
    name: 'ViewThread',
    component: ViewThread,
    meta: { title: '帖子' },
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