<script setup lang="ts">
definePageMeta({
    layout: false,
})

const enableCustomLayout = () => {
    setPageLayout('custom')
}

const route = useRoute()
const enableCustomLayout2 = () => {
    route.meta.layout = 'custom'
}
</script>

<template>
    <button @click="enableCustomLayout">Update Layout</button>
    <button @click="enableCustomLayout2">Update Layout</button>
</template>
