<script setup lang="ts">
import type { ToolCategory } from '@/types/module'

export interface CategoryOption {
  label: string
  value: ToolCategory | 'all'
}

const props = withDefaults(
  defineProps<{
    options?: CategoryOption[]
    modelValue?: ToolCategory | 'all'
  }>(),
  {
    options: () => [
      { label: '全部', value: 'all' },
      { label: '计算', value: 'calculate' },
      { label: '查询', value: 'query' },
      { label: '选型', value: 'select' },
    ],
    modelValue: 'all',
  },
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: ToolCategory | 'all'): void
}>()

function selectTab(value: ToolCategory | 'all') {
  emit('update:modelValue', value)
}
</script>

<template>
  <div class="category-tabs">
    <button
      v-for="opt in options"
      :key="opt.value"
      class="tab"
      :class="{ active: modelValue === opt.value }"
      @click="selectTab(opt.value)"
    >
      <span class="tab-text">{{ opt.label }}</span>
      <span v-if="modelValue === opt.value" class="tab-indicator" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as *;

.category-tabs {
  display: flex;
  align-items: center;
  gap: $spacing-xxl;
  padding: $spacing-sm $page-padding;
  background: $bg-page;
}

.tab {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  color: $text-secondary;
  transition: color $transition-duration $transition-timing;
  -webkit-tap-highlight-color: transparent;

  &.active {
    color: $primary-color;
  }
}

.tab-text {
  font-size: $font-size-md;
  font-weight: $font-weight-medium;
  white-space: nowrap;
}

.tab-indicator {
  width: 20px;
  height: 3px;
  border-radius: 2px;
  background: $primary-color;
}
</style>
