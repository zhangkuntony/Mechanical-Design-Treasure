<script setup lang="ts">
import { ref, computed, provide } from 'vue'
import { useRoute } from 'vue-router'
import type { ToolCategory } from '@/types/module'
import AppHeader from '@/components/common/AppHeader.vue'
import BottomTabBar from '@/components/common/BottomTabBar.vue'

const route = useRoute()

const pageTitle = computed(() => {
  const meta = route.meta?.title as string | undefined
  return meta || '机械设计宝典'
})

// ─── 首页专属状态（供 AppHeader 和 HomePage 共享） ──

const isHome = computed(() => route.path === '/' || route.name === 'Home')

const activeCategory = ref<ToolCategory | 'all'>('all')
const searchKeyword = ref('')

/** 首页头部展示文字（纯展示，圆点分隔） */
const headerLabels = ['计算', '查表', '选型']

// 通过 provide 注入给子组件
provide('homeCategory', activeCategory)
provide('homeSearchKeyword', searchKeyword)

function onSearch() {
  // 广播搜索事件，由 HomePage 的 watch 或 inject 监听
  const event = new CustomEvent('home-search', { detail: searchKeyword.value })
  globalThis.dispatchEvent(event)
}
</script>

<template>
  <div class="main-layout">
    <AppHeader
      :title="pageTitle"
      :variant="isHome ? 'home' : 'default'"
      :labels="isHome ? headerLabels : undefined"
      :search-keyword="searchKeyword"
      @update:search-keyword="searchKeyword = $event"
      @search="onSearch"
    />

    <main class="layout-content">
      <router-view v-slot="{ Component }">
        <transition name="fade-slide" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <BottomTabBar />
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as *;

.main-layout {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: $bg-page;
  overflow: hidden;
}

.layout-content {
  flex: 1;
  overflow-y: auto;
  
  /* 首页模式不需要额外的 top/bottom margin，
     因为内容直接跟在扩展 header 后面 */
  &:has(.home-page) {
    margin-top: 0;
  }

  /* 其他页面保持原有偏移 */
  margin-bottom: 66px;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.25s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(12px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-12px);
}
</style>
