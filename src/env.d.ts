/// <reference types="vite/client" />

declare module 'element-plus' {
  import type { Plugin } from 'vue'
  const ElementPlus: Plugin
  export default ElementPlus
}

declare module 'element-plus/dist/locale/zh-cn.js' {
  const locale: any
  export default locale
} 