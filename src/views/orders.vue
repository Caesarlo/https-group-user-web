<script setup lang="ts">
import { ref } from 'vue'

const title = ref('Orders')
</script>

<template>
  <div class="orders-container">
    <h2 class="orders-title">{{ title }}</h2>
    <div class="orders-content">
      <el-table :data="[]" style="width: 100%">
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" />
        <el-table-column prop="status" label="Status" width="120">
          <template #default="scope">
            <el-tag :type="scope.row.status === 'success' ? 'success' : 'info'">
              {{ scope.row.status }}
            </el-tag>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<style scoped>
.orders-container {
  height: 100%;
  padding: 20px;
}

.orders-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: var(--el-text-color-primary);
}

.orders-content {
  height: calc(100% - 60px);
}
</style> 