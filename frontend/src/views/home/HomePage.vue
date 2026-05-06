<script setup lang="ts">
import { ref, computed, onMounted, watch, inject, type Ref } from 'vue'
import type { ToolCategory, Module } from '@/types/module'
import BannerCarousel from '@/components/common/BannerCarousel.vue'
import ModuleCard from '@/components/common/ModuleCard.vue'
import ToolItem from '@/components/common/ToolItem.vue'
import FloatingButton from '@/components/common/FloatingButton.vue'
import { useDebounce } from '@/composables/useDebounce'
import { fetchModuleList, fetchBannerList, searchTools } from '@/mock/index'
import type { Banner } from '@/mock/banners'

// ─── 从 MainLayout 注入共享状态 ──────────
const activeCategory = inject<Ref<ToolCategory | 'all'>>('homeCategory')!
const searchKeywordFromParent = inject<Ref<string>>('homeSearchKeyword')!

// ─── 数据状态 ──────────────────────────

const loading = ref(true)
const modules = ref<Module[]>([])
const banners = ref<Banner[]>([])

// 本地搜索关键词（同步自父组件，做防抖）
const localSearchKeyword = ref(searchKeywordFromParent.value)
watch(searchKeywordFromParent, (v) => { localSearchKeyword.value = v })
const debouncedKeyword = useDebounce(localSearchKeyword, 300)

const searchResults = ref<{ id: string; name: string; moduleId: string }[]>([])

// ─── 计算属性 ──────────────────────────

const displayedModules = computed(() => {
  let result = [...modules.value]

  if (activeCategory.value !== 'all') {
    result = result.filter((m) =>
      m.category.includes(activeCategory.value as ToolCategory),
    )
  }

  if (debouncedKeyword.value.trim() && searchResults.value.length > 0) {
    const matchedToolIds = new Set(searchResults.value.map((t) => t.id))
    result = result.filter((m) =>
      m.tools.some((tool) => matchedToolIds.has(tool.id)),
    )
  }

  return result
})

const isEmpty = computed(
  () => !loading.value && displayedModules.value.length === 0,
)

// ─── 加载数据 ──────────────────────────

async function loadBanners() {
  try {
    const res = await fetchBannerList()
    banners.value = res.data ?? []
  } catch (e) {
    console.warn('[Home] 加载轮播图失败:', e)
  }
}

async function loadModules() {
  try {
    const res = await fetchModuleList()
    modules.value = res.data ?? []
  } catch (e) {
    console.warn('[Home] 加载模块失败:', e)
  }
}

onMounted(async () => {
  loading.value = true
  await Promise.all([loadBanners(), loadModules()])
  loading.value = false
})

// ─── 搜索逻辑 ──────────────────────────

async function performSearch(keyword: string) {
  try {
    const res = await searchTools(keyword)
    searchResults.value = (res.data ?? []).map((t) => ({
      id: t.id,
      name: t.name,
      moduleId: t.moduleId,
    }))
  } catch (e) {
    console.warn('[Home] 搜索失败:', e)
    searchResults.value = []
  }
}

watch(debouncedKeyword, (newKeyword) => {
  if (!newKeyword.trim()) {
    searchResults.value = []
    return
  }
  performSearch(newKeyword)
})

// ─── 事件处理 ──────────────────────────

function onMoreClick(moduleId: string) {
  console.log('[Home] 查看更多:', moduleId)
}

function onFloatingButtonClick() {
  console.log('[Home] 点击原目录本')
}
</script>

<template>
  <div class="home-page">
    <!-- 顶部留白（给扩展 Header 让出空间） -->
    <div class="header-spacer" />

    <!-- 轮播图 -->
    <BannerCarousel v-if="banners.length && !loading" :banners="banners" :height="120" />

    <!-- 加载骨架屏 -->
    <div v-if="loading" class="skeleton-container">
      <div v-for="i in 3" :key="i" class="skeleton-card">
        <div class="skeleton-header">
          <span class="skeleton-title-bar" />
          <span class="skeleton-more-bar" />
        </div>
        <div class="skeleton-grid">
          <div v-for="j in 4" :key="j" class="skeleton-item" />
        </div>
      </div>
    </div>

    <!-- 空状态 -->
    <div v-else-if="isEmpty" class="empty-state">
      <p class="empty-text">未找到匹配的功能工具</p>
      <p class="empty-hint">换个关键词试试吧～</p>
    </div>

    <!-- 模块列表 -->
    <template v-else-if="!loading">
      <div class="section-header">
        <h2 class="section-title">全部功能</h2>
      </div>

      <div class="module-list">
        <ModuleCard
          v-for="mod in displayedModules"
          :key="mod.id"
          :module="mod"
          @more="onMoreClick"
        >
          <ToolItem
            v-for="tool in mod.tools.slice(0, 8)"
            :key="tool.id"
            :tool="tool"
          />
        </ModuleCard>
      </div>
    </template>

    <!-- 右下角悬浮按钮 -->
    <FloatingButton @click="onFloatingButtonClick" />
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as *;

.home-page {
  min-height: 100%;
  padding-bottom: $spacing-xxl;
}

/* 顶部占位区：防止内容被扩展 Header 遮挡 */
.header-spacer {
  height: 142px;              /* 与 app-header--home 的高度匹配 */
  flex-shrink: 0;
}

/* 其余 section-header / module-list / skeleton / empty 样式保持不变 */
.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: $spacing-lg $page-padding $spacing-sm;

  .section-title {
    font-size: $font-size-lg;
    font-weight: $font-weight-bold;
    color: $text-primary;
  }
}

.module-list {
  display: flex;
  flex-direction: column;
  gap: $module-gap;
  padding: 0 $page-padding;
}

.skeleton-container {
  padding: 0 $page-padding;
  display: flex;
  flex-direction: column;
  gap: $module-gap;
}

.skeleton-card {
  background: $bg-card;
  border-radius: $radius-lg;
  padding: $spacing-lg;
  box-shadow: $shadow-sm;
  border-left: 3px solid #e0e0e0;
}

.skeleton-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: $spacing-md;
}

.skeleton-title-bar {
  width: 80px;
  height: 18px;
  border-radius: $radius-sm;
  background: linear-gradient(90deg, #f0f0f0 25%, #e8e8e8 50%, #f0f0f0 75%);
  animation: shimmer 1.5s infinite;
}

.skeleton-more-bar {
  width: 48px;
  height: 14px;
  border-radius: 7px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e8e8e8 50%, #f0f0f0 75%);
  animation: shimmer 1.5s infinite;
}

.skeleton-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: $spacing-sm $spacing-xs;
}

.skeleton-item {
  width: 100%;
  aspect-ratio: 1;
  border-radius: $radius-md;
  background: linear-gradient(90deg, #f2f3f5 25%, #eceef2 50%, #f2f3f5 75%);
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 120px;
}

.empty-text {
  font-size: $font-size-lg;
  color: $text-secondary;
}

.empty-hint {
  margin-top: $spacing-sm;
  font-size: $font-size-sm;
  color: $text-placeholder;
}
</style>
