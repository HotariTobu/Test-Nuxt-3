<script setup lang="ts">
import Task from './task';

const response = useFetch<Task[]>('/api/task')
const { data: tasks } = response
const { refresh } = response

const deleteTask = async (id: number) => {
    const response = await useFetch('/api/task', {
        method: 'delete',
        body: id.toString(),
    })
    const { data } = response

    console.log(data)

    refresh()
}
</script>

<template>
    <h1>Tasks</h1>
    <ul>
        <li v-for="task in tasks" key="task.id">
            {{ task.task }}
            <button @click="deleteTask(task.id)">[X]</button>
        </li>
    </ul>
</template>
