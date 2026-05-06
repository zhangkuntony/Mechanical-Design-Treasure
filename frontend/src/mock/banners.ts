export interface Banner {
  id: number
  image: string                 // 图片 URL 或占位色
  title: string                 // 标题文字
  link?: string                 // 点击跳转链接（可选）
}

export const mockBanners: Banner[] = [
  {
    id: 1,
    image: '',                   // 留空用渐变色占位
    title: '开工大吉',
  },
  {
    id: 2,
    image: '',
    title: '新功能上线通知',
  },
  {
    id: 3,
    image: '',
    title: '机械设计宝典使用指南',
  },
]
