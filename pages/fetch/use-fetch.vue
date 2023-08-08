<script setup lang="ts">
const response = await useFetch<[Post]>('https://jsonplaceholder.typicode.com/posts/')

// "Error: (404 Not Found (https://jsonplaceholder.typicode.com/post/))"
// const response = await useFetch('https://jsonplaceholder.typicode.com/post/')

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
        <div>
            <button @click="response.refresh">ref</button>
        </div>
        <ul>
            <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
        </ul>
    </div>
</template>
