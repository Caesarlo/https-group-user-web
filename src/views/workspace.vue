<script setup lang="ts">
import { ref } from 'vue'

const title = ref('Workspace')
</script>

<template>
  <div class="workspace-container">
    <h2 class="workspace-title">{{ title }}</h2>
    <div class="workspace-content">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>Workspace Content</span>
          </div>
        </template>
        <div class="card-content">
          This is the workspace content.
        </div>
      </el-card>
    </div>
  </div>
</template>

<style scoped>
.workspace-container {
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: var(--el-bg-color);
}

.workspace-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: var(--el-text-color-primary);
}

.workspace-content {
  height: calc(100% - 60px);
}

.box-card {
  height: 100%;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-content {
  padding: 20px;
  height: calc(100% - 60px);
  overflow-y: auto;
}

@media screen and (max-width: 768px) {
  .workspace-container {
    padding: 15px;
  }

  .workspace-title {
    font-size: 20px;
    margin-bottom: 15px;
  }

  .card-content {
    padding: 15px;
  }
}
</style> 