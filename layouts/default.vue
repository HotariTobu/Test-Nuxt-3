<script lang="ts" setup>
const baseTitle = 'Nuxt 3 basic'

useHead({
  titleTemplate: title => {
    return title ? `${title} - ${baseTitle}` : baseTitle
  },
})
</script>

<template>
  <div>
    <!-- <slot name="header" />
    <nav>ここにナビゲーションバーを入れる</nav> -->

    <!-- <Navbar /> -->
    <NavNavbar />

    <slot />
  </div>
</template>

<style scoped></style>
