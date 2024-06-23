<script setup>
import TodoItemComponent from './TodoItem.vue';
import { ref, computed, reactive } from 'vue';

const props = defineProps(['tasks']);

const checkTask = computed(() => {
  return props.tasks.length > 0;

});

</script>

<style>

.list-con::-webkit-scrollbar {
  width: 10px;               /* Width of the scrollbar */
}

.list-con::-webkit-scrollbar-track {
  background: #4338CA;             /* Color of the track */
}

.list-con::-webkit-scrollbar-thumb {
  background-color: #FFFFFF;          /* Color of the scrollbar thumb */
  border-radius: 5px; 
  border: #6366F1 3px solid;           /* Rounded corners */ 
}

.list-con::-webkit-scrollbar-thumb:hover {
  background: #6366F1;    
  border: #FFFFFF 2px solid;             /* Color when hovering */
}
</style>

<template>
  <div class="p-5 pb-0">
    <section>
      <ul v-if="checkTask" class="list-con flex flex-col min-h-96 h-96 max-h-96 overflow-auto gap-2 ">
        <TodoItemComponent v-for="item in props.tasks" :key="item.tasks" :id="item.id" :name="item.name"
          :isCompleted="item.isCompleted"> </TodoItemComponent>
      </ul>
      <div v-else>
        <p class="text-center text-red-500 font-bold uppercase text-xl tracking-widest">List of Tasks is Empty</p>
      </div>
    </section>
  </div>
</template>
