<style>
ul>li {
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1.3rem;
  background-color: #6366F1;

}

li>p {
  min-width: 36rem;
  padding: .5rem;
  color: aliceblue;
  font-weight: 400;
  letter-spacing: .1rem;
}

li>button {
  padding: .8rem;
  margin-left: 1rem;
  background-color: rgb(131, 131, 131);
  color: rgb(211, 211, 211);
  font-weight: 600;
  border-radius: .75rem;
}

li>input {
  transform: scale(1.5);
  border-radius: .75rem;
  outline: none;
  border: none;
}

li>input:checked {
  background-color: green;
}
</style>
<template>
  <div class="w-1/2 mx-auto my-20  bg-indigo-700 rounded-xl overflow-hidden">
    <header class="text-center p-10 text-2xl font-bold tracking-widest bg-indigo-500 text-slate-100">TODO Vue 3</header>
    <header class="text-left pl-6 p-.5 pt-5 text-lg tracking-widest font-semibold text-slate-100">Your Tasks:</header>
    <div class="p-5">
      <section>
        <ul v-if="checkTask" class="flex flex-col min-h-96 h-96 max-h-96 overflow-auto gap-2">
          <li v-for="task in taskList" :key="task.id" class="rounded-xl min-h-24 px-8">
            <input type="checkbox" v-model="task.isCompleted" @change="showStatus">
            <p>{{ task.name }}</p>
            <button :class="[task.isCompleted ? 'bg-red-600' : 'hidden']" @click="deleteTask(task.id)">Delete</button>
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
          <button @click="createTask" class="px-6 bg-green-600 text-gray-100 font-semibold rounded-xl mr-12">Add</button>
        </div>
      </section>
    </div>
  </div>
</template>



<!-- Composition Api Format -->
<script setup>
import { ref, computed } from 'vue';

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