<script setup lang="ts">
const response = await useLazyFetch<[Post]>('https://jsonplaceholder.typicode.com/posts/')

console.log(response)

const { data: posts } = response
const { error, pending } = response

definePageMeta({
    layout: 'fetch',
})
</script>

<template>
    <div>
        <h1>posts</h1>
        <p v-if="error">{{ response.error }}</p>
        <p v-if="pending">Loading...</p>
        <div>
            <button @click="response.refresh">ref</button>
        </div>
        <ul>
            <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
        </ul>
    </div>
</template>
