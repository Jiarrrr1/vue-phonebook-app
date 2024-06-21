<!-- Composition Api Format -->
<script setup>
import { task_List } from './Tasklist';

import TodoListComponent from './components/TodoList.vue';

</script>

<template>
  <div class="w-1/2 mx-auto my-20  bg-indigo-700 rounded-xl overflow-hidden">
    <header class="text-center p-10 text-2xl font-bold tracking-widest bg-indigo-500 text-slate-100">TODO Vue 3</header>
    <header class="text-left pl-6 p-.5 pt-5 text-lg tracking-widest font-semibold text-slate-100">Your Tasks:</header>
    
    <TodoListComponent :tasks="task_List"/>
    
  </div>
</template>

<!-- Guides -->
<!-- v-for - only use for array -->
 <!-- props only for child component -->
