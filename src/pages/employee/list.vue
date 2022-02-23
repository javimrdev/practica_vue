<template>
    <el-form :inline="true" :model="form" class="demo-form-inline">
        <el-form-item label="Company">
            <el-input v-model="form.company" placeholder="Company"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="getList">Search</el-button>
        </el-form-item>
    </el-form>

    <Suspense>
        <template #default>
            <Table :data="data">
                <el-table-column label="Avatar" align="center">
                    <template #default="scope">
                        <el-avatar :size="50" :src="scope.row.avatar_url"></el-avatar>
                    </template>
                </el-table-column>
                <el-table-column label="Detail" align="center">
                    <template #default="scope">
                        <el-button
                            type="text"
                            size="small"
                            @click="goToDetail(scope.row.login)"
                        >Detail</el-button>
                    </template>
                </el-table-column>
            </Table>
        </template>
    </Suspense>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from 'vue';
import { getEmployeesByCompany } from 'services/EmployeeService';
import { router } from 'router';
import Table from 'components/table.vue'
import { useStore } from 'vuex'



interface Form {
    company: string;
}
interface Data {
    columns: string[];
    list: any[];
}

export default defineComponent({
    components: {
        Table
    },
    async setup() {
        const store = useStore();

        const company = computed(() => store.getters['EmployeeModule/company']);
        if (!company.value) store.dispatch('EmployeeModule/SET_COMPANY', 'Lemoncode');

        const form = reactive<Form>({
            company: company.value
        });

        const data: Data = reactive<Data>({
            columns: ['login', 'id']
            , list: []
        });

        data.list = await getEmployeesByCompany.get(form.company);

        const goToDetail = (login: string) => {
            router.push(`/employee-detail/${login}`);
        }

        const getList = async () => {
            data.list = await getEmployeesByCompany.get(form.company);
            store.dispatch('EmployeeModule/SET_COMPANY', form.company);
        }

        return {
            data, form, goToDetail, getList
        }
    }
})
</script>

<style scoped>
</style>