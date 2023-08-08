<script setup lang="ts">
const action = () => {
    throw createError('エラー発生!!')
}
</script>

<template>
    <h1>エラーハンドラ</h1>
    <button @click="action">エラーを発生させる</button>
</template>
