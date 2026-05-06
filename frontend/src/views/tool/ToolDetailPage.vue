<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const moduleId = route.params.moduleId as string
const toolId = route.params.toolId as string
</script>

<template>
  <div class="tool-detail-page">
    <div class="placeholder-card">
      <p class="placeholder-title">工具详情</p>
      <p class="placeholder-desc">
        模块ID: {{ moduleId }} / 工具ID: {{ toolId }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as *;

.tool-detail-page {
  padding: $spacing-lg $page-padding;
}

.placeholder-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  padding: $spacing-xxl * 2;
  background: $bg-card;
  border-radius: $radius-lg;
  box-shadow: $shadow-sm;
}

.placeholder-title {
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
