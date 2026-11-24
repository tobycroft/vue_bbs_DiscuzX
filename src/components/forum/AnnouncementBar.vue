<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { announcements } from '../../mock'

const current = ref(0)
let timer = null

function next() {
  current.value = (current.value + 1) % announcements.length
}

onMounted(() => {
  if (announcements.length > 1) {
    timer = setInterval(next, 4000)
  }
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <div class="card announcement-bar">
    <div class="ann-label">📢 公告</div>
    <div class="ann-wrap">
      <transition name="slide" mode="out-in">
        <a :key="current" href="#" class="ann-item">
          <span class="ann-title">{{ announcements[current].title }}</span>
          <span class="ann-time">{{ announcements[current].time }}</span>
        </a>
      </transition>
    </div>
    <div class="ann-dots">
      <span
        v-for="(a, i) in announcements"
        :key="a.id"
        class="dot"
        :class="{ active: i === current }"
        @click="current = i"
      ></span>
    </div>
  </div>
</template>

<style scoped>
.announcement-bar {
  display: flex;
  align-items: center;
  padding: 0 14px;
  height: 40px;
  gap: 12px;
  margin-bottom: 12px;
}

.ann-label {
  font-size: 13px;
  color: var(--color-primary);
  font-weight: 600;
  flex-shrink: 0;
}

.ann-wrap {
  flex: 1;
  overflow: hidden;
  height: 20px;
  position: relative;
}

.ann-item {
  display: flex;
  align-items: center;
  gap: 12px;
  height: 20px;
  line-height: 20px;
}

.ann-title {
  font-size: 13px;
  color: var(--color-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ann-title:hover {
  color: var(--color-primary);
}

.ann-time {
  font-size: 11px;
  color: var(--color-text-light);
  flex-shrink: 0;
}

.ann-dots {
  display: flex;
  gap: 5px;
}

.ann-dots .dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-border);
  cursor: pointer;
}

.ann-dots .dot.active {
  background: var(--color-primary);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
  position: absolute;
  width: 100%;
}

.slide-enter-from {
  transform: translateY(100%);
  opacity: 0;
}

.slide-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>