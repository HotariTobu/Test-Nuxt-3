<script setup lang="ts">
const errorHandler = (e: unknown) => {
    console.log(e)
}

onErrorCaptured((err, target, info) => {
    console.log({ err, target, info })
})
</script>

<template>
    <div>
        <h1>error container</h1>

        <NuxtPage />
        <NuxtErrorBoundary @error="errorHandler">
            <NuxtPage />

            <template #error="{ error: e }">
                <p>error!! error!!</p>
                <p>{{ e }}</p>
                <button @click="e.value = null">clear</button>
            </template>
        </NuxtErrorBoundary>
    </div>
</template>
