/** 通用 API 响应结构 */
export interface ApiResponse<T = unknown> {
  code: number                // 0=成功，其他=错误码
  message: string             // 提示消息
  data: T                     // 业务数据
}

/** 分页请求参数 */
export interface PaginationParams {
  page: number
  pageSize: number
}

/** 分页响应 */
export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  total: number
  page: number
  pageSize: number
}

/** 搜索请求参数 */
export interface SearchParams {
  keyword: string
  category?: string           // 可选类别筛选
}
