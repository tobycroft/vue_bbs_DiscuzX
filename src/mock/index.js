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
    forums: [
      {
        id: 101,
        name: '站务公告',
        desc: '社区最新公告与重要通知发布区',
        icon: '📣',
        threads: 128,
        posts: 3421,
        todayPosts: 3,
        lastPost: { title: '关于社区积分体系调整的说明', author: '管理员', time: '2026-11-24 09:12' },
      },
      {
        id: 102,
        name: '意见建议',
        desc: '对社区的发展有任何意见或建议，欢迎在此提出',
        icon: '💡',
        threads: 562,
        posts: 8790,
        todayPosts: 12,
        lastPost: { title: '希望增加夜间模式', author: '夜行者', time: '2026-11-24 08:45' },
      },
      {
        id: 103,
        name: '举报申诉',
        desc: '违规内容举报与账号申诉处理',
        icon: '🛡️',
        threads: 89,
        posts: 642,
        todayPosts: 1,
        lastPost: { title: '关于账号被禁言的申诉', author: '匿名用户', time: '2026-11-23 22:10' },
      },
    ],
  },
  {
    id: 2,
    name: '技术交流',
    icon: '💻',
    desc: '前端、后端与全栈技术讨论',
    forums: [
      {
        id: 201,
        name: 'Vue / 前端',
        desc: 'Vue3、React、TypeScript 等前端技术交流',
        icon: '🟢',
        threads: 2310,
        posts: 45620,
        todayPosts: 47,
        lastPost: { title: 'Vue3 组合式 API 最佳实践分享', author: '前端小王', time: '2026-11-24 10:02' },
      },
      {
        id: 202,
        name: 'Go / 后端',
        desc: 'Golang、微服务、数据库与后端架构讨论',
        icon: '🐹',
        threads: 1876,
        posts: 32100,
        todayPosts: 33,
        lastPost: { title: 'DiscuzX 后端重构思路讨论', author: '码农老张', time: '2026-11-24 09:50' },
      },
      {
        id: 203,
        name: '数据库',
        desc: 'MySQL、Redis、PostgreSQL 等数据库技术',
        icon: '🗄️',
        threads: 945,
        posts: 15680,
        todayPosts: 9,
        lastPost: { title: 'MySQL 索引优化实战案例', author: 'DBA小李', time: '2026-11-24 08:20' },
      },
      {
        id: 204,
        name: '运维部署',
        desc: 'Linux、Docker、K8s、CI/CD 与服务器运维',
        icon: '⚙️',
        threads: 712,
        posts: 9870,
        todayPosts: 6,
        lastPost: { title: 'Nginx 反向代理配置踩坑记录', author: '运维阿强', time: '2026-11-23 23:40' },
      },
    ],
  },
  {
    id: 3,
    name: '休闲灌水',
    icon: '☕',
    desc: '闲聊、分享与生活记录',
    forums: [
      {
        id: 301,
        name: '闲聊灌水',
        desc: '畅所欲言，轻松一刻，请勿违反社区规定',
        icon: '💬',
        threads: 5430,
        posts: 128900,
        todayPosts: 156,
        lastPost: { title: '今天天气不错，大家周末去哪玩？', author: '摸鱼大师', time: '2026-11-24 10:15' },
      },
      {
        id: 302,
        name: '分享区',
        desc: '分享你的项目、工具、文章与生活',
        icon: '🎁',
        threads: 1205,
        posts: 23400,
        todayPosts: 28,
        lastPost: { title: '分享一个开源的 Vue 组件库', author: '开源爱好者', time: '2026-11-24 09:30' },
      },
    ],
  },
]

export const hotTopics = [
  { id: 1, rank: 1, title: 'Vue3 组合式 API 最佳实践分享', replies: 328, heat: 9820 },
  { id: 2, rank: 2, title: 'DiscuzX 后端重构思路讨论', replies: 256, heat: 8760 },
  { id: 3, rank: 3, title: '今天天气不错，大家周末去哪玩？', replies: 198, heat: 6540 },
  { id: 4, rank: 4, title: '分享一个开源的 Vue 组件库', replies: 167, heat: 5430 },
  { id: 5, rank: 5, title: 'MySQL 索引优化实战案例', replies: 142, heat: 4890 },
  { id: 6, rank: 6, title: '希望增加夜间模式', replies: 121, heat: 4120 },
  { id: 7, rank: 7, title: 'Nginx 反向代理配置踩坑记录', replies: 98, heat: 3560 },
  { id: 8, rank: 8, title: 'Golang 泛型使用心得总结', replies: 87, heat: 3120 },
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