import { mockModules, getModuleById, getAllTools, getToolById } from './modules'
import { mockBanners } from './banners'
import type { ApiResponse } from '@/types/api'
import type { Module, Tool } from '@/types/module'
import type { Banner } from './banners'

/**
 * 模拟网络延迟（默认 300ms）
 */
function delay(ms = 300): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// ─── 模块相关 API ──────────────────────────────

/** 获取所有模块列表 */
export async function fetchModuleList(): Promise<ApiResponse<Module[]>> {
  await delay()
  return { code: 0, message: 'ok', data: [...mockModules] }
}

/** 获取指定模块下的工具列表 */
export async function fetchToolsByModule(moduleId: string): Promise<ApiResponse<Tool[]>> {
  await delay()
  const module = getModuleById(moduleId)
  return {
    code: 0,
    message: 'ok',
    data: module ? [...module.tools] : [],
  }
}

/** 获取单个工具详情（含所属模块信息） */
export async function fetchToolDetail(toolId: string): Promise<ApiResponse<{ tool: Tool; module: Module } | null>> {
  await delay()
  const result = getToolById(toolId)
  return {
    code: 0,
    message: result ? 'ok' : '未找到该工具',
    data: result ?? null,
  }
}

// ─── 首页相关 API ──────────────────────────────

/** 获取轮播图列表 */
export async function fetchBannerList(): Promise<ApiResponse<Banner[]>> {
  await delay(200)
  return { code: 0, message: 'ok', data: [...mockBanners] }
}

/** 获取全部工具（用于搜索） */
export async function fetchAllTools(): Promise<ApiResponse<Tool[]>> {
  await delay(200)
  return { code: 0, message: 'ok', data: getAllTools() }
}

// ─── 搜索 API ──────────────────────────────────

/** 按关键词搜索工具 */
export async function searchTools(keyword: string): Promise<ApiResponse<Tool[]>> {
  await delay(250)
  if (!keyword.trim()) {
    return { code: 0, message: 'ok', data: getAllTools() }
  }
  const kw = keyword.toLowerCase()
  const results = getAllTools().filter(
    (t) =>
      t.name.toLowerCase().includes(kw) ||
      t.description?.toLowerCase().includes(kw),
  )
  return { code: 0, message: 'ok', data: results }
}
