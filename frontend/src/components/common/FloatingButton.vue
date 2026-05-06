<script setup lang="ts">
defineEmits<{
  (e: 'click'): void
}>()
</script>

<template>
  <button class="floating-button" @click="$emit('click')">
    <span class="btn-text">📋 原目录本</span>
  </button>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as *;

.floating-button {
  position: fixed;
  right: 16px;
  bottom: 80px;           // 高于 TabBar (50px + safe-area)
  z-index: $z-index-fixed + 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 18px;
  border: none;
  border-radius: $radius-round;
  background: linear-gradient(135deg, $primary-color, $primary-dark);
  color: #fff;
  font-size: $font-size-sm;
  font-weight: $font-weight-medium;
  box-shadow: 0 4px 14px rgba($primary-color, 0.35);
  cursor: pointer;
  transition:
    transform $transition-duration $transition-timing,
    box-shadow $transition-duration $transition-timing;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    box-shadow: 0 6px 20px rgba($primary-color, 0.45);
  }

  &:active {
    transform: scale(0.93);
    box-shadow: 0 2px 8px rgba($primary-color, 0.3);
  }
}

.btn-text {
  white-space: nowrap;
}
</style>
