<script setup lang="ts">
definePageMeta({
    // middleware: 'auth',
    middleware: [
        defineNuxtRouteMiddleware(() => {
            console.log('middle', 1)
        }),
        'auth',
        defineNuxtRouteMiddleware(() => {
            console.log('middle', 2)
        }),
    ],
})
</script>

<template>
    <h1>middleware</h1>
</template>
