<script setup lang="ts">
const router = useRouter()
const count = ref(0)

const reload = () => {
  router.go(0)
}
</script>

<template>
  <div>
    <button @click="count++">{{ count }}</button>
    <button @click="reload">Reload</button>
  </div>
</template>
