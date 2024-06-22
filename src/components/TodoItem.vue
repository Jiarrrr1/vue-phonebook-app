<script setup>
const props = defineProps(['id', 'name', 'isCompleted',]);
import { reactive } from 'vue';

const emit = defineEmits(['showStatus'])

const list = reactive({
  id: props.id,
  name:props.name,
  isCompleted: props.isCompleted,
})

const status = () => {
  console.log(`Id: ${list.id}, Task: ${list.name}, Completed: ${list.isCompleted}`);
  emit('showStatus')
  console.log();
}


</script>

<template>
    <li class="p-4 flex items-center gap-4 bg-indigo-500 rounded-xl min-h-24 px-8">
      <input
        class="accent-green-600 rounded-xl outline-none border-none scale-150"
        type="checkbox"
        v-model="list.isCompleted"
        @change="status(list)">
      <p class="tracking-widest text-slate-100 p-2 w-4/5">{{ props.name }}</p>
      <button
        v-if="list.isCompleted"
        @click="deleteTask"
        class="p-3.5 ml-4 rounded-xl font-semibold text-gray-100 bg-red-600">Delete</button>
    </li>
  </template>
