<template>
    <el-table :data="list" stripe style="width: 100%">
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" />
    </el-table>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';

export default defineComponent({
    props: {
        list: {
            type: Array,
            required: true
        },
        properties: {
            type: Array
        }
    },
    setup() {
        const list = ref(0)

        return {
            list
        }
    }
})
</script>