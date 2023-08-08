<script setup lang="ts">
const task = ref('')
const response = useFetch('/api/task')

const { data: tasks } = response
const { refresh } = response

const addTask = async () => {
    console.log(task.value)

    const { data } = await useFetch('/api/task', {
        method: 'post',
        body: {
            task: task.value,
        },
    })

    console.log(data)

    task.value = ''

    refresh()
}
</script>

<template>
    <div>
        <h1>insert</h1>
    </div>

    <ul>
        <li v-for="task in  tasks" :key="task.id">{{ task.task }}</li>
    </ul>

    <form @submit.prevent="addTask">
        <div>
            <input v-model="task">
        </div>
        <div>
            <input type="submit" value="タスクを登録">
        </div>
    </form>
</template>
