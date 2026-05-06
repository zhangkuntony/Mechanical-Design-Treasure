<script setup lang="ts">
// 常用计算页
// TODO: 实现高频计算工具快捷入口列表
</script>

<template>
  <div class="calculator-page">
    <div class="placeholder-card">
      <svg class="placeholder-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="4" width="32" height="40" rx="4" stroke="#E6A23C" stroke-width="2.5" />
        <rect x="12" y="10" width="24" height="8" rx="2" fill="#E6A23C" opacity="0.25" />
        <circle cx="16" cy="25" r="2" fill="#E6A23C" />
        <circle cx="24" cy="25" r="2" fill="#E6A23C" />
        <circle cx="32" cy="25" r="2" fill="#E6A23C" />
        <circle cx="16" cy="34" r="2" fill="#E6A23C" />
        <circle cx="24" cy="34" r="2" fill="#E6A23C" />
        <circle cx="32" cy="34" r="2" fill="#E6A23C" />
      </svg>
      <p class="placeholder-title">常用计算</p>
      <p class="placeholder-desc">高频工具快捷入口</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as *;

.calculator-page {
  padding: $spacing-lg $page-padding;
}

.placeholder-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  padding: $spacing-xxl * 2;
  background: $bg-card;
  border-radius: $radius-lg;
  box-shadow: $shadow-sm;
}

.placeholder-icon {
  width: 64px;
  height: 64px;
  opacity: 0.6;
}

.placeholder-title {
  margin-top: $spacing-lg;
  font-size: $font-size-xl;
  font-weight: $font-weight-bold;
  color: $text-primary;
}

.placeholder-desc {
  margin-top: $spacing-sm;
  font-size: $font-size-md;
  color: $text-secondary;
}
</style>
