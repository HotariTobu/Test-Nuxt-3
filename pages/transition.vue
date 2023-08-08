<script setup lang="ts">
definePageMeta({
    pageTransition: {
        name: 'page',
        mode: 'out-in',
    },
})
</script>

<template>
    <h1>PAGE</h1>
</template>

<style scoped>
/* Page Transition Style */
.page-enter-active,
.page-leave-active {
  transition: all 4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
