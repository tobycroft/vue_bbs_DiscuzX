<template>
  <div class="card diy-banner">
    <div class="banner-bg">
      <div class="banner-content">
        <h2 class="banner-title">欢迎来到 DiscuzX 社区</h2>
        <p class="banner-desc">在这里分享技术、交流心得、结识同好 · 让交流更有价值</p>
        <div class="banner-actions">
          <a href="#post" class="btn btn-primary">✍️ 发布新帖</a>
          <a href="#guide" class="btn btn-ghost">📖 浏览导读</a>
        </div>
      </div>
      <div class="banner-deco">DZ</div>
    </div>
  </div>
</template>

<style scoped>
.diy-banner {
  overflow: hidden;
  margin-bottom: 12px;
}

.banner-bg {
  background: linear-gradient(120deg, #2b7cff 0%, #5b9bff 60%, #85b5ff 100%);
  padding: 30px 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
}

.banner-title {
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
}

.banner-desc {
  color: rgba(255, 255, 255, 0.9);
  font-size: 13px;
  margin-bottom: 18px;
}

.banner-actions {
  display: flex;
  gap: 12px;
}

.btn {
  padding: 8px 20px;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 600;
  transition: all 0.2s;
}

.btn-primary {
  background: #fff;
  color: var(--color-primary);
}

.btn-primary:hover {
  background: #f0f6ff;
  color: var(--color-primary-dark);
}

.btn-ghost {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.4);
}

.btn-ghost:hover {
  background: rgba(255, 255, 255, 0.28);
  color: #fff;
}

.banner-deco {
  font-size: 90px;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.12);
  letter-spacing: 4px;
  user-select: none;
  line-height: 1;
}
</style>