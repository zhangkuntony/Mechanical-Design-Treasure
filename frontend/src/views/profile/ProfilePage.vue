<script setup lang="ts">
// 我的页面
// TODO: 实现用户信息、收藏管理、使用历史
</script>

<template>
  <div class="profile-page">
    <div class="placeholder-card">
      <svg class="placeholder-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="16" r="8" stroke="#909399" stroke-width="2.5" />
        <path d="M6 42c0-9.94 8.06-18 18-18s18 8.06 18 18" stroke="#909399" stroke-width="2.5" stroke-linecap="round"/>
      </svg>
      <p class="placeholder-title">我的</p>
      <p class="placeholder-desc">个人中心 · 收藏 · 历史</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as *;

.profile-page {
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
