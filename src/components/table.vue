<template>
  <el-table :data="data.list" stripe style="width: 100%">
    <el-table-column
      v-for="column in data.columns"
      :prop="column"
      :label="column"
      v-bind:key="column"
      align="center"
    />
    <slot />
  </el-table>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from "vue";

interface Data {
  columns: string[];
  list: any[];
}

export default defineComponent({
  name: "TableComponent",
  props: {
    data: { type: Object as PropType<Data> },
  },
  async setup(props) {
    const data: Data = reactive(props.data);

    return {
      data,
    };
  },
});
</script>