<script setup>
import TodoItemVue from './TodoItem.vue';
import { checkTask, taskInput, createTask } from '@/helper/helper';
const props = defineProps(['tasks']);
</script>

<template>
    <div class="p-5">
        <section>
            <ul v-if="checkTask" class="flex flex-col min-h-96 h-96 max-h-96 overflow-auto gap-2">
                <TodoItemVue v-for="item in props.tasks" 
                    :key="item.id" 
                    :task="item.name"
                    :isCompleted="item.isCompleted" />
            </ul>
            <div v-else>
                <p class="text-center text-red-500 font-bold uppercase text-xl tracking-widest">List of Tasks is Empty
                </p>
            </div>
            <div class="p-3 px-1 font-semibold text-slate-100">
                <p>{{ `Number of Tasks: ${props.tasks.length}` }}</p>
            </div>

            <div class="py-4 flex gap-10 justify-between">
                <input v-model="taskInput" type="text" class="w-4/5 p-2 rounded-xl outline-none">
                <button 
                    @click="createTask"
                    class="p-3.5 px-6 text-center bg-green-600 text-gray-100 font-semibold rounded-xl mr-12">Add</button>
            </div>
        </section>
    </div>
</template>
