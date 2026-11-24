<script setup>
import { forumSections } from '../../mock'
</script>

<template>
  <div class="forum-list">
    <div v-for="section in forumSections" :key="section.id" class="card forum-section">
      <div class="block-header">
        <div class="block-title">
          <span class="title-icon">{{ section.icon }}</span>
          <span>{{ section.name }}</span>
          <span class="section-desc" v-if="section.desc">{{ section.desc }}</span>
        </div>
        <a href="#" class="block-more">更多 ›</a>
      </div>

      <div class="forum-table">
        <div class="forum-row forum-row-head">
          <div class="col col-forum">版块</div>
          <div class="col col-threads">主题</div>
          <div class="col col-posts">帖子</div>
          <div class="col col-last">最后发表</div>
        </div>

        <div v-for="forum in section.forums" :key="forum.id" class="forum-row">
          <div class="col col-forum">
            <div class="forum-icon">{{ forum.icon }}</div>
            <div class="forum-info">
              <div class="forum-name-row">
                <a :href="`#forum-${forum.id}`" class="forum-name">{{ forum.name }}</a>
                <span class="today-new" v-if="forum.todayPosts > 0">
                  今日: <em>{{ forum.todayPosts }}</em>
                </span>
              </div>
              <p class="forum-desc">{{ forum.desc }}</p>
            </div>
          </div>
          <div class="col col-threads">{{ forum.threads.toLocaleString() }}</div>
          <div class="col col-posts">{{ forum.posts.toLocaleString() }}</div>
          <div class="col col-last">
            <a href="#" class="last-title" :title="forum.lastPost.title">{{ forum.lastPost.title }}</a>
            <div class="last-meta">
              <span class="last-author">{{ forum.lastPost.author }}</span>
              <span class="last-time">{{ forum.lastPost.time }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.forum-section {
  overflow: hidden;
}

.section-desc {
  font-size: 12px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.75);
  margin-left: 8px;
}

.forum-table {
  background: #fff;
}

.forum-row {
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--color-border-light);
  transition: background 0.15s;
}

.forum-row:not(.forum-row-head):hover {
  background: #fafcff;
}

.forum-row:last-child {
  border-bottom: none;
}

.col {
  padding: 14px 12px;
}

.col-forum {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 12px;
}

.col-threads,
.col-posts {
  width: 90px;
  text-align: center;
  font-size: 13px;
  color: var(--color-text-secondary);
}

.col-last {
  width: 260px;
  padding-left: 16px;
  border-left: 1px solid var(--color-border-light);
}

.forum-row-head {
  background: #fafbfc;
  color: var(--color-text-secondary);
  font-size: 12px;
  font-weight: 600;
  height: 38px;
}

.forum-row-head .col {
  padding: 0 12px;
  line-height: 38px;
}

.forum-icon {
  width: 42px;
  height: 42px;
  border-radius: 6px;
  background: var(--color-primary-light);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  flex-shrink: 0;
}

.forum-info {
  min-width: 0;
  flex: 1;
}

.forum-name-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 4px;
}

.forum-name {
  font-size: 15px;
  font-weight: 600;
  color: var(--color-text);
}

.forum-name:hover {
  color: var(--color-primary);
}

.today-new {
  font-size: 12px;
  color: var(--color-text-secondary);
}

.today-new em {
  font-style: normal;
  color: var(--color-success);
  font-weight: 600;
}

.forum-desc {
  font-size: 12px;
  color: var(--color-text-secondary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.last-title {
  font-size: 13px;
  color: var(--color-text);
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.last-title:hover {
  color: var(--color-primary);
}

.last-meta {
  font-size: 11px;
  color: var(--color-text-light);
  margin-top: 3px;
  display: flex;
  gap: 8px;
}

.last-author {
  color: var(--color-primary);
}
</style>