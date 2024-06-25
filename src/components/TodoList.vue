<script setup>
import TodoItemComponent from './TodoItem.vue';
import { ref, computed, reactive } from 'vue';

const emit = defineEmits(['removeTask', 'showStatus', 'showTask', 'showUpdateInput', 'createTask'])
const props = defineProps(['tasks']);

const checkTask = () => {
  emit('showTask')
};

const status = (payload) => {
  emit('showStatus', payload)
}

const removeTodo = (payload) => {
  emit('removeTask', payload)
}

const editTask = (payload) => {
  emit('updateTask', payload)
}

const checkTaskName = (payload, isCompleted) => {
  emit('showUpdateInput', payload, isCompleted)
}

const newTask = (payload, id) => {
  emit('createTask', payload, id)
}

</script>

<style>
.list-con::-webkit-scrollbar {
  width: 10px;
  /* Width of the scrollbar */
}

.list-con::-webkit-scrollbar-track {
  background: #4338CA;
  /* Color of the track */
}

.list-con::-webkit-scrollbar-thumb {
  background-color: #FFFFFF;
  /* Color of the scrollbar thumb */
  border-radius: 5px;
  border: #6366F1 3px solid;
  /* Rounded corners */
}

.list-con::-webkit-scrollbar-thumb:hover {
  background: #6366F1;
  border: #FFFFFF 2px solid;
  /* Color when hovering */
}
</style>

<template>
  <div class="p-4 pb-0">
    <section>
      <ul v-if="checkTask" class="list-con flex flex-col min-h-96 h-96 max-h-96 overflow-auto gap-2 p-2 ">
        <TodoItemComponent v-for="item in props.tasks" :key="item.tasks" :id="item.id" :name="item.name"
          :isCompleted="item.isCompleted" @removeTask="removeTodo" @showStatus="status" @updateTask="editTask"
          @showUpdateInput="checkTaskName" @createTask="newTask"> </TodoItemComponent>
      </ul>
      <div v-else>
        <p class="text-center text-red-500 font-bold uppercase text-xl tracking-widest">List of Tasks is Empty</p>
      </div>
    </section>
  </div>
</template>
