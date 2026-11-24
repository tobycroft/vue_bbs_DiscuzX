<script setup>
import DiyBanner from '../components/forum/DiyBanner.vue'
import AnnouncementBar from '../components/forum/AnnouncementBar.vue'
import ForumSectionList from '../components/forum/ForumSectionList.vue'
import SidebarStats from '../components/forum/SidebarStats.vue'
import HotTopics from '../components/forum/HotTopics.vue'
import OnlineMembers from '../components/forum/OnlineMembers.vue'
</script>

<template>
  <div class="forum-index container">
    <div class="index-layout">
      <div class="main-col">
        <DiyBanner />
        <AnnouncementBar />
        <ForumSectionList />
      </div>
      <aside class="side-col">
        <SidebarStats />
        <HotTopics />
        <OnlineMembers />
      </aside>
    </div>
  </div>
</template>

<style scoped>
.forum-index {
  padding-top: 16px;
  padding-bottom: 8px;
}

.index-layout {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.main-col {
  flex: 1;
  min-width: 0;
}

.side-col {
  width: 300px;
  flex-shrink: 0;
}
</style>