<script setup>
import { reactive, computed } from 'vue';

const props = defineProps(['id', 'name', 'isCompleted']);
const emit = defineEmits(['removeTask', 'showStatus', 'updateTask', 'showUpdateInput', 'createTask']);

const list = reactive({
  name: ''
});

const currentTask = reactive({
  id: props.id,
  name: props.name,
  isCompleted: props.isCompleted,
});


const status = () => {
  emit('showStatus', props);
};

const deleteTask = () => {
  emit('removeTask', props.id);
};

const isEditing = computed(() => !props.name);

const checkTaskName = () => {
  emit('showUpdateInput', props.id, currentTask.isCompleted);
};

const createTask = () => {
  const listOfTask = {
    id: currentTask.id,
    name: list.name,
    isCompleted: currentTask.isCompleted,
  }
  emit('createTask', listOfTask, listOfTask.id)
  list.name = '';
};


</script>



<template>
  <li class="p-4 flex items-center gap-1 bg-indigo-500 rounded-xl min-h-24 px-6 
    max-sm:text-xs">
    <input class="accent-green-600 rounded-xl outline-none border-none scale-150" type="checkbox"
      v-model="currentTask.isCompleted" @change="status()">
    <p v-if="!isEditing" @dblclick="checkTaskName"
      class=" tracking-widest text-slate-100 p-2 w-4/5 capitalize max-w-4/5 overflow-hidden text-ellipsis whitespace-nowrap">
      {{ props.name }}
    </p>
    <input v-else type="text" v-model="list.name"
    placeholder="Enter your updated task"
      class="absolute m-8 bg-transparent border-b-2 p-2 outline-none w-2/6 text-slate-100 tracking-widest overflow-hidden text-ellipsis whitespace-nowrap"
      @blur="createTask">
    <button v-if="currentTask.isCompleted" @click="deleteTask"
      class=" block p-3.5 ml-6 rounded-xl font-semibold text-gray-100 bg-red-600">Delete</button>
  </li>
</template>
