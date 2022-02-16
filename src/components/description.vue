<template>
    <el-descriptions title="Employee description" direction="vertical" :column="4" border>
        <el-descriptions-item label="Login">{{ employee.login }}</el-descriptions-item>
        <el-descriptions-item label="Id">{{ employee.id }}</el-descriptions-item>
        <el-descriptions-item label="Avatar" :span="2">
            <Avatar :avatarUrl="employee.avatar_url" />
        </el-descriptions-item>
        <el-descriptions-item label="URL">{{ employee.url }}</el-descriptions-item>
    </el-descriptions>
</template>

<script lang="ts" setup>
import { Employee } from 'types';
import Avatar from './avatar.vue';
import { ElLoading } from 'element-plus'
import { watch } from 'vue';

interface Props {
    employee: Employee
}

const { employee } = defineProps<Props>();
const loadingInstance = ElLoading.service({ fullscreen: true })

watch(employee, (employee) => {
    console.log('employee', employee)
    if (employee) loadingInstance.close();
})
</script>