<script setup lang="ts">
const title = ref('SEO PAGE')
const description = ref('meta for SEO')

useHead({
    title: title,
    meta: [
        {
            name: 'description',
            content: description,
        },
    ],
})
</script>

<template>
    <h1>seo</h1>
    <button @click="title = ''">clear title</button>
    <button @click="description = ''">clear description</button>
</template>
