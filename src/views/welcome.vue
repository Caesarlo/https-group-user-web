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
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    position: relative;
    padding: 20px;
}

.welcome-title {
    font-size: clamp(32px, 8vw, 100px);
    font-weight: bold;
    text-align: center;
    padding: clamp(10px, 2vw, 20px);
    margin-bottom: clamp(20px, 5vw, 80px);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    width: 90%;
    max-width: 1200px;
    line-height: 1.2;
}

.main-content {
    text-align: center;
    width: 100%;
    padding: 0 clamp(10px, 2vw, 20px);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: clamp(10px, 2vw, 20px);
    flex-wrap: wrap;
}

.main-content .el-button {
    margin: 0;
}

.el-button {
    width: clamp(140px, 30vw, 180px);
    height: clamp(40px, 8vw, 50px);
    font-size: clamp(14px, 3vw, 18px);
    font-weight: bold;
    background-color: rgba(255, 255, 255, 0.3);
    color: #ffffff;
    transition: background-color 0.3s ease;
    white-space: nowrap;
}

.el-button:hover {
    background-color: rgba(255, 255, 255, 0.5);
}

/* 响应式布局 */
@media screen and (max-width: 768px) {
    .welcome-container {
        padding: 15px;
    }

    .main-content {
        flex-direction: column;
    }

    .el-button {
        width: 80%;
        max-width: 200px;
    }
}

@media screen and (max-width: 480px) {
    .welcome-container {
        padding: 10px;
    }

    .el-button {
        width: 90%;
    }
}
</style>