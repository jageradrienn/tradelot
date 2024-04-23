<template>

    <component :is="icon" />

</template>

<script setup>
import { defineProps } from 'vue';
import { defineAsyncComponent } from 'vue';

const props = defineProps({
    src: {
        type: String,
        required: true
    },
})

const icon = defineAsyncComponent(() => import(props.src));

</script>
