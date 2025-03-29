<script setup lang="ts">
import { ref } from 'vue'
import { Expand, Fold } from '@element-plus/icons-vue'

const activeIndex = ref('/')
const isCollapse = ref(false)
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>

<template>
    <div class="nav-bar">
        <el-menu class="el-menu-demo" mode="horizontal" :ellipsis="false" router :collapse="isCollapse"
            :default-active="activeIndex">
            <el-menu-item index="/">
                <div class="flex items-center justify-center gap-4">
                    <img class="logo" src="../assets/csu.png" alt="logo">
                    <span style="font-size: 20px; font-weight: bold;">Https-Group</span>
                </div>
            </el-menu-item>
            <el-menu-item index="/workspace">Workspace</el-menu-item>
            <el-menu-item index="/orders">Orders</el-menu-item>
            <el-menu-item index="/ptable">Ptable</el-menu-item>
        </el-menu>
    </div>
</template>

<style scoped>
.nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background-color: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
}

:deep(.el-menu) {
    border-bottom: none !important;
    background-color: transparent !important;
}

:deep(.el-menu-item) {
    color: #ffffff !important;
}

:deep(.el-menu-item.is-active) {
    border-bottom: none !important;
    color: #ffffff !important;
    font-weight: bold;
}

:deep(.el-menu-item:hover) {
    background-color: rgba(255, 255, 255, 0.1) !important;
}

.el-menu-demo {
    &.ep-menu--horizontal>.ep-menu-item:nth-child(1) {
        margin-right: auto;
    }
}

.el-menu--horizontal>.el-menu-item:nth-child(1) {
    margin-right: auto;
}

.theme-menu-item {
    padding: 0 !important;
    height: 60px !important;
    line-height: 60px !important;
    display: flex !important;
    align-items: center !important;
}

.theme-menu-item :deep(.el-menu-item__content) {
    padding: 0 !important;
    height: 100% !important;
    display: flex !important;
    align-items: center !important;
}

.theme-button {
    width: 60px;
    height: 60px;
    cursor: pointer;
    border: none;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
    color: var(--el-text-color-primary);
}

.theme-button:hover {
    background-color: var(--el-menu-hover-bg-color);
}

.theme-icon {
    width: 20px;
    height: 20px;
    transition: all 0.3s ease;
}

.menu-toggle {
    display: none;
}

.el-menu-item {
    display: flex;
    align-items: center;
}

.flex {
    display: flex;
    align-items: center;
    height: 100%;
}

.logo {
    height: 35px;
    width: auto;
    object-fit: contain;
    display: block;
    padding-right: 10px;
}

/* 响应式布局 */
@media screen and (max-width: 768px) {
    :deep(.el-menu) {
        padding: 0 10px;
    }

    :deep(.el-menu-item) {
        padding: 0 10px;
    }

    :deep(.el-sub-menu__title) {
        padding: 0 10px;
    }

    .theme-icon {
        width: 18px;
        height: 18px;
    }

    .menu-toggle {
        display: block;
    }

    :deep(.el-menu--collapse) {
        width: 60px;
    }

    :deep(.el-menu--collapse .el-menu-item),
    :deep(.el-menu--collapse .el-sub-menu__title) {
        padding: 0 20px;
    }

    .logo {
        height: 32px;
    }
}

@media screen and (max-width: 480px) {
    :deep(.el-menu-item) {
        padding: 0 5px;
    }

    :deep(.el-sub-menu__title) {
        padding: 0 5px;
    }

    .theme-icon {
        width: 16px;
        height: 16px;
    }

    .logo {
        height: 28px;
    }
}
</style>