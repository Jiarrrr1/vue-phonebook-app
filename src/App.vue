<template>
  <div class="w-1/2 mx-auto my-20  bg-indigo-700 rounded-xl overflow-hidden">
    <header class="text-center p-10 text-2xl font-bold tracking-widest bg-indigo-500 text-slate-100">TODO Vue 3</header>
    <header class="text-left pl-6 p-.5 pt-5 text-lg tracking-widest font-semibold text-slate-100">Your Tasks:</header>
    <div class="p-5">
      <section>
        <ul v-if="checkTask" class="flex flex-col min-h-96 h-96 max-h-96 overflow-auto gap-2">
          <li v-for="task in taskList" :key="task.id" class=" p-4 flex items-center gap-4 bg-indigo-500 rounded-xl min-h-24 px-8">
            <input class="accent-green-600 rounded-xl outline-none border-none scale-150" type="checkbox" v-model="task.isCompleted" @change="showStatus">
            <p class="tracking-widest text-slate-100 p-2 w-4/5">{{ task.name }}</p>
            <button :class="[task.isCompleted ? 'bg-red-600' : 'hidden']" @click="deleteTask(task.id)" class=" p-3.5 ml-4 rounded-xl font-semibold text-gray-100 ">Delete</button>
          </li>
        </ul>

        <div v-else>
          <p class="text-center text-red-500 font-bold uppercase text-xl tracking-widest">List of Tasks is Empty</p>
        </div>
        <div class="p-3 px-1 font-semibold text-slate-100">
          <p>{{ `Number of Tasks: ${taskList.length}` }}</p>
        </div>

        <div class="py-4 flex gap-10 justify-between">
          <input v-model="taskInput" type="text" class="w-4/5 p-2 rounded-xl outline-none">
          <button @click="createTask" class="p-3.5 px-6 text-center bg-green-600 text-gray-100 font-semibold rounded-xl mr-12">Add</button>
        </div>
      </section>
    </div>
  </div>
</template>

<!-- Guides -->
<!-- v-for - only use for array -->
 <!-- props only for child component -->

<!-- Composition Api Format -->
<script setup>
import { ref, computed, watch, reactive } from 'vue';

const taskInput = ref('');
const taskList = ref([]);

const checkTask = computed(() => {
  return taskList.value.length > 0;
});

const showStatus = () => {
  taskList.value.forEach(task => {
    console.log(`Task: ${task.name}, Completed: ${task.isCompleted}, Id: ${task.id}`);
  });  
};

const createTask = () => {
  const taskData = {
    id: Math.floor(Math.random() * 1000000),
    name: taskInput.value,
    isCompleted: false
  };
  taskList.value.push(taskData);
  taskInput.value = '';
  showStatus();
};

const deleteTask = (taskId) => {
  taskList.value = taskList.value.filter(task => task.id !== taskId);
  showStatus();
};



</script>



<!-- Options API Format -->
<!-- <script>
export default {

  data() {
    return {
      name: 'John Lerry Taruc',
      age: 30,
    }
  },

}
</script> -->