import { ref, computed } from "vue";

import { task_List } from "../Tasklist";

export const checkTask = computed(() => {
    return task_List.value.length > 0;
  });
export const taskInput = ref('')

export const createTask = () => {
    const taskData = {
      id: Math.floor(Math.random() * 1000000),
      name: taskInput.value,
      isCompleted: false
    };
    task_List.value.push(taskData);
    taskInput.value = '';
    showStatus(taskData);
    console.log(task_List.value);
  };

export const showStatus = (task) => {
    console.log(`Id: ${task.id}, Task: ${task.name}, Completed: ${task.isCompleted}`);
  };
  
 export const deleteTask = (taskId) => {
    task_List.value = task_List.value.filter(task => task.id !== taskId);
    showStatus(task_List);
  };