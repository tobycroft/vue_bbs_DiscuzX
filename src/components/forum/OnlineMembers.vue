<script setup>
import { ref } from 'vue'
import { onlineMembers, stats } from '../../mock'

const collapsed = ref(false)

const roleStyle = (role) => {
  const map = {
    admin: { bg: '#fff1f0', color: '#f5222d', border: '#ffa39e' },
    moderator: { bg: '#e6f7ff', color: '#1890ff', border: '#91d5ff' },
    member: { bg: '#f0f9ff', color: '#2b7cff', border: '#bae0ff' },
    guest: { bg: '#f5f5f5', color: '#8c8c8c', border: '#d9d9d9' },
  }
  return map[role] || map.member
}
</script>

<template>
  <div class="card online-members">
    <div class="block-header">
      <div class="block-title">
        <span class="title-icon">👥</span>
        <span>在线会员</span>
        <span class="online-count">（{{ stats.online.total }} 人）</span>
      </div>
      <a href="#" class="block-more" @click.prevent="collapsed = !collapsed">
        {{ collapsed ? '展开' : '收起' }}
      </a>
    </div>

    <div class="online-summary">
      <span>当前在线 <em>{{ stats.online.total }}</em> 人</span>
      <span class="dot">·</span>
      <span>会员 <em>{{ stats.online.members }}</em></span>
      <span class="dot">·</span>
      <span>游客 <em>{{ stats.online.guests }}</em></span>
      <span class="dot">·</span>
      <span class="today-max">今日最高 <em>{{ stats.online.maxToday }}</em></span>
    </div>

    <transition name="collapse">
      <ul v-show="!collapsed" class="member-list">
        <li v-for="m in onlineMembers" :key="m.id" class="member-item" :title="m.name">
          <span class="member-avatar" :style="roleStyle(m.role)">{{ m.name.slice(0, 1) }}</span>
          <span class="member-name" :style="{ color: roleStyle(m.role).color }">{{ m.name }}</span>
        </li>
      </ul>
    </transition>
  </div>
</template>

<style scoped>
.online-count {
  font-size: 12px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.85);
}

.online-summary {
  padding: 10px 14px;
  font-size: 12px;
  color: var(--color-text-secondary);
  background: var(--color-sidebar);
  border-bottom: 1px solid var(--color-border-light);
  line-height: 1.6;
}

.online-summary em {
  font-style: normal;
  color: var(--color-primary);
  font-weight: 600;
  margin: 0 2px;
}

.dot {
  margin: 0 4px;
  color: var(--color-text-light);
}

.today-max em {
  color: var(--color-warning);
}

.member-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px 12px;
  padding: 12px 14px;
  max-height: 200px;
  overflow-y: auto;
}

.member-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  width: 44px;
}

.member-avatar {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid;
}

.member-name {
  font-size: 11px;
  max-width: 44px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.collapse-enter-active,
.collapse-leave-active {
  transition: all 0.25s ease;
  overflow: hidden;
}

.collapse-enter-from,
.collapse-leave-to {
  opacity: 0;
  max-height: 0;
}
</style>