<script setup lang="ts">
import RouterView from 'vue-router'
import Head from './views/head.vue'
</script>

<template>
  <div class="app-container">

    <Head />
    <div class="main-container">
      <router-view />
    </div>
  </div>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
}

.app-container {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}

.main-container {
  flex: 1;
  width: 100%;
  height: calc(100vh - 60px);
  margin-top: 60px;
  background-color: transparent;
  position: relative;
  overflow: hidden;
}
</style>
