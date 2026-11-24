<script setup>
import { ref } from 'vue'
import { topNav, subNav } from '../../mock'

const isLogin = ref(false)
const quickOpen = ref(false)
const keyword = ref('')

function toggleQuick() {
  quickOpen.value = !quickOpen.value
}
</script>

<template>
  <header class="site-header">
    <div class="container header-main">
      <div class="logo">
        <a href="/">
          <span class="logo-text">Discuz<span class="logo-x">X</span></span>
          <span class="logo-sub">社区</span>
        </a>
      </div>

      <nav class="main-nav">
        <a
          v-for="item in topNav"
          :key="item.name"
          :href="item.href"
          class="nav-item"
          :class="{ active: item.active }"
        >
          {{ item.name }}
        </a>
      </nav>

      <div class="header-right">
        <form class="search-box" @submit.prevent>
          <input v-model="keyword" type="text" class="search-input" placeholder="搜索帖子、用户、版块" />
          <button type="submit" class="search-btn">搜索</button>
        </form>

        <div class="user-area" v-if="!isLogin">
          <a href="#login" class="link-login">登录</a>
          <a href="#register" class="link-register">注册</a>
        </div>
        <div class="user-area logged" v-else>
          <span class="avatar"></span>
          <span class="username">我的账号</span>
          <a href="#msg" class="icon-msg" title="消息">🔔</a>
        </div>

        <div class="quick-nav" @click="toggleQuick">
          <span class="quick-label">快捷导航</span>
          <span class="quick-arrow" :class="{ open: quickOpen }">▾</span>
          <transition name="fade">
            <div class="quick-dropdown" v-if="quickOpen" @click.stop>
              <a v-for="item in subNav" :key="item.name" :href="item.href">{{ item.name }}</a>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  background: #fff;
  border-bottom: 2px solid var(--color-primary);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-main {
  height: var(--header-height);
  display: flex;
  align-items: center;
  gap: 24px;
}

.logo a {
  display: flex;
  align-items: baseline;
  gap: 4px;
}

.logo-text {
  font-size: 24px;
  font-weight: 700;
  color: var(--color-primary);
  letter-spacing: 0.5px;
}

.logo-x {
  color: var(--color-primary-dark);
}

.logo-sub {
  font-size: 13px;
  color: var(--color-text-secondary);
}

.main-nav {
  display: flex;
  gap: 4px;
  flex: 1;
}

.nav-item {
  padding: 0 14px;
  height: var(--header-height);
  display: inline-flex;
  align-items: center;
  color: var(--color-text);
  font-size: 15px;
  border-bottom: 2px solid transparent;
  margin-bottom: -2px;
}

.nav-item:hover {
  color: var(--color-primary);
}

.nav-item.active {
  color: var(--color-primary);
  border-bottom-color: var(--color-primary);
  font-weight: 600;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.search-box {
  display: flex;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  overflow: hidden;
  width: 260px;
}

.search-input {
  flex: 1;
  border: none;
  outline: none;
  padding: 6px 10px;
  font-size: 13px;
  background: #f7f8fa;
}

.search-btn {
  border: none;
  background: var(--color-primary);
  color: #fff;
  padding: 0 14px;
  cursor: pointer;
  font-size: 13px;
}

.search-btn:hover {
  background: var(--color-primary-dark);
}

.user-area {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
}

.link-login {
  color: var(--color-text);
}

.link-register {
  color: #fff;
  background: var(--color-primary);
  padding: 5px 14px;
  border-radius: 4px;
}

.link-register:hover {
  background: var(--color-primary-dark);
  color: #fff;
}

.user-area.logged {
  gap: 8px;
}

.avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-primary), #7fb3ff);
  display: inline-block;
}

.username {
  color: var(--color-text);
}

.icon-msg {
  font-size: 16px;
  position: relative;
}

.quick-nav {
  position: relative;
  cursor: pointer;
  font-size: 13px;
  color: var(--color-text);
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 10px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  user-select: none;
}

.quick-arrow {
  transition: transform 0.2s;
  font-size: 10px;
}

.quick-arrow.open {
  transform: rotate(180deg);
}

.quick-dropdown {
  position: absolute;
  right: 0;
  top: calc(100% + 4px);
  background: #fff;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  min-width: 120px;
  padding: 4px 0;
  z-index: 200;
}

.quick-dropdown a {
  display: block;
  padding: 8px 14px;
  color: var(--color-text);
  font-size: 13px;
}

.quick-dropdown a:hover {
  background: var(--color-primary-light);
  color: var(--color-primary);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>