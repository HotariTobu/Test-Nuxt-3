<script setup lang="ts">
const counter = ref(0)

const inc = () => {
    if (Math.random() < 0.1) {
        throw createError('error occurred!')
    }

    if (Math.random() < 0.1) {
        throw new Error('new error occurred!')
    }

    counter.value++
}
</script>

<template>
    <h1>index</h1>
    <button @click="inc">{{ counter }}</button>
    <NuxtLink to="/user-list">User List</NuxtLink>
</template>
