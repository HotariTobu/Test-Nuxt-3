<script setup lang="ts">
const { $hello } = useNuxtApp()

const name = ref('Tom')

</script>

<template>
    <div>
        <input v-model="name">
        <p>{{ $hello(name) }}</p>
    </div>
</template>
