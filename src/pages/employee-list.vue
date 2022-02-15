<template>
    <ul id="example-1">
        <li v-for="employee in list" :key="employee.id">{{ employee.login }}</li>
    </ul>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { Employee } from '../types/Employee';
import { getEmployeesByCompany } from '../services/EmployeeService';

const list = ref<Employee[]>([]);

onMounted(() => {
    getEmployeesByCompany('Lemoncode')
        .then(result => {
            list.value = result;
        })
        .then(() => console.log(list.value))
})
</script>

<style scoped>
</style>