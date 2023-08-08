<script lang="ts" setup></script>

<template>
  <div>
    <a href="/">Home2</a>
    <a href="/about">About2</a>

    <hr>

    <!-- Efficient navigation -->
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/about">About</NuxtLink>

    <NuxtLink :to="{ name: 'users-list' }">User List</NuxtLink>

    <NuxtLink to="/transition">TRANSITION</NuxtLink>
  </div>
</template>

<style scoped>
</style>
