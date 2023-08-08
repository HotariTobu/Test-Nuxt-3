<script setup lang="ts">
const { data } = useFetch('/hoge')
</script>

<template>
    <h1>custom end point</h1>
    <p>{{ data }}</p>
</template>
