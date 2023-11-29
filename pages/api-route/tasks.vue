<script setup lang="ts">
import Task from './task';

const { data: tasks } = useFetch<Task[]>('/api/task')
console.log(tasks)
</script>

<template>
    <h1>Tasks</h1>
    <ul>
        <li v-for="task in tasks" key="task.id">{{ task.task }}</li>
    </ul>
</template>
