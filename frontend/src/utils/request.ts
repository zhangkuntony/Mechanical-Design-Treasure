import axios from 'axios'
import type { ApiResponse } from '@/types/api'
import type { AxiosResponse, InternalAxiosRequestConfig } from 'axios'

const request = axios.create({
  baseURL: '/api',            // 后端接口前缀（后期可改）
  timeout: 10000,             // 10 秒超时
  headers: {
    'Content-Type': 'application/json',
  },
})

// ─── 请求拦截器 ───
request.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 预留：后续可在此处添加 Token
    // const token = localStorage.getItem('token')
    // if (token) config.headers.Authorization = `Bearer ${token}`
    return config
  },
  (error) => Promise.reject(error),
)

// ─── 响应拦截器 ───
request.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse<ApiResponse> | Promise<never> => {
    const res = response.data as ApiResponse<unknown>
    if (res.code !== 0) {
      console.warn(`[API] ${res.message} (code=${res.code})`)
      return Promise.reject(new Error(res.message))
    }
    return { ...response, data: res.data } as AxiosResponse<ApiResponse>
  },
  (error) => {
    console.error('[API] 请求异常:', error)
    return Promise.reject(error)
  },
)

export default request
