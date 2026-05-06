<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { Tool } from '@/types/module'

const props = defineProps<{
  tool: Tool
}>()

const router = useRouter()

function navigateToDetail() {
  router.push(`/tool/${props.tool.moduleId}/${props.tool.id}`)
}
</script>

<template>
  <button class="tool-item" @click="navigateToDetail">
    <div class="tool-icon-wrapper">
      <!-- 后续可替换为实际 SVG 图标 -->
      <svg class="tool-icon" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="4" width="16" height="16" rx="3" stroke="#409EFF" stroke-width="1.5" opacity="0.5"/>
        <path d="M12 7v10M7 12h10" stroke="#409EFF" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    </div>
    <span class="tool-name">{{ tool.name }}</span>
  </button>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as *;

.tool-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: $spacing-sm 0;
  background: none;
  border: none;
  cursor: pointer;
  transition: transform 0.15s ease;
  -webkit-tap-highlight-color: transparent;

  &:active {
    transform: scale(0.92);
  }
}

.tool-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: $radius-md;
  background: $primary-bg;
}

.tool-icon {
  width: 26px;
  height: 26px;
}

.tool-name {
  font-size: $font-size-xs + 1;   // ~11px
  color: $text-regular;
  text-align: center;
  max-width: 64px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 1.2;
}
</style>
