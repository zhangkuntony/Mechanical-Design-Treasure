<script setup lang="ts">
const props = withDefaults(defineProps<{
  title?: string
  variant?: 'default' | 'home'
  /** 首页模式下的标签文字列表（如 ['计算', '查表', '选型']） */
  labels?: string[]
  searchKeyword?: string
}>(), {
  title: '机械设计宝典',
  variant: 'default',
})

const emit = defineEmits<{
  (e: 'update:searchKeyword', value: string): void
  (e: 'search'): void
}>()

function onInput(e: Event) {
  const target = e.target as HTMLInputElement
  emit('update:searchKeyword', target.value)
}

function onKeyup(e: KeyboardEvent) {
  if (e.key === 'Enter') emit('search')
}
</script>

<template>
  <header class="app-header" :class="[`app-header--${variant}`]">
    <!-- 标题行 -->
    <div class="header-row">
      <h1 class="header-title">{{ title }}</h1>
    </div>

    <!-- 首页模式：标签文字 + 搜索框 -->
    <template v-if="variant === 'home' && labels">
      <!-- 圆点分隔的纯文本 -->
      <div class="header-labels">
        <span v-for="(text, index) in labels" :key="text" class="label-text">
          {{ text }}
          <span v-if="index < labels.length - 1" class="label-dot">·</span>
        </span>
      </div>

      <!-- 搜索框 -->
      <div class="header-search">
        <div class="search-inner">
          <span class="search-icon">🔍</span>
          <input
            class="search-input"
            type="text"
            :value="searchKeyword"
            placeholder="搜索全站功能（如：螺纹、油缸、电缆）"
            @input="onInput"
            @keyup="onKeyup"
          />
        </div>
      </div>
    </template>
  </header>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as *;

// ─── 基础头部 ───
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: $z-index-fixed;
  padding: 0 $page-padding;
  background: linear-gradient(135deg, $primary-color, $primary-dark);
}

.header-row {
  display: flex;
  align-items: center;
}

.header-title {
  font-size: $font-size-xl;
  font-weight: $font-weight-bold;
  color: #fff;
  letter-spacing: 1px;
}

// ─── 默认模式（56px 居中） ───
.app-header--default {
  height: 56px;
  justify-content: center;
}

// ─── 首页模式（扩展蓝色块） ───
.app-header--home {
  padding-top: 16px;
  padding-bottom: 20px;

  border-bottom-left-radius: $radius-xl;    // 16px
  border-bottom-right-radius: $radius-xl;   // 16px

  .header-title {
    font-size: $font-size-title;     // 22px，更大
    font-weight: $font-weight-bold;
    margin-bottom: 8px;
  }

  // 标签文字行（圆点分隔的纯文本）
  .header-labels {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-bottom: 14px;
  }

  .label-text {
    color: rgba(255, 255, 255, 0.8);
    font-size: $font-size-md;

    .label-dot {
      margin-left: 4px;
      color: rgba(255, 255, 255, 0.5);
      user-select: none;
    }
  }

  // 搜索框（白色圆角输入区）
  .header-search {
    width: 100%;
  }

  .search-inner {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 18px;
    background: rgba(255, 255, 255, 0.95);
    border-radius: $radius-xl;

    .search-icon {
      flex-shrink: 0;
      font-size: 16px;
      opacity: 0.45;
    }

    .search-input {
      flex: 1;
      border: none;
      outline: none;
      background: transparent;
      font-size: $font-size-md;
      color: $text-primary;

      &::placeholder {
        color: $text-placeholder;
      }
    }
  }
}
</style>
