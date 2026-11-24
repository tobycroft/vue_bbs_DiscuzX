<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { findThread, findForum } from '../mock'

const route = useRoute()
const tid = computed(() => Number(route.params.tid))
const data = computed(() => findThread(tid.value))

const page = ref(1)

watch(
  () => route.params.tid,
  () => {
    page.value = 1
  }
)

const forum = computed(() => (data.value ? findForum(data.value.info.fid) : null))

const floors = computed(() => data.value?.posts || [])
const totalReplies = computed(() => data.value?.info.replies || 0)
const pageSize = 30
const totalPages = computed(() => Math.max(1, Math.ceil((totalReplies.value + 1) / pageSize)))

const floorLabel = (floor) => {
  if (floor === 1) return '楼主'
  const map = { 2: '沙发', 3: '板凳', 4: '地板' }
  return map[floor] || `${floor} 楼`
}

const replyText = ref('')
function submitReply() {
  if (!replyText.value.trim()) return
  replyText.value = ''
}
</script>

<template>
  <div class="view-thread container" v-if="data">
    <nav class="breadcrumb">
      <a href="/">首页</a>
      <span class="sep">›</span>
      <a href="/forum" class="crumb-link">{{ data.info.sectionName }}</a>
      <span class="sep">›</span>
      <RouterLink :to="`/forum/${data.info.fid}`" class="crumb-link">{{ data.info.forumName }}</RouterLink>
      <span class="sep">›</span>
      <span class="crumb-current" :title="data.info.title">{{ data.info.title }}</span>
    </nav>

    <div class="card thread-head">
      <div class="thread-head-bar">
        <span v-if="data.info.typeName" class="thread-type-tag">{{ data.info.typeName }}</span>
        <h1 class="thread-title-text">{{ data.info.title }}</h1>
      </div>
      <div class="thread-head-meta">
        <div class="meta-left">
          <span class="meta-author" :style="{ color: data.info.author.color }">{{ data.info.author.name }}</span>
          <span class="meta-divider">|</span>
          <span>发表于 {{ data.info.postTime }}</span>
          <span class="meta-divider">|</span>
          <span>查看 {{ data.info.views.toLocaleString() }}</span>
          <span class="meta-divider">|</span>
          <span>回复 {{ data.info.replies }}</span>
        </div>
        <div class="meta-right">
          <a href="#" class="head-act">👍 赞 {{ data.info.likes }}</a>
          <a href="#" class="head-act">⭐ 收藏 {{ data.info.favCount }}</a>
          <a href="#" class="head-act">分享</a>
          <a href="#quick-reply" class="head-act head-act-primary">回复</a>
        </div>
      </div>
    </div>

    <div class="post-list">
      <div v-for="post in floors" :key="post.pid" class="card post-item" :id="`pid-${post.pid}`">
        <div class="post-left">
          <div class="author-avatar">
            <img :src="post.author.avatar" :alt="post.author.name" />
            <span v-if="post.author.online" class="online-dot" title="在线"></span>
          </div>
          <a href="#" class="author-name" :style="{ color: post.author.color }">{{ post.author.name }}</a>
          <div class="author-group" :style="{ color: post.author.color }">{{ post.author.group }}</div>
          <div class="author-level">
            <span class="level-name">{{ post.author.levelName }}</span>
            <span class="level-num">Lv.{{ post.author.groupLevel }}</span>
          </div>
          <div class="level-bar">
            <div class="level-bar-inner" :style="{ width: post.author.levelProgress + '%' }"></div>
          </div>
          <div class="level-tip">距下一级还需 {{ post.author.levelNext }} 积分</div>
          <ul class="author-profile">
            <li v-for="(val, key) in post.author.profile" :key="key">
              <span class="prof-key">{{ key }}</span>
              <span class="prof-val">{{ val }}</span>
            </li>
          </ul>
          <div class="author-stats">
            <div class="stat-item">
              <span class="stat-num">{{ post.author.threads }}</span>
              <span class="stat-label">主题</span>
            </div>
            <div class="stat-item">
              <span class="stat-num">{{ post.author.posts }}</span>
              <span class="stat-label">帖子</span>
            </div>
            <div class="stat-item">
              <span class="stat-num">{{ post.author.credits }}</span>
              <span class="stat-label">积分</span>
            </div>
          </div>
        </div>

        <div class="post-right">
          <div class="post-meta-top">
            <span class="floor-tag">{{ floorLabel(post.floor) }}</span>
            <span class="post-time">发表于 {{ post.time }}</span>
            <a href="#" class="post-anchor">#{{ post.floor }}</a>
          </div>
          <div class="post-content" v-html="post.contentHtml"></div>

          <div v-if="post.comments?.length" class="comments-box">
            <div class="comments-title">全部点评 ({{ post.comments.length }})</div>
            <ul class="comment-list">
              <li v-for="(c, i) in post.comments" :key="i" class="comment-item">
                <span class="comment-author">{{ c.author }}</span>
                <span class="comment-text">{{ c.text }}</span>
                <span class="comment-time">{{ c.time }}</span>
              </li>
            </ul>
          </div>

          <div class="post-actions">
            <a href="#" class="post-act">👍 赞 ({{ post.likes }})</a>
            <a href="#quick-reply" class="post-act">回复</a>
            <a href="#" class="post-act">引用</a>
            <a href="#" class="post-act">举报</a>
            <span v-if="post.locked" class="post-locked">🔒 已锁定</span>
          </div>
        </div>
      </div>
    </div>

    <div class="card post-pagination">
      <div class="page-info-text">共 {{ totalReplies + 1 }} 楼，{{ totalPages }} 页</div>
      <div class="page-btns">
        <a href="#" class="page-btn disabled">‹ 上一页</a>
        <a href="#" class="page-num active">1</a>
        <a href="#" class="page-num">2</a>
        <a href="#" class="page-num">3</a>
        <a href="#" class="page-btn">下一页 ›</a>
      </div>
    </div>

    <div class="card quick-reply" id="quick-reply">
      <div class="block-header">
        <div class="block-title"><span class="title-icon">💬</span><span>快速回复</span></div>
        <a href="#" class="block-more">高级模式 ›</a>
      </div>
      <div class="reply-body">
        <div class="reply-toolbar">
          <button class="tool-btn" type="button">B</button>
          <button class="tool-btn" type="button">I</button>
          <button class="tool-btn" type="button">U</button>
          <button class="tool-btn" type="button">图片</button>
          <button class="tool-btn" type="button">表情</button>
          <button class="tool-btn" type="button">代码</button>
        </div>
        <textarea
          v-model="replyText"
          class="reply-input"
          placeholder="来说两句吧，友善评论，理性交流～"
          rows="4"
        ></textarea>
        <div class="reply-actions">
          <label class="reply-check"><input type="checkbox" /> 回复后通知我</label>
          <button class="reply-submit" @click="submitReply">发表回复</button>
        </div>
      </div>
    </div>

    <div v-if="forum" class="back-forum">
      <RouterLink :to="`/forum/${forum.id}`" class="back-link">← 返回「{{ forum.name }}」</RouterLink>
    </div>
  </div>

  <div class="view-thread container" v-else>
    <div class="card not-found">
      <p>抱歉，您访问的帖子不存在或已被删除。</p>
      <RouterLink to="/" class="back-home">返回首页</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.view-thread {
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
  max-width: 400px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.thread-head {
  overflow: hidden;
  padding: 16px 20px;
}

.thread-head-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.thread-type-tag {
  display: inline-block;
  padding: 2px 8px;
  background: var(--color-primary-light);
  color: var(--color-primary);
  font-size: 12px;
  border-radius: 3px;
  flex-shrink: 0;
}

.thread-title-text {
  font-size: 20px;
  font-weight: 700;
  color: var(--color-text);
  line-height: 1.4;
}

.thread-head-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 12px;
  color: var(--color-text-secondary);
}

.meta-left {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
}

.meta-author {
  font-weight: 600;
}

.meta-divider {
  color: var(--color-text-light);
}

.meta-right {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.head-act {
  padding: 4px 10px;
  border: 1px solid var(--color-border);
  border-radius: 3px;
  font-size: 12px;
  color: var(--color-text-secondary);
}

.head-act:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.head-act-primary {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: #fff;
}

.head-act-primary:hover {
  background: var(--color-primary-dark);
  color: #fff;
}

.post-list {
  margin-top: 12px;
}

.post-item {
  display: flex;
  margin-bottom: 12px;
  overflow: hidden;
}

.post-left {
  width: 180px;
  flex-shrink: 0;
  background: #fafbfc;
  padding: 16px 12px;
  text-align: center;
  border-right: 1px solid var(--color-border-light);
}

.author-avatar {
  position: relative;
  width: 90px;
  height: 90px;
  margin: 0 auto 10px;
}

.author-avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px solid #fff;
  box-shadow: 0 0 0 1px var(--color-border-light);
  background: #fff;
}

.online-dot {
  position: absolute;
  right: 6px;
  bottom: 6px;
  width: 12px;
  height: 12px;
  background: var(--color-success);
  border: 2px solid #fff;
  border-radius: 50%;
}

.post-left .author-name {
  display: block;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 3px;
}

.author-group {
  font-size: 11px;
  margin-bottom: 8px;
}

.author-level {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-bottom: 5px;
}

.level-name {
  font-size: 11px;
  color: var(--color-text-secondary);
}

.level-num {
  font-size: 11px;
  font-weight: 700;
  color: var(--color-warning);
}

.level-bar {
  width: 120px;
  height: 6px;
  background: #eee;
  border-radius: 3px;
  margin: 0 auto 4px;
  overflow: hidden;
}

.level-bar-inner {
  height: 100%;
  background: linear-gradient(90deg, #faad14, #ffc53d);
}

.level-tip {
  font-size: 10px;
  color: var(--color-text-light);
  margin-bottom: 10px;
}

.author-profile {
  list-style: none;
  text-align: left;
  font-size: 11px;
  margin-bottom: 10px;
  border-top: 1px dashed var(--color-border-light);
  padding-top: 8px;
}

.author-profile li {
  display: flex;
  justify-content: space-between;
  padding: 2px 0;
}

.prof-key {
  color: var(--color-text-secondary);
}

.prof-val {
  color: var(--color-text);
}

.author-stats {
  display: flex;
  justify-content: space-around;
  border-top: 1px dashed var(--color-border-light);
  padding-top: 8px;
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-num {
  font-size: 14px;
  font-weight: 700;
  color: var(--color-primary);
}

.stat-label {
  font-size: 10px;
  color: var(--color-text-light);
}

.post-right {
  flex: 1;
  min-width: 0;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
}

.post-meta-top {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  color: var(--color-text-secondary);
  padding-bottom: 10px;
  border-bottom: 1px dashed var(--color-border-light);
  margin-bottom: 12px;
}

.floor-tag {
  background: var(--color-primary);
  color: #fff;
  padding: 2px 8px;
  border-radius: 3px;
  font-size: 11px;
  font-weight: 600;
}

.post-time {
  flex: 1;
}

.post-anchor {
  color: var(--color-text-light);
  font-size: 11px;
}

.post-anchor:hover {
  color: var(--color-primary);
}

.post-content {
  font-size: 14px;
  line-height: 1.85;
  color: var(--color-text);
  word-break: break-word;
  flex: 1;
}

.post-content :deep(code) {
  background: #f4f6fa;
  padding: 1px 5px;
  border-radius: 3px;
  font-size: 13px;
  color: #c7254e;
}

.comments-box {
  margin-top: 14px;
  background: #fafbfc;
  border: 1px solid var(--color-border-light);
  border-radius: 4px;
  padding: 10px 12px;
}

.comments-title {
  font-size: 12px;
  color: var(--color-text-secondary);
  margin-bottom: 6px;
  font-weight: 600;
}

.comment-list {
  list-style: none;
}

.comment-item {
  display: flex;
  gap: 8px;
  font-size: 12px;
  padding: 4px 0;
  border-top: 1px dotted var(--color-border-light);
}

.comment-item:first-child {
  border-top: none;
}

.comment-author {
  color: var(--color-primary);
  flex-shrink: 0;
}

.comment-text {
  flex: 1;
  color: var(--color-text);
}

.comment-time {
  color: var(--color-text-light);
  font-size: 11px;
  flex-shrink: 0;
}

.post-actions {
  margin-top: 12px;
  padding-top: 10px;
  border-top: 1px dashed var(--color-border-light);
  display: flex;
  gap: 14px;
  align-items: center;
  font-size: 12px;
}

.post-act {
  color: var(--color-text-secondary);
}

.post-act:hover {
  color: var(--color-primary);
}

.post-locked {
  font-size: 11px;
  color: var(--color-text-light);
  margin-left: auto;
}

.post-pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 18px;
  margin-bottom: 12px;
}

.page-info-text {
  font-size: 12px;
  color: var(--color-text-secondary);
}

.page-btns {
  display: flex;
  gap: 5px;
}

.page-btn,
.page-num {
  display: inline-block;
  padding: 4px 10px;
  border: 1px solid var(--color-border);
  border-radius: 3px;
  font-size: 12px;
  color: var(--color-text);
  background: #fff;
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
}

.page-num.active {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: #fff;
  font-weight: 600;
}

.quick-reply {
  overflow: hidden;
  margin-bottom: 12px;
}

.reply-body {
  padding: 12px 18px;
}

.reply-toolbar {
  display: flex;
  gap: 4px;
  margin-bottom: 8px;
}

.tool-btn {
  border: 1px solid var(--color-border);
  background: #fff;
  padding: 3px 10px;
  font-size: 12px;
  border-radius: 3px;
  cursor: pointer;
  color: var(--color-text-secondary);
}

.tool-btn:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.reply-input {
  width: 100%;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  padding: 10px;
  font-size: 13px;
  line-height: 1.6;
  resize: vertical;
  outline: none;
  box-sizing: border-box;
}

.reply-input:focus {
  border-color: var(--color-primary);
}

.reply-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
}

.reply-check {
  font-size: 12px;
  color: var(--color-text-secondary);
  display: flex;
  align-items: center;
  gap: 5px;
}

.reply-submit {
  background: var(--color-primary);
  color: #fff;
  border: none;
  padding: 7px 22px;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}

.reply-submit:hover {
  background: var(--color-primary-dark);
}

.back-forum {
  text-align: center;
  padding: 10px 0 20px;
}

.back-link {
  color: var(--color-primary);
  font-size: 13px;
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