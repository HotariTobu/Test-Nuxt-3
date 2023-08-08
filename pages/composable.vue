<script setup lang="ts">
const counter = useCounter(100);
</script>

<template>
    <div>
        <p>{{ counter.count }}</p>
        <button @click="counter.inc">increment</button>
        <button @click="counter.dec">decrement</button>
    </div>
</template>
