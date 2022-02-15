<template>
  <TheLayout>
    <RouterView />
  </TheLayout>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import TheLayout from './components/TheLayout.vue';
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>