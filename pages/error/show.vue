<script setup lang="ts">
const counter = ref(0)

const inc = () => {
    if (Math.random() < 0.1) {
        throw showError({

        })
    }

    counter.value++
}
</script>

<template>
    <h1>show</h1>
    <button @click="inc">{{ counter }}</button>
</template>
