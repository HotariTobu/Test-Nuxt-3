<script setup lang="ts">
interface User {
    id: number,
    name: string,
}

const {data: users} = await useFetch<[User]>('https://jsonplaceholder.typicode.com/user/')

console.log('process')

if (!users.value) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Page Not Found',
    })
}
</script>

<template>
    <h1>ユーザーリスト</h1>

    <ul>
        <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
</template>
