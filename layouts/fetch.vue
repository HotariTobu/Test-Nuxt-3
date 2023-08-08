<template>
    <div>
        <NuxtLink to="/fetch">index</NuxtLink>
        <NuxtLink to="/fetch/use-async-data">useAsyncData</NuxtLink>
        <NuxtLink to="/fetch/use-fetch">useFetch</NuxtLink>
        <NuxtLink to="/fetch/use-lazy-async-data">useLazyAsyncData</NuxtLink>
        <NuxtLink to="/fetch/use-lazy-fetch">useLazyFetch</NuxtLink>
    </div>
    <slot />
</template>

<style scoped>
div {
    display: flex;
    flex-direction: column;
}
</style>
