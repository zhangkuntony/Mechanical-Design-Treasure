/** 功能类别 */
export type ToolCategory = 'calculate' | 'query' | 'select' | 'utility'

/** 模块定义 */
export interface Module {
  id: string                  // 模块ID，如 'M01'
  name: string                // 模块名称，如 '液压系统'
  icon: string                // 模块图标标识符
  category: ToolCategory[]    // 所属类别（可跨多个）
  tools: Tool[]               // 包含的工具列表
  sortIndex: number           // 排序索引
}

/** 工具定义 */
export interface Tool {
  id: string                  // 工具ID，如 'T0301'
  moduleId: string            // 所属模块ID
  name: string                // 工具名称，如 '缸径与推力'
  icon: string                // 工具图标标识符
  description?: string        // 工具简述
  category: ToolCategory      // 工具类别
  isPopular?: boolean         // 是否为高频工具
}

/** 分类筛选 Tab 选项 */
export interface CategoryTabOption {
  label: string               // 显示文字：计算 / 查询 / 选型
  value: ToolCategory | 'all' // 对应值，'all' 表示全部
}
