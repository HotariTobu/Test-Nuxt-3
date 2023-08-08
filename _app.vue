<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <h1>Hello_World!</h1>

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <!-- Change default layout -->
    <NuxtLayout name="custom">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
