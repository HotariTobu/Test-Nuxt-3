<script setup lang="ts">
const counter = ref(0)

const inc = () => {
    if (Math.random() < 0.1) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Bad Request',
            message: 'エラーが出たよ',
        })
    }

    counter.value++
}
</script>

<template>
    <h1>object</h1>
    <button @click="inc">{{ counter }}</button>
</template>
