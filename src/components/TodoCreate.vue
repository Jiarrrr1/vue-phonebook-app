<script setup>
const props = defineProps(['tasks']);

import { reactive } from 'vue';

const emit = defineEmits(['createTask', 'showStatus'])

const list = reactive({
  id: Math.floor(Math.random() * 1000000),
  name: '',
  isCompleted: false,
})

const createTask = () => {
  if (list.name !== '') {
    const listOfTask = {
    id: list.id,
    name: list.name,
    isCompleted: list.isCompleted,
  }
  emit('createTask', listOfTask)
  list.name = '';
  list.id = Math.floor(Math.random() * 1000000);
  status(listOfTask)
  }
};

const status = (list) => {
  emit('showStatus', list)
};
</script>
<template>
  <div class="p-3 px-5 font-semibold text-slate-100">
    <p>{{ `Number of Tasks: ${props.tasks.length}` }}</p>
  </div>

  <div class="py-2 flex gap-24 
  max-lg:gap-5 
  max-lg:flex-col 
  max-lg:items-center
  max-md:gap-3">
    <input v-model="list.name" type="text" @keyup.enter="createTask" class="w-4/6 ml-6 p-2 rounded-xl outline-none 
    max-lg:w-96 
    max-lg:ml-0 
    max-lg:mx-10
    max-lg:mr-0 
    max-md:w-72
    max-md:p-1 
    max-sm:w-60">
    <button @click="createTask"
      class="p-3.5 px-6 text-center bg-green-600 text-gray-100 font-semibold rounded-xl 
      max-lg:mr-0
      min-xl:mr-16 
      max-2xl:mr-16 ">Add</button>
  </div>

</template>