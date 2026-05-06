// ============================================
// PostCSS 移动端适配配置
// 设计稿基准宽度: 375px
// 自动将 px 转换为 vw 单位
// ============================================
export default {
  plugins: {
    'postcss-px-to-viewport-8-plugin': {   // ← 改这里
      viewportWidth: 375,
      unitPrecision: 5,
      viewportUnit: 'vw',
      selectorBlackList: ['.el-'],
      minPixelValue: 1,
      mediaQuery: false,
      exclude: undefined,
      landscape: false,
    },
  },
}