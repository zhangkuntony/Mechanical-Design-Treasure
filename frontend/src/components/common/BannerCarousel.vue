<script setup lang="ts">
import type { Banner } from '@/mock/banners'

const props = withDefaults(
  defineProps<{ banners?: Banner[]; height?: number }>(),
  {
    banners: () => [],
    height: 120,
  },
)

// 渐变色占位背景（当没有真实图片时使用）
const bannerColors = ['#409EFF', '#67C23A', '#E6A23C']
</script>

<template>
  <div class="banner-carousel" :style="{ height: `${props.height}px` }">
    <el-carousel :interval="3000" arrow="never" indicator-position="inside" :height="`${height}px`">
      <el-carousel-item v-for="(banner, index) in banners" :key="banner.id">
        <div
          class="banner-slide"
          :style="{ background: `linear-gradient(135deg, ${bannerColors[index % bannerColors.length]}, ${bannerColors[(index + 1) % bannerColors.length]})` }"
        >
          <span class="banner-title">{{ banner.title }}</span>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as *;

.banner-carousel {
  margin-top: $spacing-xxl;
  padding: 0 $page-padding;
  overflow: hidden;

  :deep(.el-carousel) {
    border-radius: $radius-lg;
    overflow: hidden;
    box-shadow: $shadow-sm;
  }

  :deep(.el-carousel__indicator--horizontal .el-carousel__button) {
    width: 8px;
    height: 4px;
    border-radius: 2px;
  }

  :deep(.el-carousel__indicator.is-active .el-carousel__button) {
    width: 16px;
    background: $primary-color;
  }
}

.banner-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: #fff;
  font-size: $font-size-xl;
  font-weight: $font-weight-bold;
  letter-spacing: 2px;
}
</style>
