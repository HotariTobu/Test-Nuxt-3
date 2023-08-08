<script setup lang="ts">
const counter = useState('counter', () => 0)
const stateCounter = useStateCounter()

definePageMeta({
    layout: 'state',
})
</script>

<template>
    <h2>main</h2>
    <button @click="counter++">{{ counter }}</button>
    <button @click="stateCounter++">{{ stateCounter }}</button>
</template>
