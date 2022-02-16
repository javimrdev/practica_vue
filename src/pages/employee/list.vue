<template>
    <el-form :inline="true" :model="form" class="demo-form-inline">
        <el-form-item label="Company">
            <el-input v-model="form.company" placeholder="Company"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="getList">Search</el-button>
        </el-form-item>
    </el-form>

    <Table :columns="columns" :list="list" />
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { Employee } from 'types';
import { getEmployeesByCompany } from 'services/EmployeeService';
import Table from 'components/table.vue';

interface Form {
    company: string;
}

const list = ref<Employee[]>([]);
const columns = ref<string[]>(['login', 'id']);
const form = ref<Form>({
    company: 'Lemoncode'
});

const getList = async () => {
    list.value = await getEmployeesByCompany.get(form.value.company);
}

onMounted(() => {
    getList();
})
</script>

<style scoped>
</style>