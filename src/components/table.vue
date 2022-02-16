<template>
    <el-table :data="list" stripe style="width: 100%">
        <el-table-column v-for="column in columns" :prop="column" :label="column" align="center" />
        <el-table-column label="Avatar" align="center">
            <template #default="scope">
                <avatar :avatarUrl="scope.row.avatar_url" />
            </template>
        </el-table-column>
        <el-table-column label="Detail" align="center">
            <template #default="scope">
                <el-button type="text" size="small" @click="goToDetail(scope.row.login)">Detail</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script lang="ts" setup>
import { router } from 'router';
import { Employee } from 'types';
import Avatar from './avatar.vue';

interface Props {
    list: Employee[];
    columns: string[];
}

const { list, columns } = defineProps<Props>();


const goToDetail = (login: string) => {
    router.push(`/employee-detail/${login}`);
}
</script>