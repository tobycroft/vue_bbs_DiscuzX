<script setup>
import { stats } from '../../mock'
</script>

<template>
  <div class="card sidebar-stats">
    <div class="block-header">
      <div class="block-title">
        <span class="title-icon">📊</span>
        <span>社区统计</span>
      </div>
    </div>
    <div class="stats-grid">
      <div class="stat-item">
        <span class="stat-num">{{ stats.threads.toLocaleString() }}</span>
        <span class="stat-label">主题</span>
      </div>
      <div class="stat-item">
        <span class="stat-num">{{ stats.posts.toLocaleString() }}</span>
        <span class="stat-label">帖子</span>
      </div>
      <div class="stat-item">
        <span class="stat-num">{{ stats.members.toLocaleString() }}</span>
        <span class="stat-label">会员</span>
      </div>
    </div>
    <ul class="stats-list">
      <li><span>今日新帖</span><em>{{ stats.todayPosts }}</em></li>
      <li><span>昨日新帖</span><em>{{ stats.yesterdayPosts }}</em></li>
      <li><span>今日新增会员</span><em>{{ stats.newMembers }}</em></li>
      <li>
        <span>最新会员</span>
        <a href="#" class="newest">{{ stats.newestMember }}</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.stats-grid {
  display: flex;
  padding: 14px;
  border-bottom: 1px dashed var(--color-border-light);
}

.stat-item {
  flex: 1;
  text-align: center;
}

.stat-num {
  display: block;
  font-size: 20px;
  font-weight: 700;
  color: var(--color-primary);
}

.stat-label {
  display: block;
  font-size: 12px;
  color: var(--color-text-secondary);
  margin-top: 2px;
}

.stats-list {
  list-style: none;
  padding: 4px 14px 10px;
}

.stats-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 0;
  font-size: 12px;
  color: var(--color-text-secondary);
  border-bottom: 1px dashed var(--color-border-light);
}

.stats-list li:last-child {
  border-bottom: none;
}

.stats-list em {
  font-style: normal;
  color: var(--color-text);
  font-weight: 600;
}

.newest {
  color: var(--color-primary);
  font-weight: 600;
}
</style>