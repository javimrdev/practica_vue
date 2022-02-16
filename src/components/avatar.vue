<template>
    <el-avatar :size="50" :src="avatarUrl"></el-avatar>
</template>

<script lang="ts" setup>
interface Props {
    avatarUrl: string;
}

const { avatarUrl } = defineProps<Props>();
</script>