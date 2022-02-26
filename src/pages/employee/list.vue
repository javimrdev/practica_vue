<template>
  <Suspense>
    <template #default>
      <EmployeeListComponent />
    </template>
    <template #fallback><span>loading</span></template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EmployeeListComponent from "components/employee-list.vue";

export default defineComponent({
  name: "ListComponent",
  components: {
    EmployeeListComponent,
  },
});
</script>

<style scoped>
</style>