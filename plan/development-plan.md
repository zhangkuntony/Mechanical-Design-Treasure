# 机械设计宝库 - 前后端分离开发计划

> **创建日期**：2026-05-06  
> **技术栈**：Vue3 + Element Plus（前端） | Spring Boot + MyBatis-Plus + MySQL（后端）  
> **开发策略**：前端优先，先完成前端及Mock数据，后续接入后端API

---

## 一、产品概述

**机械设计宝库** 是一款面向机械工程师的移动端工具集合应用，提供 **11大功能模块**，涵盖计算工具、查询工具和选型工具三大类别的机械设计辅助功能。

### 应用截图参考

基于原始设计稿，应用整体采用移动端优先的响应式设计，蓝色主色调，卡片式布局，类似企业级工具小程序风格。

---

## 二、核心功能清单

### 2.1 页面结构（5个核心页面）

| 页面 | 路由 | 说明 |
|------|------|------|
| 首页（机械库） | `/` | 展示全部功能模块入口、全局搜索、Banner轮播、底部导航 |
| 常用计算页 | `/calculator` | 高频使用的计算工具快捷入口 |
| 电气计算页 | `/electrical` | 电气相关计算工具预留页面 |
| 我的页面 | `/profile` | 用户个人中心、收藏管理、使用历史 |
| 功能详情页 | `/tool/:moduleId/:toolId` | 各工具的计算/查询/选型详情界面 |

### 2.2 11个功能模块详细清单

| 模块ID | 模块名称 | 功能项列表 | 类型 |
|--------|---------|-----------|------|
| M01 | 综合性工具 | 配套手册、材料计算 | 工具类 |
| M02 | 常用功能 | 量角器、直尺、声音分贝测试、运动轨迹检测 | 实用工具 |
| M03 | 液压系统 | 缸径与推力、系统特性曲线公差、液压常用公式、油缸缸径力 | 计算类 |
| M04 | 紧固件-材料 | 高强度螺栓硬度、常用工程材料、铝合金牌号、金属材料计算器 | 查询/计算 |
| M05 | 国家标准/机械标准 | 标准速查 | 查询类 |
| M06 | 紧固件-盘头类螺栓 | 配合公差、螺纹配合、形位公差、键与销 | 查询类 |
| M07 | 紧固件-钩/凸化 | 带轮齿形、四列平键、圆轮传动、水平滚柱链杆 | 计算类 |
| M08 | 结构件-A | 类型选择、螺纹标准、螺栓性能等级、标准速查表 | 查询类 |
| M09 | 齿轮计算 | 齿轮几何(含参数)、齿轮动态、齿轮材料性能 | 计算类 |
| M10 | 力学计算 | 直杆稳定、梁挠度、轴强度、校验强度校核 | 计算类 |
| M11 | (扩展模块) | 预留扩展位 | - |

### 2.3 UI特征总结

- 移动端优先响应式设计（类似小程序风格），适配手机屏幕
- **蓝色主色调** `#409EFF` → `#337ECC` 渐变标题栏
- 卡片式模块分组布局，每项含图标 + 名称文字
- 底部TabBar固定导航（4个Tab：**机械库** / **常用计算** / **电气计算** / **我的**）
- 全局搜索框支持关键词搜索功能（带防抖）
- 右下角悬浮 **"原目录本"** 按钮
- 各模块右侧有 **"更多 >"** 展开链接
- 二级标签栏：**计算 \| 查询 \| 选型** 用于筛选显示的功能类别

---

## 三、技术栈详情

### 3.1 前端技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| Vue 3 | ^3.4 | 核心框架（Composition API + `<script setup>`） |
| Vite | ^5.x | 构建工具（快速HMR/构建） |
| TypeScript | ^5.x | 类型安全 |
| Element Plus | ^2.x | UI组件库 |
| Vue Router | ^4.x | 路由管理 |
| Pinia | ^2.x | 状态管理 |
| Axios | ^1.x | HTTP请求库 |
| SCSS | - | CSS预处理器 |
| postcss-px-to-viewport | - | 移动端px→vw转换 |
| @element-plus/icons-vue | ^2.x | 图标库 |

### 3.2 后端技术栈（二期规划）

| 技术 | 版本 | 用途 |
|------|------|------|
| Java | 17+ | 开发语言 |
| Spring Boot | 3.x | 应用框架 |
| MyBatis-Plus | 3.5+ | ORM框架 |
| MySQL | 8.0+ | 关系型数据库 |
| Spring Security | - | 安全认证（可选） |
| JWT | - | Token认证（可选） |

---

## 四、项目架构设计

### 4.1 目录结构

```
Mechanical-Design-Treasure/
├── plan/                              # 开发计划文档
│   └── development-plan.md            # 本文档
├── frontend/                          # Vue3前端项目
│   ├── public/
│   │   └── favicon.ico
│   ├── src/
│   │   ├── api/                       # API接口层（当前Mock，后期接真实后端）
│   │   │   ├── index.ts               # API统一导出
│   │   │   ├── tool.ts                # 工具相关API
│   │   │   ├── user.ts                # 用户相关API
│   │   │   └── search.ts              # 搜索相关API
│   │   ├── assets/                    # 静态资源
│   │   │   ├── images/                # 图片资源（Banner、图标等）
│   │   │   └── icons/                 # 自定义SVG图标
│   │   ├── components/                # 通用可复用组件
│   │   │   ├── common/                # 通用基础组件
│   │   │   │   ├── AppHeader.vue      # 顶部导航栏
│   │   │   │   ├── BottomTabBar.vue   # 底部TabBar导航
│   │   │   │   ├── SearchBar.vue      # 搜索框组件
│   │   │   │   ├── BannerCarousel.vue # Banner轮播组件
│   │   │   │   ├── ModuleCard.vue     # 模块卡片容器
│   │   │   │   ├── ToolGrid.vue       # 工具网格布局
│   │   │   │   ├── ToolItem.vue       # 单个工具项（图标+名称）
│   │   │   │   └── FloatingButton.vue # 右下角悬浮按钮
│   │   │   └── business/              # 业务组件
│   │   │       ├── GearCalculator.vue # 齿轮计算器
│   │   │       └── MechanicsCalc.vue  # 力学计算器
│   │   ├── composables/               # Vue3组合式函数
│   │   │   ├── useSearch.ts           # 搜索逻辑
│   │   │   ├── useFavorite.ts         # 收藏逻辑
│   │   │   └── useHistory.ts          # 历史记录逻辑
│   │   ├── layouts/                   # 布局组件
│   │   │   └── MainLayout.vue         # 主布局（含Header+内容区+BottomTab）
│   │   ├── mock/                      # Mock数据和模拟服务
│   │   │   ├── modules.ts             # 11个模块的Mock数据
│   │   │   ├── tools.ts               # 各工具详细Mock数据
│   │   │   ├── banners.ts             # Banner数据
│   │   │   └── index.ts               # Mock服务统一入口
│   │   ├── router/                    # 路由配置
│   │   │   └── index.ts               # 路由定义和守卫
│   │   ├── stores/                    # Pinia状态管理
│   │   │   ├── app.ts                 # 应用全局状态
│   │   │   ├── search.ts              # 搜索状态
│   │   │   ├── user.ts                # 用户状态（收藏、历史）
│   │   │   └── tool.ts                # 工具相关状态
│   │   ├── styles/                    # 全局样式
│   │   │   ├── variables.scss         # SCSS变量（颜色、间距等）
│   │   │   ├── mixins.scss            # SCSS mixins
│   │   │   ├── reset.scss             # 样式重置
│   │   │   └── global.scss            # 全局样式入口
│   │   ├── types/                     # TypeScript类型定义
│   │   │   ├── module.ts              # 模块相关类型
│   │   │   ├── tool.ts                # 工具相关类型
│   │   │   ├── user.ts                # 用户相关类型
│   │   │   └── api.ts                 # API响应通用类型
│   │   ├── utils/                     # 工具函数
│   │   │   ├── request.ts             # Axios封装
│   │   │   ├── format.ts              # 格式化函数
│   │   │   └── storage.ts             # 本地存储封装
│   │   ├── views/                     # 页面视图
│   │   │   ├── home/                  # 首页（机械库）
│   │   │   │   └── HomePage.vue
│   │   │   ├── calculator/            # 常用计算页
│   │   │   │   └── CalculatorPage.vue
│   │   │   ├── electrical/            # 电气计算页
│   │   │   │   └── ElectricalPage.vue
│   │   │   ├── profile/               # 我的页面
│   │   │   │   └── ProfilePage.vue
│   │   │   └── tool/                  # 功能详情页
│   │   │       └── ToolDetailPage.vue
│   │   ├── App.vue                    # 根组件
│   │   └── main.ts                    # 入口文件
│   ├── index.html                     # HTML模板
│   ├── package.json                   # 项目依赖
│   ├── tsconfig.json                  # TS配置
│   ├── tsconfig.node.json             # Node TS配置
│   ├── vite.config.ts                 # Vite构建配置
│   └── postcss.config.js              # PostCSS配置
├── backend/                           # Spring Boot后端项目（二期）
│   └── README.md                      # 后端开发说明占位文档
├── .gitignore
└── README.md                          # 项目说明
```

### 4.2 数据流设计

```
用户交互 → View组件触发事件 → Composable/Store处理逻辑 → API/Mock Service获取数据 → View更新渲染
```

**状态管理职责划分**：

| Store | 管理范围 | 数据来源 |
|-------|---------|---------|
| `appStore` | 应用全局状态（当前Tab、分类筛选） | 本地内存 |
| `searchStore` | 搜索关键词、搜索结果 | 前端过滤/Mock |
| `userStore` | 用户信息、收藏列表、使用历史 | LocalStorage/Mock |
| `toolStore` | 当前查看的工具详情 | Mock/API |

### 4.3 路由设计

```typescript
// router/index.ts 核心路由定义
const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', name: 'Home', component: () => import('@/views/home/HomePage.vue') },
      { path: 'calculator', name: 'Calculator', component: () => import('@/views/calculator/CalculatorPage.vue') },
      { path: 'electrical', name: 'Electrical', component: () => import('@/views/electrical/ElectricalPage.vue') },
      { path: 'profile', name: 'Profile', component: () => import('@/views/profile/ProfilePage.vue') },
      { path: 'tool/:moduleId/:toolId', name: 'ToolDetail', component: () => import('@/views/tool/ToolDetailPage.vue') }
    ]
  }
]
```

---

## 五、UI设计规范

### 5.1 设计原则

- **移动端优先**：所有界面以手机屏幕(375px宽度)为基准设计
- **卡片式布局**：功能模块以圆角白色卡片形式呈现
- **简洁专业**：清爽、高效、类似企业级工具小程序质感
- **微交互动效**：点击反馈、过渡动画提升体验感

### 5.2 色彩系统

```
主色调（Primary）：
  - 主色：#409EFF
  - 深色：#337ECC
  - 浅色：#66B1FF
  - 渐变：linear-gradient(135deg, #409EFF, #337ECC)

背景色（Background）：
  - 页面背景：#F5F7FA
  - 卡片背景：#FFFFFF
  - 浅蓝背景：#EBF1FB

文字色（Text）：
  - 主文字：#303133
  - 次要文字：#606266
  - 辅助文字：#909399

功能色（Functional）：
  - 成功：#67C23A
  - 警告：#E6A23C
  - 危险：#F56C6C
  - 信息：#909399
```

### 5.3 字体规范

```
字体族：PingFang SC, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif

字号规范：
  - 大标题（页面标题）：18px / font-weight: 600
  - 小节标题（模块名）：15px / font-weight: 500
  - 正文（工具名称等）：14px / font-weight: 400
  - 辅助文字（提示）：12px / font-weight: 400
```

### 5.4 间距规范

```
页面左右边距：16px
模块卡片内边距：16px
模块之间间距：12px
工具网格列间距：12px
工具网格行间距：16px
```

### 5.5 圆角规范

```
大圆角（卡片、Banner）：12px
中圆角（输入框、按钮）：8px
小圆角（标签、小元素）：4px
全圆角（头像、图标按钮）：50%
```

---

## 六、各页面详细设计

### 6.1 首页（机械库主页）

#### 布局结构（从上到下）

```
┌─────────────────────────────┐
│ [☰] 机械设计宝库    [🔍] [⋮] │ ← Header 导航栏 (56px高,蓝色渐变)
├─────────────────────────────┤
│  计算  │  查询  │  选型      │ ← CategoryTabs 分类标签栏
├─────────────────────────────┤
│ ┌─────────────────────────┐ │
│ │ 🔍 搜索全站功能（如...）│ │ ← SearchBar 搜索框
│ └─────────────────────────┘ │
├─────────────────────────────┤
│ ┌─────────────────────────┐ │
│ │   🧧 开工大吉横幅 🧧   │ │ ← BannerCarousel 轮播
│ └─────────────────────────┘ │
├─────────────────────────────┤
│ 全部功能        点击展开... │
│ │ 综合性工具           更多>│ ← ModuleCard 模块卡片
│ │ [📗]配套  [📐]材料     │ │
├─────────────────────────────┤
│ │ 常用功能             更多>│
│ │ [📐]量角器 [📏]直尺    │ │
│ │ [🔊]分贝测试 [📍]轨迹   │ │
├─────────────────────────────┤
│ ... (共11个模块) ...       │
├─────────────────────────────┤
│                        [📋]│ ← FloatingActionButton
│                             │
│ [🏠首页] [🧮计算] [⚡电气] [👤我的]│ ← BottomTabBar (固定底部)
└─────────────────────────────┘
```

#### 关键组件说明

| 组件 | 功能描述 |
|------|---------|
| `AppHeader` | 蓝色渐变背景，左侧汉堡菜单+居中标题"机械设计宝库"+右侧搜索/更多图标 |
| `CategoryTabs` | 三标签切换（计算\|查询\|选型），选中态蓝色下划线，用于筛选下方模块 |
| `SearchBar` | 白色圆角输入框，placeholder="搜索全站功能（如 螺栓、齿轮、电机..."，带防抖搜索 |
| `BannerCarousel` | Element Plus Carousel，全宽圆角12px卡片，高度约120px，自动轮播 |
| `ModuleCard` | 白色圆角卡片：左侧蓝色竖线 + 模块标题 + "更多>"链接 + 2列N行工具网格 |
| `ToolItem` | 单个工具项：圆形/方形图标底色 + SVG图标 + 名称文字 |
| `FloatingButton` | 右下角固定圆形按钮"原目录本"，z-index高层级 |
| `BottomTabBar` | 固定底部44px高，4个均分Tab（图标+文字），当前页高亮 |

### 6.2 常用计算页

- 复用 MainLayout 布局（Header + 内容区 + BottomTab）
- 内容区展示高频计算工具的网格/列表视图
- 顶部快捷分类标签（齿轮/力学/液压/材料等）
- 支持收藏夹和历史记录快速访问入口

### 6.3 电气计算页

- 复用 MainLayout 布局
- 当前为预留页面，展示"即将上线"或空状态占位
- 可放置基础的电气公式速查等简单功能作为占位内容

### 6.4 我的页面

```
┌─────────────────────────────┐
│         个人中心             │
├─────────────────────────────┤
│        [👤] 用户头像         │
│        未登录 / 昵称         │
├─────────────────────────────┤
│ ⭐ 我的收藏          >  12  │
│ 📋 使用历史          >  28  │
│ ⚙️  设置             >      │
│ ❓ 关于我们          >      │
└─────────────────────────────┘
```

### 6.5 工具详情页（通用模板）

```
┌─────────────────────────────┐
│ [< 返回]  齿轮几何计算        │ ← 顶部返回导航
├─────────────────────────────┤
│ 工具说明文字区域...          │ ← 工具简介
├─────────────────────────────┤
│ ┌───────────────────────┐  │
│ │ 模数(m):    [_______] │  │ ← 参数输入表单
│ │ 齿数(z):    [_______] │  │
│ │ 压力角(α):  [_______] │  │
│ │        [开始计算]      │  │
│ └───────────────────────┘  │
├─────────────────────────────┤
│ ═══ 计算结果 ═══           │ ← 结果展示区
│ 分度圆直径 d = 50.00 mm    │
│ 齿顶圆直径 da = 54.00 mm   │
│ 齿根圆直径 df = 45.00 mm   │
│ ...                         │
├─────────────────────────────┤
│ 🔧 相关工具推荐             │
│ [齿轮动态] [齿轮材料性能]   │
└─────────────────────────────┘
```

---

## 七、核心TypeScript类型定义

### 7.1 模块类型 (`types/module.ts`)

```typescript
/** 功能类别 */
export type ToolCategory = 'calculate' | 'query' | 'select' | 'utility'

/** 模块定义 */
export interface Module {
  id: string                    // 模块ID，如 'M01'
  name: string                  // 模块名称
  icon: string                  // 模块图标
  category: ToolCategory[]      // 所属类别（可跨多个）
  tools: Tool[]                 // 包含的工具列表
  sortIndex: number             // 排序索引
}

/** 工具定义 */
export interface Tool {
  id: string                    // 工具ID
  moduleId: string              // 所属模块ID
  name: string                  // 工具名称
  icon: string                  // 工具图标（SVG/图片路径）
  description?: string          // 工具简述
  category: ToolCategory        // 工具类别
  isPopular?: boolean           // 是否为高频工具
  routePath?: string            // 详情页路由路径
}
```

### 7.2 API类型 (`types/api.ts`)

```typescript
/** 通用API响应结构 */
export interface ApiResponse<T = any> {
  code: number
  message: string
  data: T
}

/** 分页响应 */
export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  total: number
  page: number
  pageSize: number
}
```

---

## 八、Mock数据设计要点

### 8.1 模块数据结构示例

每个模块包含以下完整信息，供前端渲染使用：

```typescript
// mock/modules.ts 中 M03 液压系统 示例
{
  id: 'M03',
  name: '液压系统',
  icon: 'hydraulic',
  category: ['calculate'],
  sortIndex: 3,
  tools: [
    { id: 'T0301', moduleId: 'M03', name: '缸径与推力', icon: 'cylinder-thrust', category: 'calculate' },
    { id: 'T0302', moduleId: 'M03', name: '系统特性曲线公差', icon: 'curve-tolerance', category: 'calculate' },
    { id: 'T0303', moduleId: 'M03', name: '液压常用公式', icon: 'formula', category: 'query' },
    { id: 'T0304', moduleId: 'M03', name: '油缸缸径力', icon: 'cylinder-force', category: 'calculate' }
  ]
}
```

### 8.2 搜索实现策略

- **前端本地搜索**：使用 `computed` + `filter` 对Mock数据进行关键词匹配
- **防抖处理**：300ms debounce，避免频繁过滤
- **匹配字段**：工具名称、模块名称、别名/关键词标签
- **二期升级**：替换为后端全文检索API

---

## 九、开发步骤详解

### 第一步：初始化Vue3前端项目骨架

**目标**：搭建可运行的Vue3 + Vite + TypeScript + Element Plus空白项目

**操作清单**：
1. 使用 `npm create vite@latest frontend -- --template vue-ts` 创建项目
2. 安装依赖：`element-plus`、`vue-router`、`pinia`、`axios`、`sass`、`@element-plus/icons-vue`
3. 配置 `vite.config.ts`：设置路径别名 `@` → `src/`
4. 配置 `tsconfig.json`：添加路径映射
5. 创建基础目录结构（api/components/layouts/mock/router/stores/styles/types/utils/views）
6. 在 `main.ts` 中注册Element Plus、Router、Pinia
7. 配置 `App.vue` 为 `<router-view>` 容器
8. 验证项目能正常启动运行

### 第二步：配置移动端适配方案

**目标**：确保所有页面在手机尺寸下正确显示

**操作清单**：
1. 安装 `postcss-px-to-viewport` 插件
2. 配置 `postcss.config.js`：
   ```js
   module.exports = {
     plugins: [
       ['postcss-px-to-viewport', {
         viewportWidth: 375,
         unitPrecision: 5,
         viewportUnit: 'vw',
         selectorBlackList: ['.el-'],  // 排除Element Plus组件
         minPixelValue: 1
       }]
     ]
   }
   ```
3. 创建 `styles/variables.scss`：定义色彩变量、间距变量、字体变量
4. 创建 `styles/reset.scss`：样式重置
5. 创建 `styles/global.scss`：全局样式（引入reset和variables）
6. 在 `main.ts` 中导入全局样式
7. 设置 `index.html` 的 viewport meta标签
8. 配置Element Plus按需导入（减小包体积）

### 第三步：搭建基础布局组件

**目标**：实现MainLayout、Header、BottomTabBar三大布局组件

**操作清单**：
1. 实现 `AppHeader.vue`：
   - 蓝色渐变背景 `background: linear-gradient(135deg, #409EFF, #337ECC)`
   - 高度56px，flex布局
   - 左侧菜单按钮、居中标题、右侧图标按钮组
   - 固定在顶部 `position: fixed; top: 0`
2. 实现 `BottomTabBar.vue`：
   - 固定底部 `position: fixed; bottom: 0`，高度50px（加安全区域适配）
   - 4个Tab：机械库(首页)/常用计算/电气计算/我的
   - 使用自定义实现或Element Plus Tabbar组件
   - 当前路由对应Tab高亮
   - 图标 + 文字纵向排列
3. 实现 `MainLayout.vue`：
   - 组合Header + 内容插槽(slot) + BottomTabBar
   - 内容区设置 padding-top 和 padding-bottom 避免被遮挡
   - 页面背景色 `#F5F7FA`
4. 配置路由嵌套关系：所有主要页面作为MainLayout的children
5. 实现底部Tab点击路由跳转

### 第四步：实现首页完整功能

**目标**：完成首页所有可见功能和交互

**操作清单**：
1. **HomePage.vue 主页面组装**：
   - 引入并排列 CategoryTabs → SearchBar → BannerCarousel → ModuleList
   - 实现分类筛选逻辑（根据选中Tab过滤显示的模块）
   - 实现搜索逻辑（debounce搜索，高亮匹配结果）
2. **CategoryTabs.vue 分类标签**：
   - 计算/查询/选型三个Tab
   - 选中态样式：蓝色文字+底部蓝色下划线
   - 切换时emit事件给父组件
3. **SearchBar.vue 搜索框**：
   - el-input 组件，round形状，带前缀搜索图标
   - v-model双向绑定
   - emit input事件（父组件做debounce）
4. **BannerCarousel.vue 轮播图**：
   - el-carousel 组件
   - 高度120px，圆角12px
   - Mock 2-3张Banner图数据
   - 自动播放，间隔3秒
5. **ModuleCard.vue 模块卡片**：
   - 白色背景，圆角12px，阴影
   - 左侧3px蓝色竖线装饰
   - 标题行：模块名(左) + "更多>"链接(右)
   - 工具网格区域：2列网格布局
   - 接收props传入module数据
6. **ToolItem.vue 工具项**：
   - 图标圆形/方形背景 + 居中图标 + 下方名称
   - 点击跳转到 `/tool/:moduleId/:toolId`
   - hover/active按压效果
7. **ModuleList 模块列表**：
   - 循环渲染11个ModuleCard
   - 根据 category 过滤显示
   - 根据 searchKeyword 搜索过滤
8. **FloatingButton.vue 悬浮按钮**：
   - 右下角固定位置
   - "原目录本"文字，圆形按钮
   - z-index高于其他元素
9. **完善Mock数据**：
   - 编写完整的11个模块数据（modules.ts）
   - 每个模块下的工具项完整信息（tools.ts）
   - Banner数据（banners.ts）

### 第五步：实现三个子页面

**目标**：完成常用计算页、电气计算页、我的页面

**操作清单**：
1. **CalculatorPage.vue（常用计算页）**：
   - 复用MainLayout布局
   - 从所有工具中筛选 `category === 'calculate'` 和 `isPopular === true` 的工具
   - 网格/列表展示
   - 顶部快捷分类子标签
   - 空状态处理
2. **ElectricalPage.vue（电气计算页）**：
   - 复用MainLayout布局
   - 当前为预留页面，展示"即将上线"占位
   - 或放入少量基础电气公式作为演示
3. **ProfilePage.vue（我的页面）**：
   - 未登录状态：显示登录引导
   - 已登录状态：头像+昵称
   - 功能入口列表：收藏夹、使用历史、设置、关于
   - 使用 el-cell-group 或自定义列表样式

### 第六步：实现工具详情页

**目标**：实现通用详情模板 + 至少2个核心计算工具的实际计算逻辑

**操作清单**：
1. **ToolDetailPage.vue（通用模板）**：
   - 顶部返回导航栏（非TabBar模式，需要独立header）
   - 通过 `route.params` 获取 moduleId 和 toolId
   - 从mock数据加载对应工具信息
   - 动态渲染不同类型的工具界面（通过tool.type区分）
2. **GearCalculator.vue（齿轮几何计算）**：
   - 输入参数表单：模数m、齿数z、压力角α、齿顶高系数ha*、顶隙系数c*、变位系数x
   - 计算公式实现：分度圆直径d、齿顶圆直径da、齿根圆直径df、基圆直径db、齿距p、齿厚s等
   - 结果展示区域
   - 公式参考说明
3. **MechanicsCalc.vue（力学计算 - 以梁挠度为例）**：
   - 输入参数：载荷类型选择、载荷大小、梁长度、截面属性(EI)
   - 计算梁的最大挠度和转角
   - 结果可视化展示
4. **通用计算器模板**：
   - 抽取可复用的计算器布局：参数输入区→计算按钮→结果展示区
   - 其他工具可以复用此模板结构

### 第七步：完善Mock数据层和Pinia状态管理

**目标**：建立完善的Mock服务体系和状态管理

**操作清单**：
1. **Mock Service 层统一封装**：
   - `mock/index.ts` 统一导出
   - 提供模拟异步接口（setTimeout包裹Promise）
   - 结构与未来真实API保持一致
2. **API层对接**：
   - `api/tool.ts`: getToolList、getToolDetail、getToolsByModule
   - `api/search.ts`: searchTools
   - `api/user.ts`: getFavorites、addToFavorites、getHistory
   - 当前调用Mock Service，后期替换为Axios请求
3. **Store完善**：
   - `searchStore`: keyword、results、isSearching
   - `userStore`: favorites列表、history列表、持久化到localStorage
   - `appStore`: currentTab、filterCategory
4. **收藏功能**：
   - 工具详情页可收藏/取消收藏
   - 收藏列表在"我的"页面展示
   - localStorage持久化
5. **历史记录**：
   - 每次访问工具详情自动记录
   - 最近访问时间排序
   - 在"我的"页面和首页展示
6. **request.ts Axios封装**：
   - 拦截器（请求/响应）
   - 错误统一处理
   - token携带（预留给二期）

### 第八步：创建后端占位文档

**目标**：为二期Spring Boot开发预留清晰的接口规范

**操作清单**：
1. 创建 `backend/README.md`，内容包括：
   - 后端技术栈确认（Spring Boot 3 + MyBatis-Plus + MySQL）
   - 数据库ER设计草图（模块表、工具表、用户表、收藏表、历史表）
   - RESTful API接口规范（URL设计、请求/响应格式、错误码定义）
   - 与前端的数据对接说明
   - 后续开发的建议步骤

---

## 十、数据库设计（后端预留）

### 10.1 核心表结构

```sql
-- 模块表
CREATE TABLE module (
  id VARCHAR(10) PRIMARY KEY,          -- M01, M02...
  name VARCHAR(50) NOT NULL,
  icon VARCHAR(100),
  sort_index INT DEFAULT 0,
  created_at DATETIME DEFAULT NOW()
);

-- 工具表
CREATE TABLE tool (
  id VARCHAR(20) PRIMARY KEY,          -- T0101, T0201...
  module_id VARCHAR(10) NOT NULL,
  name VARCHAR(100) NOT NULL,
  icon VARCHAR(100),
  description TEXT,
  category ENUM('calculate','query','select','utility'),
  is_popular BOOLEAN DEFAULT FALSE,
  content_json TEXT,                   -- 工具配置（计算参数/查询数据JSON）
  created_at DATETIME DEFAULT NOW(),
  FOREIGN KEY (module_id) REFERENCES module(id)
);

-- 用户表
CREATE TABLE user (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50) UNIQUE,
  nickname VARCHAR(50),
  avatar_url VARCHAR(255),
  created_at DATETIME DEFAULT NOW()
);

-- 收藏表
CREATE TABLE favorite (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  user_id BIGINT NOT NULL,
  tool_id VARCHAR(20) NOT NULL,
  created_at DATETIME DEFAULT NOW(),
  FOREIGN KEY (user_id) REFERENCES user(id),
  FOREIGN KEY (tool_id) REFERENCES tool(id)
);

-- 使用历史表
CREATE TABLE usage_history (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  user_id BIGINT,
  tool_id VARCHAR(20) NOT NULL,
  visited_at DATETIME DEFAULT NOW(),
  FOREIGN KEY (user_id) REFERENCES user(id),
  FOREIGN KEY (tool_id) REFERENCES tool(id)
);
```

### 10.2 API接口规范（预留）

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/api/modules` | 获取所有模块列表 |
| GET | `/api/modules/:id/tools` | 获取指定模块下的工具列表 |
| GET | `/api/tools/:id` | 获取工具详情 |
| GET | `/api/search?q=keyword` | 搜索工具 |
| GET | `/api/user/favorites` | 获取用户收藏列表 |
| POST | `/api/user/favorites` | 添加收藏 |
| DELETE | `/api/user/favorites/:toolId` | 取消收藏 |
| GET | `/api/user/history` | 获取使用历史 |

---

## 十一、注意事项与最佳实践

1. **Element Plus 移动端适配**：Element Plus 默认面向PC设计，移动端需额外缩小间距、字号、增大触摸区域（最小44px触摸区）
2. **底部安全区适配**：iPhone X系列需考虑底部home indicator安全区域，使用 `env(safe-area-inset-bottom)`
3. **搜索性能**：11个模块总工具量约40-50个，前端全量过滤即可；若后期工具量大则需后端搜索
4. **路由懒加载**：所有页面组件使用动态import实现懒加载，减少首屏体积
5. **keep-alive缓存**：首页和常用计算页使用 `<keep-alive>` 缓存，避免重复渲染和丢失滚动位置
6. **图标方案**：推荐使用 Element Plus Icons + 自定义SVG Icon，避免大量图片资源
7. **Mock到API的平滑过渡**：API层抽象好接口类型，从Mock切换到真实后端只需修改service实现
8. **Vite开发服务器代理**：配置 `server.proxy` 解决前后端联调时的跨域问题
9. **代码规范**：使用ESLint + Prettier保证代码风格一致
10. **Git提交规范**：建议使用 Conventional Commits 规范（feat/fix/docs/refactor/chore等）

---

## 十二、附录

### A. 推荐VSCode插件

- Vue Language Features (Volar)
- TypeScript Vue Plugin (Volar)
- ESLint
- Prettier

### B. 参考命令

```bash
# 创建前端项目
npm create vite@latest frontend -- --template vue-ts

# 安装依赖
cd frontend
npm install element-plus vue-router pinia axios sass @element-plus/icons-vue
npm install -D postcss-px-to-viewport unplugin-vue-components unplugin-auto-import

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

### C. 关键文件检查清单

- [ ] `vite.config.ts` - 路径别名配置
- [ ] `postcss.config.js` - 移动端适配配置
- [ ] `src/styles/variables.scss` - 设计令牌变量
- [ ] `src/router/index.ts` - 路由定义完整
- [ ] `src/mock/modules.ts` - 11个模块数据完整
- [ ] `src/stores/*.ts` - Pinia Store齐全
- [ ] `src/api/*.ts` - API层封装完成
- [ ] `frontend/package.json` - 依赖版本锁定

---

> **文档版本**：v1.0  
> **最后更新**：2026-05-06  
> **适用阶段**：前端开发一期 + 后端预留规划
