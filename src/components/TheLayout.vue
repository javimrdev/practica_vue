<template>
  <el-container class="container">
    <TheHeaderComponent />
    <TheMainComponent>
      <slot></slot>
    </TheMainComponent>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import TheHeaderComponent from "components/TheHeader.vue";
import TheMainComponent from "components/TheMain.vue";

export default defineComponent({
  name: "TheLayoutComponent",
  components: {
    TheHeaderComponent,
    TheMainComponent,
  },
});
</script>

<style>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>