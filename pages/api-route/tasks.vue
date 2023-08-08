<script setup lang="ts">
const { data: tasks } = useFetch('/api/task')
console.log(tasks)
</script>

<template>
    <h1>Tasks</h1>
    <ul>
        <li v-for="task in tasks" key="task.id">{{ task.task }}</li>
    </ul>
</template>
