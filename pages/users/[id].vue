<script setup lang="ts">
const route = useRoute()

console.log(route.params.id)


useHead({
    title: `user - ${route.params.id}`,
})
</script>

<template>
    <div>User ID: {{ $route.params.id }}</div>
</template>
