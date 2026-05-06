<script setup lang="ts">
import type { Module } from '@/types/module'

defineProps<{
  module: Module
}>()

const emit = defineEmits<{
  (e: 'more', moduleId: string): void
}>()
</script>

<template>
  <div class="module-card">
    <div class="card-header">
      <h3 class="card-title">{{ module.name }}</h3>
      <button v-if="module.tools.length > 4" class="more-btn" @click="emit('more', module.id)">
        更多 <span class="more-arrow">›</span>
      </button>
    </div>
    <div class="tools-grid">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as *;

.module-card {
  background: $bg-card;
  border-radius: $radius-lg;
  padding: $spacing-lg;
  box-shadow: $shadow-sm;
  border-left: 3px solid $primary-color;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: $spacing-md;
}

.card-title {
  font-size: $font-size-lg;
  font-weight: $font-weight-medium;
  color: $text-primary;
}

.more-btn {
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 0;
  background: none;
  border: none;
  font-size: $font-size-sm;
  color: $text-secondary;
  cursor: pointer;
  transition: color $transition-duration $transition-timing;

  &:hover,
  &:active {
    color: $primary-color;
  }
}

.more-arrow {
  font-size: $font-size-lg;
  line-height: 1;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: $spacing-sm $spacing-xs;
}
</style>
