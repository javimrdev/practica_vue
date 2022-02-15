<template>
    <el-container class="container">
        <TheHeader />
        <TheMain>
            <slot></slot>
        </TheMain>
    </el-container>
</template>

<script lang="ts" setup>
import TheHeader from "./TheHeader.vue";
import TheMain from './TheMain.vue'
</script>

<style>
.container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
</style>