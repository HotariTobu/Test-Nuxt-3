<script setup lang="ts">
const { data } = useFetch('/api/hello')
</script>

<template>
    <h1>api index</h1>
    <p>{{ data }}</p>
</template>
