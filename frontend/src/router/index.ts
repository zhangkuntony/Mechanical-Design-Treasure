import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/home/HomePage.vue'),
        meta: { title: '机械设计宝库' },
      },
      {
        path: 'calculator',
        name: 'Calculator',
        component: () => import('@/views/calculator/CalculatorPage.vue'),
        meta: { title: '常用计算' },
      },
      {
        path: 'electrical',
        name: 'Electrical',
        component: () => import('@/views/electrical/ElectricalPage.vue'),
        meta: { title: '电气计算' },
      },
      {
        path: 'profile',
        name: 'Profile',
        component: () => import('@/views/profile/ProfilePage.vue'),
        meta: { title: '我的' },
      },
      {
        path: 'tool/:moduleId/:toolId',
        name: 'ToolDetail',
        component: () => import('@/views/tool/ToolDetailPage.vue'),
        meta: { title: '工具详情' },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// 路由切换时更新页面标题
router.afterEach((to) => {
  const title = to.meta.title as string | undefined
  document.title = title ? `${title} - 机械设计宝库` : '机械设计宝库'
})

export default router
