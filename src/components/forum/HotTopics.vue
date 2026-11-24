<script setup>
import { hotTopics } from '../../mock'

const rankColor = (rank) => {
  if (rank === 1) return '#ff4d4f'
  if (rank === 2) return '#fa8c16'
  if (rank === 3) return '#faad14'
  return '#c0c4cc'
}
</script>

<template>
  <div class="card hot-topics">
    <div class="block-header">
      <div class="block-title">
        <span class="title-icon">🔥</span>
        <span>论坛热点</span>
      </div>
      <span class="hot-sub">近 7 天</span>
    </div>
    <ul class="hot-list">
      <li v-for="topic in hotTopics" :key="topic.id" class="hot-item">
        <span class="hot-rank" :style="{ background: rankColor(topic.rank) }">{{ topic.rank }}</span>
        <a href="#" class="hot-title" :title="topic.title">{{ topic.title }}</a>
        <span class="hot-heat">{{ topic.heat.toLocaleString() }}℃</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.hot-sub {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 400;
}

.hot-list {
  list-style: none;
  padding: 4px 0;
}

.hot-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 14px;
  transition: background 0.15s;
}

.hot-item:hover {
  background: #fafcff;
}

.hot-rank {
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  border-radius: 3px;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  flex-shrink: 0;
}

.hot-title {
  flex: 1;
  font-size: 13px;
  color: var(--color-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.hot-title:hover {
  color: var(--color-primary);
}

.hot-heat {
  font-size: 11px;
  color: var(--color-text-light);
  flex-shrink: 0;
}
</style>