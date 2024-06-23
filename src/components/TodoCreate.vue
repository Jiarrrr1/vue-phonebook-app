<script setup>
const props = defineProps(['tasks']);

import { reactive } from 'vue';

const emit = defineEmits(['createTask'])

const list = reactive({
  id: Math.floor(Math.random() * 1000000),
  name:'',
  isCompleted: false,
})

const createTask = () => {
    const listOfTask = {
    id: list.id,
    name:list.name,
    isCompleted:list.isCompleted,
  }
  emit('createTask', listOfTask)
    list.name = '';
    list.id = Math.floor(Math.random() * 1000000);
    showStatus(listOfTask)
  };

 const showStatus = (task) => {
    console.log(`Id: ${task.id}, Task: ${task.name}, Completed: ${task.isCompleted}`);
  };
</script>
<template>
    <div class="p-3 px-5 font-semibold text-slate-100">
        <p>{{ `Number of Tasks: ${props.tasks.length}` }}</p>
    </div>

    <div class="py-2 flex gap-16 justify-center">
        <input v-model="list.name" type="text" class="w-4/6 ml-6 p-2 rounded-xl outline-none mr-14">
        <button @click="createTask"
            class="p-3.5 px-6 text-center bg-green-600 text-gray-100 font-semibold rounded-xl mr-20">Add</button>
    </div>

</template>