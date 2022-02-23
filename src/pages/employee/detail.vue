<template>
    <el-button @click="() => $router.push({ name: 'home' })" type="primary" :icon="ArrowLeft">Volver</el-button>

    <Suspense>
        <template #fallback>
            <div>Loading</div>
        </template>
        <template #default>
            <Description :login="login" />
        </template>
    </Suspense>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Description from 'components/description.vue';
import { ArrowLeft } from '@element-plus/icons-vue'

export default defineComponent({
    props: {
        login: String
    },
    components: { Description },
    setup(props) {
        const { login } = props;

        return {
            login, ArrowLeft
        };
    }
})
</script>