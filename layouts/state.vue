<template>
    <div>
        <NuxtLink to="/state">index</NuxtLink>
        <NuxtLink to="/state/main">main</NuxtLink>
        <NuxtLink to="/state/sub">sub</NuxtLink>
    </div>
    <slot />
</template>

<style scoped>
div {
    display: flex;
    flex-direction: column;
}
</style>
