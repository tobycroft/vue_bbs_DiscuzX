const forumIcon = (label, bg) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" rx="10" fill="${bg}"/><text x="50" y="56" font-size="20" fill="#fff" text-anchor="middle" font-family="sans-serif" font-weight="700">${label}</text><text x="50" y="80" font-size="11" fill="rgba(255,255,255,0.85)" text-anchor="middle" font-family="sans-serif">版块</text></svg>`
  )}`

export const topNav = [
  { name: '首页', href: '/' },
  { name: '论坛', href: '/forum', active: true },
  { name: '导读', href: '/guide' },
  { name: '淘帖', href: '/tao' },
  { name: '游戏', href: '/game' },
  { name: '应用中心', href: '/app' },
]

export const subNav = [
  { name: '签到', href: '#sign' },
  { name: '任务', href: '#task' },
  { name: '道具', href: '#magic' },
  { name: '勋章', href: '#medal' },
  { name: '排行', href: '#rank' },
  { name: '帮助', href: '#help' },
]

export const announcements = [
  { id: 1, title: '欢迎来到 DiscuzX 社区，请阅读社区发帖规范与版规', time: '2026-11-20' },
  { id: 2, title: '社区升级维护通知：本周六凌晨 2:00-4:00 短暂停机', time: '2026-11-22' },
]

export const forumSections = [
  {
    id: 1,
    name: '社区事务',
    icon: '📢',
    desc: '公告、建议与站务管理',
    moderators: ['管理员', '站务小华'],
    forums: [
      {
        id: 101,
        name: '站务公告',
        desc: '社区最新公告与重要通知发布区',
        icon: '📣',
        iconUrl: forumIcon('公告', '#2b7cff'),
        iconWidth: 100,
        threads: 128,
        posts: 3421,
        todayPosts: 3,
        moderators: ['管理员'],
        rules:
          '本版发布社区官方公告与重要通知。<br>请勿在公告帖发布与主题无关的回复，违者扣除积分。<br>如需反馈请前往「意见建议」版块。',
        lastPost: { title: '关于社区积分体系调整的说明', author: '管理员', time: '2026-11-24 09:12' },
      },
      {
        id: 102,
        name: '意见建议',
        desc: '对社区的发展有任何意见或建议，欢迎在此提出',
        icon: '💡',
        iconUrl: forumIcon('建议', '#faad14'),
        iconWidth: 100,
        threads: 562,
        posts: 8790,
        todayPosts: 12,
        moderators: ['站务小华', '夜行者'],
        rules:
          '欢迎提出对社区发展的意见与建议。<br>发帖前请先搜索是否已有相同建议，避免重复。<br>优质建议将获得积分与勋章奖励。',
        lastPost: { title: '希望增加夜间模式', author: '夜行者', time: '2026-11-24 08:45' },
      },
      {
        id: 103,
        name: '举报申诉',
        desc: '违规内容举报与账号申诉处理',
        icon: '🛡️',
        iconUrl: forumIcon('申诉', '#52c41a'),
        iconWidth: 100,
        threads: 89,
        posts: 642,
        todayPosts: 1,
        moderators: ['管理员'],
        rules:
          '举报请附帖子链接与违规说明，申诉请注明账号与事由。<br>处理结果将在 3 个工作日内回复。',
        lastPost: { title: '关于账号被禁言的申诉', author: '匿名用户', time: '2026-11-23 22:10' },
      },
    ],
  },
  {
    id: 2,
    name: '技术交流',
    icon: '💻',
    desc: '前端、后端与全栈技术讨论',
    moderators: ['前端小王', '码农老张'],
    forums: [
      {
        id: 201,
        name: 'Vue / 前端',
        desc: 'Vue3、React、TypeScript 等前端技术交流',
        icon: '🟢',
        iconUrl: forumIcon('前端', '#42b883'),
        iconWidth: 115,
        threads: 2310,
        posts: 45620,
        todayPosts: 47,
        moderators: ['前端小王', '开源爱好者'],
        rules:
          '前端技术讨论专版。<br>提问请贴出最小可复现代码与报错信息。<br>禁止无意义灌水，回复请对他人有帮助。',
        subForums: [
          { id: 2011, name: 'Vue 组件库分享', todayPosts: 8, threads: 320, posts: 5600, lastPost: { title: '分享一个表格组件', author: '组件控', time: '2026-11-24 09:40' } },
          { id: 2012, name: 'CSS 与布局', todayPosts: 3, threads: 180, posts: 2100, lastPost: { title: 'Flex 居中的 N 种写法', author: '布局大师', time: '2026-11-24 08:10' } },
        ],
        lastPost: { title: 'Vue3 组合式 API 最佳实践分享', author: '前端小王', time: '2026-11-24 10:02' },
      },
      {
        id: 202,
        name: 'Go / 后端',
        desc: 'Golang、微服务、数据库与后端架构讨论',
        icon: '🐹',
        iconUrl: forumIcon('后端', '#00add8'),
        iconWidth: 115,
        threads: 1876,
        posts: 32100,
        todayPosts: 33,
        moderators: ['码农老张', 'DBA小李'],
        rules:
          '后端与 Go 语言交流。<br>架构讨论请说明场景与规模，避免空谈。<br>代码贴请使用代码块。',
        lastPost: { title: 'DiscuzX 后端重构思路讨论', author: '码农老张', time: '2026-11-24 09:50' },
      },
      {
        id: 203,
        name: '数据库',
        desc: 'MySQL、Redis、PostgreSQL 等数据库技术',
        icon: '🗄️',
        iconUrl: forumIcon('数据库', '#f5222d'),
        iconWidth: 100,
        threads: 945,
        posts: 15680,
        todayPosts: 9,
        moderators: ['DBA小李'],
        rules:
          '数据库性能优化、故障排查与原理讨论。<br>提问请贴出表结构、索引与执行计划。',
        lastPost: { title: 'MySQL 索引优化实战案例', author: 'DBA小李', time: '2026-11-24 08:20' },
      },
      {
        id: 204,
        name: '运维部署',
        desc: 'Linux、Docker、K8s、CI/CD 与服务器运维',
        icon: '⚙️',
        iconUrl: forumIcon('运维', '#722ed1'),
        iconWidth: 100,
        threads: 712,
        posts: 9870,
        todayPosts: 6,
        moderators: ['运维阿强'],
        rules:
          '运维与部署经验分享。<br>涉及线上操作请注明风险，生产环境请勿直接照搬。',
        lastPost: { title: 'Nginx 反向代理配置踩坑记录', author: '运维阿强', time: '2026-11-23 23:40' },
      },
    ],
  },
  {
    id: 3,
    name: '休闲灌水',
    icon: '☕',
    desc: '闲聊、分享与生活记录',
    moderators: ['摸鱼大师'],
    forums: [
      {
        id: 301,
        name: '闲聊灌水',
        desc: '畅所欲言，轻松一刻，请勿违反社区规定',
        icon: '💬',
        iconUrl: forumIcon('灌水', '#13c2c2'),
        iconWidth: 115,
        threads: 5430,
        posts: 128900,
        todayPosts: 156,
        moderators: ['摸鱼大师', '萌新报到'],
        rules:
          '畅所欲言，但请遵守社区规定。<br>禁止广告、人身攻击与低俗内容。<br>水帖虽好，不要贪杯哦。',
        lastPost: { title: '今天天气不错，大家周末去哪玩？', author: '摸鱼大师', time: '2026-11-24 10:15' },
      },
      {
        id: 302,
        name: '分享区',
        desc: '分享你的项目、工具、文章与生活',
        icon: '🎁',
        iconUrl: forumIcon('分享', '#eb2f96'),
        iconWidth: 100,
        threads: 1205,
        posts: 23400,
        todayPosts: 28,
        moderators: ['开源爱好者'],
        rules:
          '分享你的项目、工具、文章与生活点滴。<br>优质分享将被置顶推荐。',
        lastPost: { title: '分享一个开源的 Vue 组件库', author: '开源爱好者', time: '2026-11-24 09:30' },
      },
    ],
  },
]

export const hotTopics = [
  { id: 1, rank: 1, tid: 5001, title: 'Vue3 组合式 API 最佳实践分享', replies: 328, heat: 9820 },
  { id: 2, rank: 2, tid: 6001, title: 'DiscuzX 后端重构思路讨论', replies: 256, heat: 8760 },
  { id: 3, rank: 3, tid: 7001, title: '今天天气不错，大家周末去哪玩？', replies: 198, heat: 6540 },
  { id: 4, rank: 4, tid: 5003, title: '分享一个开源的 Vue 组件库', replies: 167, heat: 5430 },
  { id: 5, rank: 5, tid: 13001, title: 'MySQL 索引优化实战案例', replies: 142, heat: 4890 },
  { id: 6, rank: 6, tid: 11001, title: '希望增加夜间模式', replies: 121, heat: 4120 },
  { id: 7, rank: 7, tid: 14001, title: 'Nginx 反向代理配置踩坑记录', replies: 98, heat: 3560 },
  { id: 8, rank: 8, tid: 6004, title: 'Golang 泛型使用心得总结', replies: 87, heat: 3120 },
]

export const onlineMembers = [
  { id: 1, name: '管理员', role: 'admin' },
  { id: 2, name: '版主小明', role: 'moderator' },
  { id: 3, name: '前端小王', role: 'member' },
  { id: 4, name: '码农老张', role: 'member' },
  { id: 5, name: '摸鱼大师', role: 'member' },
  { id: 6, name: '夜行者', role: 'member' },
  { id: 7, name: 'DBA小李', role: 'member' },
  { id: 8, name: '开源爱好者', role: 'member' },
  { id: 9, name: '运维阿强', role: 'member' },
  { id: 10, name: '测试用户001', role: 'member' },
  { id: 11, name: '萌新报到', role: 'member' },
  { id: 12, name: '游客', role: 'guest' },
]

export const stats = {
  threads: 23567,
  posts: 389421,
  members: 15689,
  todayPosts: 342,
  yesterdayPosts: 298,
  newMembers: 23,
  newestMember: '萌新报到',
  online: {
    total: 128,
    members: 12,
    guests: 116,
    maxToday: 156,
  },
}

export const friendLinks = [
  { name: 'Discuz! 官方', url: 'https://www.discuz.net' },
  { name: 'Vite', url: 'https://vitejs.dev' },
  { name: 'Vue.js', url: 'https://vuejs.org' },
  { name: 'Go 语言', url: 'https://go.dev' },
  { name: '应用中心', url: 'https://addon.dismall.com' },
]

export const forumTypes = {
  101: [
    { id: 'all', name: '全部', count: 128 },
    { id: 1001, name: '官方公告', count: 42 },
    { id: 1002, name: '活动通知', count: 28 },
    { id: 1003, name: '系统维护', count: 19 },
  ],
  201: [
    { id: 'all', name: '全部', count: 2310 },
    { id: 2001, name: '求助', count: 860 },
    { id: 2002, name: '分享', count: 1120 },
    { id: 2003, name: '讨论', count: 330 },
  ],
  202: [
    { id: 'all', name: '全部', count: 1876 },
    { id: 2011, name: '求助', count: 540 },
    { id: 2012, name: '分享', count: 980 },
    { id: 2013, name: '架构', count: 356 },
  ],
  301: [
    { id: 'all', name: '全部', count: 5430 },
    { id: 3001, name: '闲聊', count: 3200 },
    { id: 3002, name: '吐槽', count: 1450 },
    { id: 3003, name: '生活', count: 780 },
  ],
  302: [
    { id: 'all', name: '全部', count: 1205 },
    { id: 3011, name: '项目', count: 620 },
    { id: 3012, name: '工具', count: 385 },
    { id: 3013, name: '文章', count: 200 },
  ],
}

const authorColor = (role) => {
  if (role === 'admin') return '#f5222d'
  if (role === 'moderator') return '#1f66d8'
  return '#333'
}

const buildAuthor = (name, role, group) => ({
  name,
  role,
  group,
  color: authorColor(role),
})

export const forumThreads = {
  201: [
    { tid: 5001, typeId: 2002, typeName: '分享', title: 'Vue3 组合式 API 最佳实践分享', author: '前端小王', authorRole: 'moderator', replies: 328, likes: 156, views: 9820, time: '2026-11-20 14:22', lastReply: '2026-11-24 10:02', pinned: true, hot: true, essence: true },
    { tid: 5002, typeId: 2001, typeName: '求助', title: 'watchEffect 和 watch 到底该怎么选？求大佬解惑', author: '萌新报到', authorRole: 'member', replies: 47, likes: 8, views: 620, time: '2026-11-24 09:10', lastReply: '2026-11-24 10:05' },
    { tid: 5003, typeId: 2002, typeName: '分享', title: '分享一个开源的 Vue 组件库', author: '开源爱好者', authorRole: 'member', replies: 167, likes: 89, views: 5430, time: '2026-11-23 16:40', lastReply: '2026-11-24 09:30', hot: true },
    { tid: 5004, typeId: 2003, typeName: '讨论', title: 'TypeScript 严格模式开不开？团队争论不休', author: '夜行者', authorRole: 'member', replies: 92, likes: 34, views: 1820, time: '2026-11-23 11:02', lastReply: '2026-11-24 08:50' },
    { tid: 5005, typeId: 2001, typeName: '求助', title: 'v-model 在自定义组件上不生效，排查半天了', author: '前端小菜', authorRole: 'member', replies: 23, likes: 2, views: 310, time: '2026-11-24 08:15', lastReply: '2026-11-24 09:48' },
    { tid: 5006, typeId: 2002, typeName: '分享', title: '用 Vite 搭建一个组件库 Monorepo 的完整流程', author: '工程化老司机', authorRole: 'member', replies: 134, likes: 76, views: 4200, time: '2026-11-22 15:30', lastReply: '2026-11-24 09:20', essence: true },
    { tid: 5007, typeId: 2003, typeName: '讨论', title: 'Pinia vs Vuex，新项目该怎么选', author: '状态管理纠结户', authorRole: 'member', replies: 58, likes: 19, views: 1450, time: '2026-11-23 19:20', lastReply: '2026-11-24 07:40' },
    { tid: 5008, typeId: 2001, typeName: '求助', title: 'Vue3 + TS 定义 props 默认值的最佳姿势', author: 'TS新人', authorRole: 'member', replies: 31, likes: 5, views: 540, time: '2026-11-24 07:30', lastReply: '2026-11-24 09:05' },
    { tid: 5009, typeId: 2002, typeName: '分享', title: '手写一个极简的响应式系统，理解 Vue3 原理', author: '原理党', authorRole: 'member', replies: 201, likes: 110, views: 6700, time: '2026-11-21 10:10', lastReply: '2026-11-24 06:30', hot: true },
    { tid: 5010, typeId: 2003, typeName: '讨论', title: '单文件组件的 `<script setup>` 真的香吗', author: '老派程序员', authorRole: 'member', replies: 145, likes: 41, views: 3300, time: '2026-11-22 09:00', lastReply: '2026-11-23 22:10' },
  ],
  202: [
    { tid: 6001, typeId: 2012, typeName: '分享', title: 'DiscuzX 后端重构思路讨论', author: '码农老张', authorRole: 'moderator', replies: 256, likes: 130, views: 8760, time: '2026-11-19 09:00', lastReply: '2026-11-24 09:50', pinned: true, hot: true, essence: true },
    { tid: 6002, typeId: 2011, typeName: '求助', title: 'Go 泛型在实际项目中的性能损耗有多大', author: '后端新人', authorRole: 'member', replies: 38, likes: 6, views: 410, time: '2026-11-24 08:50', lastReply: '2026-11-24 09:55' },
    { tid: 6003, typeId: 2013, typeName: '架构', title: '微服务拆分到什么粒度才算合理', author: '架构师老王', authorRole: 'member', replies: 112, likes: 67, views: 2900, time: '2026-11-23 14:00', lastReply: '2026-11-24 09:40', hot: true },
    { tid: 6004, typeId: 2012, typeName: '分享', title: 'Golang 泛型使用心得总结', author: 'Go爱好者', authorRole: 'member', replies: 87, likes: 45, views: 3120, time: '2026-11-22 11:30', lastReply: '2026-11-24 08:20' },
    { tid: 6005, typeId: 2011, typeName: '求助', title: 'goroutine 泄漏排查，pprof 怎么看', author: '并发菜鸟', authorRole: 'member', replies: 29, likes: 4, views: 380, time: '2026-11-24 07:10', lastReply: '2026-11-24 09:10' },
    { tid: 6006, typeId: 2013, typeName: '架构', title: '从单体到微服务：我们踩过的那些坑', author: '踩坑达人', authorRole: 'member', replies: 176, likes: 98, views: 5100, time: '2026-11-20 16:20', lastReply: '2026-11-23 21:30', essence: true },
  ],
  301: [
    { tid: 7001, typeId: 3001, typeName: '闲聊', title: '今天天气不错，大家周末去哪玩？', author: '摸鱼大师', authorRole: 'moderator', replies: 198, likes: 62, views: 6540, time: '2026-11-24 09:00', lastReply: '2026-11-24 10:15', hot: true },
    { tid: 7002, typeId: 3002, typeName: '吐槽', title: '周一综合症又犯了，不想上班', author: '打工人', authorRole: 'member', replies: 234, likes: 88, views: 4300, time: '2026-11-24 08:30', lastReply: '2026-11-24 10:10' },
    { tid: 7003, typeId: 3003, typeName: '生活', title: '养了三年的猫终于肯让我抱了', author: '铲屎官', authorRole: 'member', replies: 156, likes: 210, views: 3200, time: '2026-11-23 20:00', lastReply: '2026-11-24 09:30', hot: true },
    { tid: 7004, typeId: 3001, typeName: '闲聊', title: '大家午餐都吃什么，每天选择困难', author: '吃饭纠结户', authorRole: 'member', replies: 89, likes: 12, views: 1100, time: '2026-11-24 11:30', lastReply: '2026-11-24 12:05' },
  ],
  302: [
    { tid: 8001, typeId: 3011, typeName: '项目', title: '分享一个开源的 Vue 组件库', author: '开源爱好者', authorRole: 'member', replies: 167, likes: 89, views: 5430, time: '2026-11-23 16:40', lastReply: '2026-11-24 09:30', pinned: true, hot: true },
    { tid: 8002, typeId: 3012, typeName: '工具', title: '推荐 10 个提升开发效率的 VSCode 插件', author: '效率控', authorRole: 'member', replies: 102, likes: 73, views: 3800, time: '2026-11-22 10:00', lastReply: '2026-11-24 08:40' },
    { tid: 8003, typeId: 3013, typeName: '文章', title: '我是如何从前端转全栈的：三年经验总结', author: '全栈路上', authorRole: 'member', replies: 78, likes: 145, views: 4600, time: '2026-11-21 09:20', lastReply: '2026-11-24 07:50', essence: true },
  ],
}

export const threadPosts = {
  5001: {
    info: {
      tid: 5001,
      title: 'Vue3 组合式 API 最佳实践分享',
      typeName: '分享',
      fid: 201,
      forumName: 'Vue / 前端',
      sectionName: '技术交流',
      views: 9820,
      replies: 328,
      likes: 156,
      favCount: 42,
      pageCount: 11,
      author: buildAuthor('前端小王', 'moderator', '版主'),
      postTime: '2026-11-20 14:22',
    },
    posts: [
      {
        pid: 90001,
        floor: 1,
        support: 210,
        oppose: 12,
        author: {
          name: '前端小王',
          role: 'moderator',
          group: '版主',
          color: authorColor('moderator'),
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=wang',
          uid: 10086,
          online: true,
          threads: 210,
          posts: 316,
          credits: 433,
          groupLevel: 4,
          levelName: '高级玩家',
          levelProgress: 52,
          levelNext: 167,
          profile: { 贡献度: 19, 金元: 3569, 精华: 0, 注册时间: '2025-10-30' },
        },
        time: '2026-11-20 14:22',
        contentHtml:
          '大家好，这两年团队全面转向 Vue3 组合式 API，踩了不少坑也积累了一些经验，整理出来和大家分享。<br><br><strong>一、setup 还是 script setup？</strong><br>新项目无脑上 <code>&lt;script setup&gt;</code>，心智负担小，代码量少。<br><br><strong>二、响应式 API 选择</strong><br>ref 用于基本类型，reactive 用于对象，toRefs 用于解构响应式。<br><br><strong>三、组合式函数命名</strong><br>统一 use 前缀，比如 usePagination、useDarkMode，和 React Hooks 习惯保持一致。<br><br>欢迎大家补充自己的实践心得，你的回复是我最大的动力 👍',
        likes: 156,
        locked: true,
        comments: [
          { pid: 90001, author: '路过的甲', time: '2026-11-20 15:01', text: '收藏了，正好在重构老项目' },
          { pid: 90001, author: '前端新人', time: '2026-11-20 16:30', text: 'toRefs 那块能再展开讲讲吗' },
        ],
      },
      {
        pid: 90002,
        floor: 2,
        support: 45,
        oppose: 3,
        author: {
          name: '原理党',
          role: 'member',
          group: '高级会员',
          color: authorColor('member'),
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=principle',
          uid: 10087,
          online: true,
          threads: 88,
          posts: 1240,
          credits: 982,
          groupLevel: 5,
          levelName: '资深玩家',
          levelProgress: 70,
          levelNext: 218,
          profile: { 贡献度: 64, 金元: 12000, 精华: 3, 注册时间: '2024-05-12' },
        },
        time: '2026-11-20 14:35',
        contentHtml: '写得很实在，补充一点：<code>computed</code> 一定要返回新值，别在里面搞副作用，调试起来要命。',
        likes: 23,
        comments: [],
      },
      {
        pid: 90003,
        floor: 3,
        support: 88,
        oppose: 5,
        author: {
          name: '码农老张',
          role: 'moderator',
          group: '版主',
          color: authorColor('moderator'),
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=zhang',
          uid: 10088,
          online: false,
          threads: 156,
          posts: 2300,
          credits: 1560,
          groupLevel: 6,
          levelName: '专家',
          levelProgress: 30,
          levelNext: 940,
          profile: { 贡献度: 120, 金元: 28000, 精华: 8, 注册时间: '2023-03-08' },
        },
        time: '2026-11-20 15:20',
        contentHtml: '加精了！建议再补一篇关于 Pinia 的实践，现在状态管理那块也挺多人纠结。',
        likes: 67,
        comments: [
          { pid: 90003, author: '前端小王', time: '2026-11-20 15:40', text: '收到，下周安排' },
        ],
      },
      {
        pid: 90004,
        floor: 4,
        support: 6,
        oppose: 1,
        author: {
          name: '萌新报到',
          role: 'member',
          group: '新手上路',
          color: authorColor('member'),
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=newbie',
          uid: 10089,
          online: true,
          threads: 3,
          posts: 28,
          credits: 45,
          groupLevel: 1,
          levelName: '新手上路',
          levelProgress: 45,
          levelNext: 55,
          profile: { 贡献度: 0, 金元: 200, 精华: 0, 注册时间: '2026-11-01' },
        },
        time: '2026-11-21 09:10',
        contentHtml: '感谢分享，已收藏！终于搞懂 ref 和 reactive 了。',
        likes: 1,
        comments: [],
      },
    ],
  },
  6001: {
    info: {
      tid: 6001,
      title: 'DiscuzX 后端重构思路讨论',
      typeName: '分享',
      fid: 202,
      forumName: 'Go / 后端',
      sectionName: '技术交流',
      views: 8760,
      replies: 256,
      likes: 130,
      favCount: 38,
      pageCount: 9,
      author: buildAuthor('码农老张', 'moderator', '版主'),
      postTime: '2026-11-19 09:00',
    },
    posts: [
      {
        pid: 91001,
        floor: 1,
        support: 175,
        oppose: 9,
        author: {
          name: '码农老张',
          role: 'moderator',
          group: '版主',
          color: authorColor('moderator'),
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=zhang',
          uid: 10088,
          online: false,
          threads: 156,
          posts: 2300,
          credits: 1560,
          groupLevel: 6,
          levelName: '专家',
          levelProgress: 30,
          levelNext: 940,
          profile: { 贡献度: 120, 金元: 28000, 精华: 8, 注册时间: '2023-03-08' },
        },
        time: '2026-11-19 09:00',
        contentHtml:
          '最近在和团队讨论把老 Discuz 后端用 Go 重构，整理了一下思路，抛砖引玉。<br><br><strong>现状痛点：</strong><br>1. PHP 老代码耦合严重<br>2. 表结构冗余，查询慢<br>3. 扩展机制不清晰<br><br><strong>重构目标：</strong><br>Go + TuuzGoWeb 框架，ORM 用 Gorose-Pro，前后端分离。<br><br>欢迎大家讨论架构选型和迁移策略。',
        likes: 130,
        comments: [
          { pid: 91001, author: '架构师老王', time: '2026-11-19 10:20', text: '迁移策略建议灰度，先切读再切写' },
        ],
      },
      {
        pid: 91002,
        floor: 2,
        support: 52,
        oppose: 2,
        author: {
          name: 'DBA小李',
          role: 'moderator',
          group: '版主',
          color: authorColor('moderator'),
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=dba',
          uid: 10090,
          online: true,
          threads: 72,
          posts: 980,
          credits: 760,
          groupLevel: 5,
          levelName: '资深玩家',
          levelProgress: 60,
          levelNext: 240,
          profile: { 贡献度: 80, 金元: 15600, 精华: 4, 注册时间: '2024-01-15' },
        },
        time: '2026-11-19 09:40',
        contentHtml: '数据库那块我可以配合，表结构先梳理一遍，索引优化能先做一波，收益最大。',
        likes: 45,
        comments: [],
      },
      {
        pid: 91003,
        floor: 3,
        support: 30,
        oppose: 1,
        author: {
          name: '运维阿强',
          role: 'member',
          group: '高级会员',
          color: authorColor('member'),
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ops',
          uid: 10091,
          online: false,
          threads: 41,
          posts: 670,
          credits: 520,
          groupLevel: 4,
          levelName: '高级玩家',
          levelProgress: 20,
          levelNext: 480,
          profile: { 贡献度: 35, 金元: 8900, 精华: 1, 注册时间: '2024-08-20' },
        },
        time: '2026-11-19 11:05',
        contentHtml: '部署这块我建议上 K8s，配合 CI/CD，灰度发布方便回滚。',
        likes: 28,
        comments: [],
      },
    ],
  },
}

const allForums = () => forumSections.flatMap((s) => s.forums.map((f) => ({ ...f, sectionId: s.id, sectionName: s.name })))

export function findForum(fid) {
  const f = allForums().find((x) => x.id === Number(fid))
  return f || null
}

export function getForumBreadcrumb(fid) {
  const f = findForum(fid)
  if (!f) return []
  return [
    { name: '首页', href: '/' },
    { name: f.sectionName, href: '/forum' },
    { name: f.name, href: `/forum/${f.id}`, active: true },
  ]
}

export function getForumThreads(fid) {
  return forumThreads[fid] || []
}

export function getForumTypes(fid) {
  return forumTypes[fid] || [{ id: 'all', name: '全部', count: 0 }]
}

export function findThread(tid) {
  return threadPosts[tid] || null
}