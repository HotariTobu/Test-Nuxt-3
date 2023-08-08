<script lang="ts" setup></script>

<template>
  <!-- http://localhost:3000/ -->
  <div>
    <!-- <template #header>
      ヘッダー
    </template> -->

    <h1>Main Page</h1>
  </div>

  <div>
    <NuxtLayout>
      <template #header>
        ヘッダー
      </template>

      <h1>Main Page</h1>
    </NuxtLayout>
  </div>
</template>

<style scoped>
</style>
