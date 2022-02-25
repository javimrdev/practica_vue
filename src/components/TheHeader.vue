<template>
  <el-header class="header">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
    >
      <el-menu-item index="1">
        <router-link to="/">Employee list</router-link>
      </el-menu-item>
    </el-menu>
  </el-header>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "TheHeaderComponent",
  setup() {
    const activeIndex = ref("1");
    return {
      activeIndex,
    };
  },
});
</script>

<style scoped>
.header {
  width: 100vw;
}

a {
  text-decoration: none;
}
</style>