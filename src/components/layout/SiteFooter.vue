<script setup>
import { friendLinks } from '../../mock'
</script>

<template>
  <footer class="site-footer">
    <div class="container">
      <div class="friend-links">
        <span class="fl-label">友情链接：</span>
        <a v-for="link in friendLinks" :key="link.name" :href="link.url" target="_blank" rel="noopener">
          {{ link.name }}
        </a>
      </div>
      <div class="copyright">
        <p>Copyright © 2001-2026 DiscuzX 社区. All Rights Reserved.</p>
        <p class="powered">
          Powered by <a href="https://www.discuz.net" target="_blank" rel="noopener">Discuz! X</a>
          &nbsp;|&nbsp; 前端基于 Vue 3 + Vite 重构
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: #fff;
  border-top: 1px solid var(--color-border);
  margin-top: 20px;
  padding: 20px 0 28px;
  text-align: center;
  color: var(--color-text-secondary);
  font-size: 12px;
}

.friend-links {
  margin-bottom: 12px;
  line-height: 1.8;
}

.fl-label {
  color: var(--color-text);
  margin-right: 4px;
}

.friend-links a {
  margin: 0 6px;
  color: var(--color-text-secondary);
  font-size: 12px;
}

.friend-links a:hover {
  color: var(--color-primary);
}

.copyright p {
  line-height: 1.8;
}

.powered a {
  color: var(--color-primary);
}
</style>