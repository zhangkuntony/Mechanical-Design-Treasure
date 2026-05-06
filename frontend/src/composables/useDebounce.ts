import { ref, watch, type Ref } from 'vue'

/**
 * 防抖组合式函数
 * @param value - 响应式源值
 * @param delay - 延迟毫秒数，默认 300
 * @returns 防抖后的响应式值
 *
 * @example
 * const keyword = ref('')
 * const debouncedKeyword = useDebounce(keyword, 300)
 */
export function useDebounce<T>(value: Ref<T>, delay: number = 300): Ref<T> {
  const debouncedValue = ref(value.value) as Ref<T>
  let timer: ReturnType<typeof setTimeout> | null = null

  watch(
    value,
    (newVal) => {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        debouncedValue.value = newVal
      }, delay)
    },
    { immediate: true },
  )

  return debouncedValue
}
