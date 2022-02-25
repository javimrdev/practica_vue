<template>
  <TheLayoutComponent>
    <RouterView />
  </TheLayoutComponent>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import TheLayoutComponent from "./components/TheLayout.vue";

export default defineComponent({
  components: {
    TheLayoutComponent,
    RouterView,
  },
});
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>