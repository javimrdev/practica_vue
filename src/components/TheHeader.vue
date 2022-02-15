<template>
    <el-header class="header">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1">
                <router-link to="/">Employee list</router-link>
            </el-menu-item>
            <el-menu-item index="2">Character list</el-menu-item>
        </el-menu>
    </el-header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref('1')
</script>

<style scoped>
.header {
    width: 100vw;
}

a {
    text-decoration: none;
}
</style>