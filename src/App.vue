<!-- Composition Api Format -->
<script setup>
import TodoListComponent from "./components/TodoList.vue";
import TodoCreateComponent from "./components/TodoCreate.vue";

import { ref, computed } from "vue";

const task_List = ref([])

const checkTask = computed(() => {
  return task_List.value.length > 0;
});

const newTask = (payload) => {
  task_List.value.push(payload);
}

const removeTodo = (id) => {
  const filteredTodo = task_List.value.filter(t => t.id !== id)
  task_List.value = filteredTodo;
}

const status = (task) => {
  console.log(`Id: ${task.id}, Task: ${task.name}, Completed: ${task.isCompleted}`);
};

const checkTaskName = (id, isCompleted) => {
  
  if (isCompleted !== true) {
    const task = task_List.value.find(task => task.id === id);
    if (task) {
      task.name = '';
    }
  }

  else {
    console.log(`Can't modify task because it is ${isCompleted}`);
  }
};

const updatedTask = (payload) => {
  const index = task_List.value.findIndex(task => task.id === payload.id);
  if (index !== -1) {
    task_List.value[index].name = payload.name;
    console.log(task_List.value)
  }
};





</script>

<template>
  <div class="w-1/2 mx-auto my-20  bg-indigo-700 rounded-xl overflow-hidden pb-3 
  max-lg: text-sm max-md:text-xs" >
    <header class="text-center p-10 text-2xl font-bold tracking-widest bg-indigo-500 text-slate-100">TODO Vue 3</header>
    <header class="text-left pl-6 p-.5 pt-5 text-lg tracking-widest font-semibold text-slate-100">Your Tasks:</header>

    <TodoListComponent :tasks="task_List" @removeTask="removeTodo" @showStatus="status" @showTask="checkTask"
      @showUpdateInput="checkTaskName" @createTask="updatedTask"></TodoListComponent>
    <TodoCreateComponent :tasks="task_List" @createTask="newTask" @showStatus="status"></TodoCreateComponent>

  </div>
</template>

<!-- Guides -->
<!-- v-for - only use for array -->
