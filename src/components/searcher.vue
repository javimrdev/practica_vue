<template>
  <el-form :inline="true" :model="form" class="demo-form-inline">
    <el-form-item label="Company">
      <el-input v-model="form.company" placeholder="Company"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        @click="() => context.emit('setValue', form.company)"
        >Search</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from "vue";
import { SearcherForm } from "types";
import { useStore } from "vuex";

export default defineComponent({
  name: "SearcherComponent",
  props: {
    form: {
      type: Object as PropType<SearcherForm>,
      required: true,
    },
  },
  async setup(props, context) {
    const form = reactive(props.form);

    return { form, context };
  },
});
</script>
