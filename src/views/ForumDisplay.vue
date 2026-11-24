<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { findForum, getForumBreadcrumb, getForumThreads, getForumTypes } from '../mock'

const route = useRoute()
const fid = computed(() => Number(route.params.fid))
const forum = computed(() => findForum(fid.value))
const breadcrumb = computed(() => getForumBreadcrumb(fid.value))
const types = computed(() => getForumTypes(fid.value))
const allThreads = computed(() => getForumThreads(fid.value))

const activeType = ref('all')
const sortBy = ref('lastReply')
const threadFilter = ref('all')
const showPinned = ref(true)
const collected = ref(false)
const page = ref(1)
const pageSize = 15

const threadFilters = [
  { id: 'all', name: '全部主题' },
  { id: 'latest', name: '最新' },
  { id: 'hot', name: '热门' },
  { id: 'hotthread', name: '热帖' },
  { id: 'essence', name: '精华' },
]

const filteredThreads = computed(() => {
  let list = allThreads.value
  if (activeType.value !== 'all') {
    list = list.filter((t) => t.typeId === activeType.value)
  }
  if (threadFilter.value === 'hotthread') {
    list = list.filter((t) => t.hot)
  } else if (threadFilter.value === 'essence') {
    list = list.filter((t) => t.essence)
  }
  const pinned = showPinned.value ? list.filter((t) => t.pinned) : []
  const normal = showPinned.value ? list.filter((t) => !t.pinned) : list
  let sortMode = sortBy.value
  if (threadFilter.value === 'latest') sortMode = 'time'
  if (threadFilter.value === 'hot') sortMode = 'views'
  const sorted = [...normal].sort((a, b) => {
    if (sortMode === 'replies') return b.replies - a.replies
    if (sortMode === 'views') return b.views - a.views
    if (sortMode === 'time') return b.time.localeCompare(a.time)
    return b.lastReply.localeCompare(a.lastReply)
  })
  return [...pinned, ...sorted]
})

const total = computed(() => filteredThreads.value.length)
const totalPages = computed(() => Math.max(1, Math.ceil(total.value / pageSize)))
const pagedThreads = computed(() => {
  const start = (page.value - 1) * pageSize
  return filteredThreads.value.slice(start, start + pageSize)
})

const pageList = computed(() => {
  const pages = []
  const cur = page.value
  const max = totalPages.value
  for (let i = 1; i <= max; i++) {
    if (i === 1 || i === max || (i >= cur - 2 && i <= cur + 2)) {
      pages.push(i)
    } else if (pages[pages.length - 1] !== '...') {
      pages.push('...')
    }
  }
  return pages
})

function goPage(p) {
  if (p === '...' || p < 1 || p > totalPages.value) return
  page.value = p
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

watch(
  () => route.params.fid,
  () => {
    activeType.value = 'all'
    threadFilter.value = 'all'
    showPinned.value = true
    collected.value = false
    page.value = 1
  }
)
</script>

<template>
  <div class="forum-display container" v-if="forum">
    <nav class="breadcrumb">
      <a href="/">首页</a>
      <template v-for="(item, idx) in breadcrumb.slice(1)" :key="idx">
        <span class="sep">›</span>
        <RouterLink v-if="!item.active" :to="item.href" class="crumb-link">{{ item.name }}</RouterLink>
        <span v-else class="crumb-current">{{ item.name }}</span>
      </template>
    </nav>

    <div class="card forum-head">
      <div class="forum-head-inner">
        <img :src="forum.iconUrl" :width="forum.iconWidth" :alt="forum.name" class="forum-head-icon" />
        <div class="forum-head-info">
          <h1 class="forum-head-title">{{ forum.name }}</h1>
          <p class="forum-head-desc">{{ forum.desc }}</p>
          <div class="forum-head-meta">
            <span>主题 <em>{{ forum.threads.toLocaleString() }}</em></span>
            <span>帖子 <em>{{ forum.posts.toLocaleString() }}</em></span>
            <span>今日 <em class="today">{{ forum.todayPosts }}</em></span>
            <span v-if="forum.moderators?.length" class="mods">
              版主：
              <a v-for="m in forum.moderators" :key="m" href="#" class="mod-name">{{ m }}</a>
            </span>
          </div>
        </div>
        <div class="forum-head-actions">
          <a href="#" class="btn-collect" :class="{ active: collected }" @click.prevent="collected = !collected">
            {{ collected ? '已收藏' : '收藏本版' }}
          </a>
          <a href="#post" class="btn-post">发布新帖</a>
        </div>
      </div>
      <div v-if="forum.rules" class="forum-rules" v-html="forum.rules"></div>
    </div>

    <div v-if="forum.subForums?.length" class="card sub-forum-box">
      <div class="block-header">
        <div class="block-title"><span class="title-icon">📁</span><span>子版块</span></div>
      </div>
      <div class="sub-forum-grid">
        <RouterLink v-for="sub in forum.subForums" :key="sub.id" :to="`/forum/${sub.id}`" class="sub-forum-item">
          <div class="sub-forum-icon">📂</div>
          <div class="sub-forum-body">
            <div class="sub-forum-name">{{ sub.name }}</div>
            <div class="sub-forum-meta">
              <span>主题 {{ sub.threads }}</span>
              <span>帖子 {{ sub.posts }}</span>
            </div>
            <div class="sub-forum-last" v-if="sub.lastPost" :title="sub.lastPost.title">
              {{ sub.lastPost.title }}
            </div>
          </div>
        </RouterLink>
      </div>
    </div>

    <div class="card thread-list">
      <div class="type-bar">
        <a
          v-for="t in types"
          :key="t.id"
          href="#"
          class="type-item"
          :class="{ active: activeType === t.id }"
          @click.prevent="activeType = t.id"
        >
          {{ t.name }}<em v-if="t.count">{{ t.count }}</em>
        </a>
        <div class="sort-bar">
          <span class="sort-label">排序：</span>
          <a href="#" class="sort-item" :class="{ active: sortBy === 'lastReply' }" @click.prevent="sortBy = 'lastReply'">最后发表</a>
          <a href="#" class="sort-item" :class="{ active: sortBy === 'replies' }" @click.prevent="sortBy = 'replies'">回复</a>
          <a href="#" class="sort-item" :class="{ active: sortBy === 'views' }" @click.prevent="sortBy = 'views'">查看</a>
          <a href="#" class="sort-item" :class="{ active: sortBy === 'time' }" @click.prevent="sortBy = 'time'">发帖</a>
        </div>
      </div>

      <div class="thread-filter-bar">
        <a
          v-for="f in threadFilters"
          :key="f.id"
          href="#"
          class="filter-item"
          :class="{ active: threadFilter === f.id }"
          @click.prevent="threadFilter = f.id; page = 1"
        >{{ f.name }}</a>
        <label class="show-pinned">
          <input type="checkbox" v-model="showPinned" @change="page = 1" />
          显示置顶
        </label>
      </div>

      <div class="thread-table">
        <div class="thread-row thread-row-head">
          <div class="col col-status">状态</div>
          <div class="col col-title">标题</div>
          <div class="col col-author">作者</div>
          <div class="col col-count">回复/查看</div>
          <div class="col col-last">最后发表</div>
        </div>

        <div v-for="t in pagedThreads" :key="t.tid" class="thread-row">
          <div class="col col-status">
            <span v-if="t.pinned" class="tag tag-pin">置顶</span>
            <span v-if="t.essence" class="tag tag-essence">精华</span>
            <span v-if="t.hot" class="tag tag-hot">热</span>
            <span v-if="!t.pinned && !t.essence && !t.hot" class="tag tag-normal">普通</span>
          </div>
          <div class="col col-title">
            <span v-if="t.typeName" class="thread-type">{{ t.typeName }}</span>
            <RouterLink :to="`/thread/${t.tid}`" class="thread-title" :class="{ hot: t.hot }" :title="t.title">
              {{ t.title }}
            </RouterLink>
          </div>
          <div class="col col-author">
            <a href="#" class="author-name" :class="{ mod: t.authorRole === 'moderator' }">{{ t.author }}</a>
          </div>
          <div class="col col-count">
            <span class="num-replies">{{ t.replies }}</span>
            <span class="num-views">{{ t.views.toLocaleString() }}</span>
          </div>
          <div class="col col-last">
            <div class="last-time">{{ t.lastReply }}</div>
            <a href="#" class="last-author">{{ t.author }}</a>
          </div>
        </div>

        <div v-if="!pagedThreads.length" class="thread-empty">本版暂无主题，快来抢沙发吧 ~</div>
      </div>

      <div class="pagination" v-if="totalPages > 1">
        <a href="#" class="page-btn" :class="{ disabled: page === 1 }" @click.prevent="goPage(page - 1)">‹ 上一页</a>
        <a
          v-for="p in pageList"
          :key="p"
          href="#"
          class="page-num"
          :class="{ active: p === page, ellipsis: p === '...' }"
          @click.prevent="goPage(p)"
        >{{ p }}</a>
        <a href="#" class="page-btn" :class="{ disabled: page === totalPages }" @click.prevent="goPage(page + 1)">下一页 ›</a>
        <span class="page-info">共 {{ total }} 条 / {{ totalPages }} 页</span>
      </div>
    </div>
  </div>

  <div class="forum-display container" v-else>
    <div class="card not-found">
      <p>抱歉，您访问的版块不存在或已被移除。</p>
      <RouterLink to="/" class="back-home">返回首页</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.forum-display {
  padding-top: 16px;
  padding-bottom: 8px;
}

.breadcrumb {
  background: #fff;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  padding: 8px 14px;
  font-size: 13px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
}

.breadcrumb .sep {
  color: var(--color-text-light);
}

.crumb-link {
  color: var(--color-text-secondary);
}

.crumb-current {
  color: var(--color-text);
  font-weight: 600;
}

.forum-head {
  overflow: hidden;
}

.forum-head-inner {
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 18px 20px;
}

.forum-head-icon {
  width: 100px;
  height: 100px;
  border-radius: 8px;
  flex-shrink: 0;
  border: 1px solid var(--color-border-light);
}

.forum-head-info {
  flex: 1;
  min-width: 0;
}

.forum-head-title {
  font-size: 22px;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 6px;
}

.forum-head-desc {
  font-size: 13px;
  color: var(--color-text-secondary);
  margin-bottom: 10px;
}

.forum-head-meta {
  display: flex;
  align-items: center;
  gap: 18px;
  font-size: 12px;
  color: var(--color-text-secondary);
  flex-wrap: wrap;
}

.forum-head-meta em {
  font-style: normal;
  color: var(--color-text);
  font-weight: 600;
}

.forum-head-meta .today em {
  color: var(--color-success);
}

.mods {
  color: var(--color-text-secondary);
}

.mod-name {
  margin-right: 6px;
  color: var(--color-primary);
}

.forum-head-actions {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 10px;
}

.btn-collect {
  display: inline-block;
  padding: 9px 16px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  font-size: 14px;
  color: var(--color-text-secondary);
  background: #fff;
}

.btn-collect:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.btn-collect.active {
  border-color: var(--color-warning);
  color: var(--color-warning);
  background: #fffbe6;
}

.btn-post {
  display: inline-block;
  padding: 9px 22px;
  background: var(--color-primary);
  color: #fff;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
}

.btn-post:hover {
  background: var(--color-primary-dark);
  color: #fff;
}

.forum-rules {
  padding: 10px 20px 14px;
  font-size: 12px;
  color: var(--color-text-secondary);
  line-height: 1.9;
  border-top: 1px dashed var(--color-border-light);
  background: #fffbf0;
}

.sub-forum-box {
  overflow: hidden;
}

.sub-forum-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0;
}

.sub-forum-item {
  display: flex;
  gap: 12px;
  padding: 14px 18px;
  border-right: 1px solid var(--color-border-light);
  border-bottom: 1px solid var(--color-border-light);
  transition: background 0.15s;
}

.sub-forum-item:hover {
  background: #fafcff;
}

.sub-forum-item:nth-child(2n) {
  border-right: none;
}

.sub-forum-icon {
  width: 36px;
  height: 36px;
  border-radius: 4px;
  background: var(--color-primary-light);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
}

.sub-forum-body {
  min-width: 0;
  flex: 1;
}

.sub-forum-name {
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 3px;
}

.sub-forum-item:hover .sub-forum-name {
  color: var(--color-primary);
}

.sub-forum-meta {
  font-size: 11px;
  color: var(--color-text-light);
  display: flex;
  gap: 12px;
  margin-bottom: 3px;
}

.sub-forum-last {
  font-size: 12px;
  color: var(--color-text-secondary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.thread-list {
  overflow: hidden;
}

.type-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 14px;
  background: #fafbfc;
  border-bottom: 1px solid var(--color-border-light);
  flex-wrap: wrap;
  gap: 8px;
}

.type-item {
  display: inline-block;
  padding: 10px 12px;
  font-size: 13px;
  color: var(--color-text);
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
}

.type-item em {
  font-style: normal;
  font-size: 11px;
  color: var(--color-text-light);
  margin-left: 3px;
}

.type-item:hover {
  color: var(--color-primary);
}

.type-item.active {
  color: var(--color-primary);
  border-bottom-color: var(--color-primary);
  font-weight: 600;
}

.sort-bar {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
}

.sort-label {
  color: var(--color-text-secondary);
}

.sort-item {
  padding: 4px 8px;
  color: var(--color-text-secondary);
  border-radius: 3px;
}

.sort-item:hover {
  color: var(--color-primary);
}

.sort-item.active {
  background: var(--color-primary);
  color: #fff;
}

.thread-filter-bar {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 14px;
  background: #fff;
  border-bottom: 1px solid var(--color-border-light);
  flex-wrap: wrap;
}

.filter-item {
  padding: 5px 12px;
  font-size: 13px;
  color: var(--color-text-secondary);
  border-radius: 3px;
}

.filter-item:hover {
  color: var(--color-primary);
}

.filter-item.active {
  background: var(--color-primary-light);
  color: var(--color-primary);
  font-weight: 600;
}

.show-pinned {
  margin-left: auto;
  font-size: 12px;
  color: var(--color-text-secondary);
  display: inline-flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
}

.thread-table {
  background: #fff;
}

.thread-row {
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--color-border-light);
  transition: background 0.15s;
}

.thread-row:not(.thread-row-head):hover {
  background: #fafcff;
}

.thread-row:last-child {
  border-bottom: none;
}

.thread-row-head {
  background: #fafbfc;
  color: var(--color-text-secondary);
  font-size: 12px;
  font-weight: 600;
  height: 36px;
}

.col {
  padding: 12px 10px;
}

.col-status {
  width: 90px;
  text-align: center;
  flex-shrink: 0;
}

.col-title {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 8px;
}

.col-author {
  width: 110px;
  text-align: center;
  flex-shrink: 0;
}

.col-count {
  width: 120px;
  text-align: center;
  flex-shrink: 0;
  font-size: 12px;
}

.col-last {
  width: 170px;
  flex-shrink: 0;
  padding-left: 12px;
  border-left: 1px solid var(--color-border-light);
}

.tag {
  display: inline-block;
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 11px;
  line-height: 1.4;
}

.tag-pin {
  background: #fff1f0;
  color: #f5222d;
  font-weight: 600;
}

.tag-essence {
  background: #fff7e6;
  color: #fa8c16;
  font-weight: 600;
}

.tag-hot {
  background: #fff1f0;
  color: #ff4d4f;
}

.tag-normal {
  background: #f5f5f5;
  color: var(--color-text-light);
}

.thread-type {
  display: inline-block;
  padding: 1px 6px;
  background: var(--color-primary-light);
  color: var(--color-primary);
  font-size: 11px;
  border-radius: 3px;
  flex-shrink: 0;
}

.thread-title {
  font-size: 14px;
  color: var(--color-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.thread-title:hover {
  color: var(--color-primary);
  text-decoration: underline;
}

.thread-title.hot {
  color: #cf1322;
  font-weight: 600;
}

.author-name {
  font-size: 13px;
  color: var(--color-text);
}

.author-name.mod {
  color: var(--color-primary-dark);
  font-weight: 600;
}

.num-replies {
  display: block;
  color: var(--color-primary);
  font-weight: 600;
}

.num-views {
  display: block;
  color: var(--color-text-light);
  font-size: 11px;
}

.last-time {
  font-size: 11px;
  color: var(--color-text-light);
}

.last-author {
  font-size: 12px;
  color: var(--color-primary);
}

.thread-empty {
  padding: 40px 0;
  text-align: center;
  color: var(--color-text-secondary);
  font-size: 13px;
}

.pagination {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 14px;
  justify-content: center;
  flex-wrap: wrap;
  border-top: 1px solid var(--color-border-light);
}

.page-btn,
.page-num {
  display: inline-block;
  padding: 5px 11px;
  border: 1px solid var(--color-border);
  border-radius: 3px;
  font-size: 12px;
  color: var(--color-text);
  background: #fff;
  cursor: pointer;
}

.page-btn:hover,
.page-num:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.page-btn.disabled {
  color: var(--color-text-light);
  border-color: var(--color-border-light);
  cursor: not-allowed;
  background: #fafafa;
}

.page-btn.disabled:hover {
  border-color: var(--color-border-light);
  color: var(--color-text-light);
}

.page-num.active {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: #fff;
  font-weight: 600;
}

.page-num.ellipsis {
  border: none;
  background: none;
  cursor: default;
  padding: 5px 4px;
}

.page-info {
  font-size: 12px;
  color: var(--color-text-secondary);
  margin-left: 8px;
}

.not-found {
  padding: 50px 20px;
  text-align: center;
  color: var(--color-text-secondary);
}

.not-found p {
  margin-bottom: 16px;
}

.back-home {
  color: #fff;
  background: var(--color-primary);
  padding: 7px 18px;
  border-radius: 4px;
  display: inline-block;
}
</style>