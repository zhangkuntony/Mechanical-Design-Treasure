<script setup lang="ts">
// 电气计算页
// TODO: 实现电气相关计算工具页面
</script>

<template>
  <div class="electrical-page">
    <div class="placeholder-card">
      <svg class="placeholder-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26 4L12 22h10l-2 18 14-18H24l2-18z" stroke="#F56C6C" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
      </svg>
      <p class="placeholder-title">电气计算</p>
      <p class="placeholder-desc">电气相关计算工具</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as *;

.electrical-page {
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
