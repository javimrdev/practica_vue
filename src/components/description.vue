<template>
    <el-descriptions title="Employee description" direction="vertical" :column="4" border>
        <el-descriptions-item label="Login">{{ employee.login }}</el-descriptions-item>
        <el-descriptions-item label="Id">{{ employee.id }}</el-descriptions-item>
        <el-descriptions-item label="Avatar" :span="2">
            <el-avatar :size="50" :src="employee.avatar_url"></el-avatar>
        </el-descriptions-item>
        <el-descriptions-item label="URL">{{ employee.url }}</el-descriptions-item>
    </el-descriptions>
</template>

<script lang="ts">
import { getEmployeeByLogin } from 'services/EmployeeService';
import { Employee } from 'types';
import { defineComponent, ref, Ref } from 'vue';

export default defineComponent({
    props: {
        login: {
            type: String,
            required: true
        }
    },
    async setup(props) {
        const employee: Ref<Employee> = ref<Employee>(null);
        employee.value = await getEmployeeByLogin.get(props.login);
        return {
            employee
        }
    }
})
</script>