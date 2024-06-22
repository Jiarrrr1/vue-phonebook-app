<script setup>
import TodoItemComponent from './TodoItem.vue';
const props = defineProps(['tasks']);

import { ref, computed, reactive } from 'vue';

const checkTask = computed(() => {
    return props.tasks.length > 0;
  });
const taskInput = ref('')

const emit = defineEmits(['createTask'])

const list = reactive({
  id: Math.floor(Math.random() * 1000000),
  name:'',
  isCompleted: false,
})

const createTask = () => {
    const listOfTask = {
    id: list.id,
    name:list.name,
    isCompleted:list.isCompleted,
  }
  emit('createTask', listOfTask)
    list.name = '';
    list.id = Math.floor(Math.random() * 1000000);
    showStatus(listOfTask)
  };

 const showStatus = (task) => {
    console.log(`Id: ${task.id}, Task: ${task.name}, Completed: ${task.isCompleted}`);
  };

  
const deleteTask = (taskId) => {
    props.tasks.value = props.tasks.value.filter(task => task.id !== taskId);
    showStatus(task_List);
  };
  

</script>

<template>
    <div class="p-5">
        <section>
            <ul v-if="checkTask" class="flex flex-col min-h-96 h-96 max-h-96 overflow-auto gap-2">
                <TodoItemComponent v-for="item in props.tasks" 
                    :key="item.tasks"
                    :id="item.id"
                    :name="item.name"
                    :isCompleted="item.isCompleted"> </TodoItemComponent>
            </ul>
            <div v-else>
                <p class="text-center text-red-500 font-bold uppercase text-xl tracking-widest">List of Tasks is Empty</p>
            </div>
            <div class="p-3 px-1 font-semibold text-slate-100">
                <p>{{ `Number of Tasks: ${props.tasks.length}` }}</p>
            </div>

            <div class="py-4 flex gap-10 justify-between">
                <input v-model="list.name" type="text" class="w-4/5 p-2 rounded-xl outline-none">
                <button 
                    @click="createTask"
                    class="p-3.5 px-6 text-center bg-green-600 text-gray-100 font-semibold rounded-xl mr-12">Add</button>
            </div>
        </section>
    </div>
</template>
