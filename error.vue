<script setup lang="ts">
// const error = useError()

defineProps({
    error: Error,
})

const action = () => {
    clearError({
        redirect: '/',
    })
}
</script>

<template>
    <h1>Default Error Page</h1>
    <NuxtLayout>
        <p>{{ error }}</p>
    </NuxtLayout>
    <button @click="action">Clear Error</button>
</template>
