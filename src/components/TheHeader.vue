<template>
    <nav>{{ title }}</nav>
    <button v-on:click="title = 'Otro title'">Cambiar titulo</button>
    <button v-on:click="title = 'Lemoncode'">Reset titulo</button>
</template>

<script setup lang="ts">
import { ref } from "vue";

const title = ref('Lemoncode');


</script>