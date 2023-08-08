<template>
    <!-- http://localhost:3000/about -->
    <!-- <h1>About Page</h1> -->


    <!-- Use layout directory -->
    <!-- NuxtLayout cannot be the root -->
    <div>
        <NuxtLayout>
            <h1>About Page</h1>
        </NuxtLayout>
    </div>
</template>

<script setup>
definePageMeta({
    // Disable layout
    layout: false,

    // Enable layout other than default.vue
    layout: 'custom',
})
</script>
