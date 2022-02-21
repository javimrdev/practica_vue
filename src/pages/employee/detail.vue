<template>
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

export default defineComponent({
    props: {
        login: String
    },
    components: { Description },
    setup(props) {
        const { login } = props;
        return {
            login
        };
    }
})
</script>