<script setup lang="ts">
defineProps<{
  modelValue?: string
  placeholder?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'search', keyword: string): void
}>()

function onInput(e: Event) {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

function onSearch() {
  emit('search', '')
}
</script>

<template>
  <div class="search-bar">
    <el-input
      :model-value="modelValue"
      :placeholder="placeholder || '搜索全站功能（如 螺栓、齿轮、电机...）'"
      clearable
      size="large"
      round
      @input="onInput"
      @keyup.enter="onSearch"
    >
      <template #prefix>
        <el-icon><Search /></el-icon>
      </template>
    </el-input>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as *;

.search-bar {
  padding: 0 $page-padding $spacing-sm;

  :deep(.el-input__wrapper) {
    border-radius: $radius-xl !important;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.06);
    padding-left: $spacing-lg;
  }
}
</style>

<script lang="ts">
import { Search } from '@element-plus/icons-vue'
export default { components: { Search } }
</script>
