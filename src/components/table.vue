<template>
    <el-table :data="data.list" stripe style="width: 100%">
        <el-table-column
            v-for="column in data.columns"
            :prop="column"
            :label="column"
            align="center"
        />
        <slot />
    </el-table>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, ref, toRefs } from 'vue';

interface Data {
    columns: string[];
    list: any[];
}

export default defineComponent({
    props: {
        data: { type: Object as PropType<Data> }
    },
    async setup(props) {
        const data: Data = reactive(props.data)
        console.log('data', data)

        return {
            data
        }
    }
})

</script>