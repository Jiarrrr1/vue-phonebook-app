<template>
  <div class="text-center pt-48">
    <p>Hi I am {{ name + ' ' + 'My age is ' + age }} </p>
    <!-- Dynamic Classes in Vue 3 -->
    <button :class="[disableAdd, maxAge, minAge]" :disabled="limitAge" @click="addAge"
      class="bg-blue-800 p-3 text-gray-50">Add
      Age</button>
    <button :class="[disableMinus, maxAge, minAge]" :disabled="age <= 0" class="bg-red-600 p-3 mx-3 text-gray-50"
      @click="minusAge">Minus
      Age</button>
    <!-- <img :src="imgUrl" alt=""> -->
  </div>
</template>


<!-- Composition Api Format -->
<script setup>
import { computed, ref } from 'vue';

// Text Interpolation
const name = ref('John Lerry Taruc');
const age = ref(5)
const imgUrl = ref('https://resizing.flixster.com/wouDuoTzmfpwzvVDiTldrBHkbTo=/206x305/v2/https://resizing.flixster.com/8PNiwC2bpe9OecfYZSOVkvYC5vk=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2U5NGM0Y2Q1LTAyYTItNGFjNC1hNWZhLWMzYjJjOTdjMTFhOS5qcGc=')

const addAge = () => {
  age.value += 10;
}

const minusAge = () => {
  age.value = age.value - 10;
}

const maxAge = computed(() => {
  if (age.value > 50) {
 return   age.value = 50;
  }
})

const minAge = computed(() => {
  if (age.value < 0) {
 return age.value = 0;
  }
})


const limitAge = computed(() => {
  return age.value >= 50
})

const disableAdd = computed(() => {
  if (age.value >= 50) {
    return 'bg-gray-300'
    age.value = 50
  }
  return ''
})
const disableMinus = computed(() => {
  if (age.value <= 0) {
    return 'bg-gray-300'
  }
  return ''
})





console.log(limitAge.value);



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