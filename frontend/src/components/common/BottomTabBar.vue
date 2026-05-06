<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

// TabBar 配置
const tabs = [
  { path: '/', name: 'Home', label: '机械库', icon: 'grid' },
  { path: '/calculator', name: 'Calculator', label: '常用计算', icon: 'calculator' },
  { path: '/electrical', name: 'Electrical', label: '电气计算', icon: 'lightning' },
  { path: '/profile', name: 'Profile', label: '我的', icon: 'user' },
]

const activeTab = computed(() => {
  const path = route.path
  if (path === '/') return 'Home'
  if (path.startsWith('/calculator')) return 'Calculator'
  if (path.startsWith('/electrical')) return 'Electrical'
  if (path.startsWith('/profile')) return 'Profile'
  // 工具详情页不高亮任何tab
  return ''
})

function switchTab(tab: typeof tabs[0]) {
  if (activeTab.value === tab.name) return
  router.push(tab.path)
}
</script>

<template>
  <nav class="bottom-tab-bar">
    <div class="tab-bar-inner">
      <button
        v-for="tab in tabs"
        :key="tab.name"
        class="tab-item"
        :class="{ active: activeTab === tab.name }"
        @click="switchTab(tab)"
      >
        <!-- SVG 图标 -->
        <svg class="tab-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- 机械库 - 网格图标 -->
          <template v-if="tab.icon === 'grid'">
            <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="2" />
            <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="2" />
            <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="2" />
            <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="2" />
          </template>
          <!-- 常用计算 - 计算器图标 -->
          <template v-else-if="tab.icon === 'calculator'">
            <rect x="4" y="2" width="16" height="20" rx="3" stroke="currentColor" stroke-width="2" />
            <rect x="6" y="5" width="12" height="4" rx="1" fill="currentColor" opacity="0.3" />
            <circle cx="8" cy="13" r="1.2" fill="currentColor" />
            <circle cx="12" cy="13" r="1.2" fill="currentColor" />
            <circle cx="16" cy="13" r="1.2" fill="currentColor" />
            <circle cx="8" cy="17" r="1.2" fill="currentColor" />
            <circle cx="12" cy="17" r="1.2" fill="currentColor" />
            <circle cx="16" cy="17" r="1.2" fill="currentColor" />
          </template>
          <!-- 电气计算 - 闪电图标 -->
          <template v-else-if="tab.icon === 'lightning'">
            <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
          </template>
          <!-- 我的 - 用户图标 -->
          <template v-else-if="tab.icon === 'user'">
            <circle cx="12" cy="8" r="4" stroke="currentColor" stroke-width="2" />
            <path d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </template>
        </svg>
        <span class="tab-label">{{ tab.label }}</span>
      </button>
    </div>
    <!-- 安全区域适配（iPhone底部横条） -->
    <div class="safe-area-bottom" />
  </nav>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as *;

.bottom-tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: $z-index-fixed;
  background: $bg-card;
  border-top: 1px solid $border-lighter;
}

.tab-bar-inner {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 50px;
}

.tab-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  flex: 1;
  height: 100%;
  background: none;
  border: none;
  cursor: pointer;
  color: $text-secondary;
  transition: color $transition-duration $transition-timing;
  -webkit-tap-highlight-color: transparent;

  &.active {
    color: $primary-color;
  }

  &:active {
    opacity: 0.7;
  }
}

.tab-icon {
  width: 22px;
  height: 22px;
}

.tab-label {
  font-size: $font-size-xs;
  line-height: 1;
  white-space: nowrap;
}

.safe-area-bottom {
  // iOS safe area 由 postcss-px-to-viewport 处理，这里用 env() 适配
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}
</style>
