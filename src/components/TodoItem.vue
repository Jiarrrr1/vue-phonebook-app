<script setup>
const props = defineProps(['id', 'name', 'isCompleted',]);
import { reactive } from 'vue';

const list = reactive({
  id: props.id,
  name:props.name,
  isCompleted: props.isCompleted,
})

const status = () => {
  console.log(`Id: ${list.id}, Task: ${list.name}, Completed: ${list.isCompleted}`);
  console.log();
}

const deleteTask = (taskId) => {
  props.tasks.value = props.tasks.value.filter(task => task.id !== taskId);
  showStatus(task_List);
};

</script>

<style>
.item {
  max-width: 48rem;
}
</style>

<template>
    <li class="item p-4 flex items-center gap-4 bg-indigo-500 rounded-xl min-h-24 px-8 blocked">
      <input
        class="accent-green-600 rounded-xl outline-none border-none scale-150"
        type="checkbox"
        v-model="list.isCompleted"
        @change="status()">
      <p class="tracking-widest text-slate-100 p-2 w-4/5 capitalize max-w-4/5 overflow-hidden text-ellipsis whitespace-nowrap ">{{ props.name }}</p>
      <button
        v-if="list.isCompleted"
        @click="deleteTask(list.id)"
        class="p-3.5 ml-6 rounded-xl font-semibold text-gray-100 bg-red-600">Delete</button>
    </li>
  </template>
