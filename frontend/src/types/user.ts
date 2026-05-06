/** 用户信息 */
export interface UserInfo {
  id: number
  username: string
  nickname: string
  avatarUrl: string
}

/** 收藏记录 */
export interface FavoriteItem {
  toolId: string
  toolName: string
  moduleId: string
  moduleName: string
  addedAt: number             // 时间戳 ms
}

/** 使用历史记录 */
export interface HistoryItem {
  toolId: string
  toolName: string
  moduleId: string
  moduleName: string
  visitedAt: number           // 时间戳 ms
}
