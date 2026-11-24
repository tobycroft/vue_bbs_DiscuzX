<script setup>
import { RouterLink } from 'vue-router'
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

      <div class="forum-grid">
        <div v-for="forum in section.forums" :key="forum.id" class="forum-cell">
          <RouterLink :to="`/forum/${forum.id}`" class="forum-icon-link">
            <img :src="forum.iconUrl" :width="forum.iconWidth" :alt="forum.name" class="forum-icon-img" />
          </RouterLink>
          <div class="forum-body">
            <div class="forum-name-row">
              <RouterLink :to="`/forum/${forum.id}`" class="forum-name">{{ forum.name }}</RouterLink>
              <span class="today-new" v-if="forum.todayPosts > 0">
                今日: <em>{{ forum.todayPosts }}</em>
              </span>
            </div>
            <p class="forum-desc">{{ forum.desc }}</p>
            <div class="forum-sub" v-if="forum.subForums?.length">
              <span class="sub-label">子版：</span>
              <RouterLink
                v-for="sub in forum.subForums"
                :key="sub.id"
                :to="`/forum/${sub.id}`"
                class="sub-link"
              >{{ sub.name }}</RouterLink>
            </div>
            <div class="forum-last" v-if="forum.lastPost">
              <RouterLink :to="`/forum/${forum.id}`" class="last-title" :title="forum.lastPost.title">
                {{ forum.lastPost.title }}
              </RouterLink>
              <span class="last-meta">
                <a href="#" class="last-author">{{ forum.lastPost.author }}</a>
                <span class="last-time">{{ forum.lastPost.time }}</span>
              </span>
            </div>
          </div>
          <div class="forum-counts">
            <div class="count-item">
              <span class="count-num">{{ forum.threads.toLocaleString() }}</span>
              <span class="count-label">主题</span>
            </div>
            <div class="count-item">
              <span class="count-num">{{ forum.posts.toLocaleString() }}</span>
              <span class="count-label">帖子</span>
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

.forum-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: #fff;
}

.forum-cell {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border-right: 1px solid var(--color-border-light);
  border-bottom: 1px solid var(--color-border-light);
  transition: background 0.15s;
}

.forum-cell:hover {
  background: #fafcff;
}

.forum-cell:nth-child(2n) {
  border-right: none;
}

.forum-icon-link {
  flex-shrink: 0;
}

.forum-icon-img {
  width: 100px;
  height: 100px;
  border-radius: 8px;
  display: block;
  border: 1px solid var(--color-border-light);
  transition: transform 0.2s;
}

.forum-cell:hover .forum-icon-img {
  transform: scale(1.04);
}

.forum-body {
  flex: 1;
  min-width: 0;
}

.forum-name-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 4px;
  flex-wrap: wrap;
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
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 5px;
}

.forum-sub {
  font-size: 11px;
  margin-bottom: 5px;
}

.sub-label {
  color: var(--color-text-light);
}

.sub-link {
  color: var(--color-text-secondary);
  margin-right: 6px;
}

.sub-link:hover {
  color: var(--color-primary);
}

.forum-last {
  font-size: 12px;
}

.last-title {
  display: block;
  color: var(--color-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
}

.last-title:hover {
  color: var(--color-primary);
}

.last-meta {
  font-size: 11px;
  color: var(--color-text-light);
  display: flex;
  gap: 6px;
  margin-top: 2px;
}

.last-author {
  color: var(--color-primary);
}

.forum-counts {
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex-shrink: 0;
  text-align: center;
  padding-left: 12px;
  border-left: 1px solid var(--color-border-light);
}

.count-item {
  display: flex;
  flex-direction: column;
}

.count-num {
  font-size: 16px;
  font-weight: 700;
  color: var(--color-primary);
}

.count-label {
  font-size: 11px;
  color: var(--color-text-light);
}
</style>