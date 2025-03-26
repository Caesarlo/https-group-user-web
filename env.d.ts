/// <reference types="vite/client" />

declare module 'vue-router' {
  import type { Router, RouteRecordRaw } from 'vue-router'
  export function createRouter(options: { history: any; routes: RouteRecordRaw[] }): Router
  export function createWebHistory(base?: string): any
  export type { Router, RouteRecordRaw }
}
