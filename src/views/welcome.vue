<script setup lang="ts">
import { ref } from 'vue'

const toHttpGroup = () => {
    window.open('https://www.x-mol.com/groups/huiwang', '_blank')
}
</script>

<template>
    <div class="welcome-container">
        <div class="welcome-title">Welcome Https-Group Database</div>
        <div class="main-content">
            <el-button size="large" round>Get Start</el-button>
            <el-button size="large" @click="toHttpGroup" round>
                To Http-Group
            </el-button>
        </div>
    </div>
</template>

<style scoped>
.welcome-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--el-bg-color);
    color: var(--el-text-color-primary);
    position: relative;
}

.welcome-title {
    font-size: 80px;
    font-weight: bold;
    text-align: center;
    padding: 120px 20px;
}

.main-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 100%;
    padding: 0 20px;
}

.main-content .el-button {
    margin: 0 10px;
}

.el-button {
    width: 180px;
    height: 50px;
    font-size: 18px;
    font-weight: bold;
}

/* 响应式布局 */
@media screen and (max-width: 768px) {
    .welcome-title {
        font-size: 40px;
        padding: 30px 15px;
    }
}

@media screen and (max-width: 480px) {
    .welcome-title {
        font-size: 32px;
        padding: 20px 10px;
    }
}
</style>