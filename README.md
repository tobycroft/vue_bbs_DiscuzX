# Vue BBS DiscuzX

基于 Vue 的 DiscuzX 论坛前端，与 [`go_bbs_DiscuzX`](https://github.com/tobycroft/go_bbs_DiscuzX) 后端配套使用。

## 项目简介

Vue BBS DiscuzX 复刻了 DiscuzX 的前端交互与核心功能，配合 Go 后端为千万级论坛提供流畅、安全的用户体验，并对搜索相关界面与性能进行了优化。

## 主要特性

- **DiscuzX 核心界面复刻**：论坛、版块、帖子、回复、用户中心等核心页面与交互。
- **高性能渲染**：适配海量数据场景，保障千万级论坛下的流畅体验。
- **搜索体验优化**：优化搜索界面与交互，提升检索效率。
- **响应式设计**：适配多端访问。
- **前后端分离**：与 go_bbs_DiscuzX 后端通过 API 无缝对接。

## 技术栈

- 框架：Vue 3
- 构建工具：Vite
- 配套后端：[go_bbs_DiscuzX](https://github.com/tobycroft/go_bbs_DiscuzX)

## 项目结构

- `src`：源码（入口 `main.js`、根组件 `App.vue`）
- `public`：静态资源
- `vite.config.js`：Vite 配置
- `.github/workflows/deploy.yml`：CI 构建并将 `dist` 部署到 [fe_bbs_DiscuzX](https://github.com/tobycroft/fe_bbs_DiscuzX) 的 `master` 分支

## 快速开始

```bash
# 安装依赖
npm install

# 本地开发
npm run dev

# 生产构建（产物位于 dist/）
npm run build
```

## 自动部署

推送到 `main` 分支后，GitHub Actions 会自动构建 `dist` 并推送到 [fe_bbs_DiscuzX](https://github.com/tobycroft/fe_bbs_DiscuzX) 仓库的 `master` 分支。

## 贡献

欢迎提交 Issue 与 Pull Request。

## 许可证

（待补充）