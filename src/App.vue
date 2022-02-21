<template>
  <TheLayout>
    <Suspense>
      <RouterView />
    </Suspense>
  </TheLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import TheLayout from './components/TheLayout.vue';


export default defineComponent({
  components: {
    TheLayout,
    RouterView
  }
})
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>