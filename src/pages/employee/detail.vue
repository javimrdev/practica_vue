<template>
    <div v-if="employee == null">
        <div>Loading</div>
    </div>
    <div v-else>
        <Description :employee="employee" :loading="loading" />
    </div>
</template>

<script lang="ts" setup>
import { getEmployeeByLogin } from 'services';
import { Employee } from 'types';
import { onMounted, Ref, ref } from 'vue';
import Description from 'components/description.vue';


interface Props {
    login: string;
}

const { login } = defineProps<Props>();
const employee: Ref<Employee> = ref<Employee>(null);

const getEmployee = async () => {
    employee.value = await getEmployeeByLogin.get(login);
}

onMounted(() => {
    getEmployee();
})
</script>