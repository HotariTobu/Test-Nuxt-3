<script setup lang="ts">
const counter = useState<number>('counter')
const stateCounter = useStateCounter()

definePageMeta({
    layout: 'state',
})
</script>

<template>
    <h2>sub</h2>
    <button @click="counter++">{{ counter }}</button>
    <button @click="stateCounter++">{{ stateCounter }}</button>
</template>
