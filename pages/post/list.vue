<script setup lang="ts">
definePageMeta({
    layout: 'post',
})

const {data: posts} = await useLazyFetch<[Post]>('https://jsonplaceholder.typicode.com/posts/')
</script>

<template>
    <div>
        <h1>Post List</h1>

        <ul>
            <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
        </ul>
    </div>
</template>
