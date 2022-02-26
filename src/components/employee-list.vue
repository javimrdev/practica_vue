<template>
  <SearcherComponent :form="form" @set-value="setValue" />
  <TableComponent :data="data">
    <el-table-column label="Avatar" align="center">
      <template #default="scope">
        <el-avatar :size="50" :src="scope.row.avatar_url"></el-avatar>
      </template>
    </el-table-column>
    <el-table-column label="Detail" align="center">
      <template #default="scope">
        <el-button type="text" size="small" @click="goToDetail(scope.row.login)"
          >Detail</el-button
        >
      </template>
    </el-table-column>
  </TableComponent>
</template>

<script lang="ts">
import { router } from "router";
import { getEmployeesByCompany } from "services/EmployeeService";
import { computed, defineComponent, reactive } from "vue";
import { useStore } from "vuex";
import SearcherComponent from "components/searcher.vue";
import TableComponent from "components/table.vue";
import { SearcherForm } from "types";

interface Data {
  columns: string[];
  list: any[];
}

export default defineComponent({
  name: "EmployeeListComponent",
  components: { TableComponent, SearcherComponent },
  async setup() {
    const store = useStore();
    const company = computed(() => store.getters["EmployeeModule/company"]);
    if (!company.value)
      store.dispatch("EmployeeModule/SET_COMPANY", "Lemoncode");

    const form = reactive<SearcherForm>({
      company: company.value,
    });

    const data: Data = reactive<Data>({
      columns: ["login", "id"],
      list: [],
    });

    const goToDetail = (login: string) => {
      router.push(`/employee-detail/${login}`);
    };

    const getList = async () => {
      data.list = await getEmployeesByCompany.get(form.company);
      store.dispatch("EmployeeModule/SET_COMPANY", form.company);
    };

    const setValue = async (value: string) => {
      store.dispatch("EmployeeModule/SET_COMPANY", value);
      await getList();
    };

    await getList();

    return {
      data,
      goToDetail,
      form,
      setValue,
    };
  },
});
</script>