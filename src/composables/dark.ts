import { useDark, useToggle } from '@vueuse/core'

export const isDark = useDark({
    valueDark: 'dark',
    valueLight: 'light',
    storageKey: 'vueuse-color-scheme',
    storage: localStorage,
    attribute: 'data-theme',
    selector: 'html'
})

// 强制设置为 light 模式
isDark.value = false
