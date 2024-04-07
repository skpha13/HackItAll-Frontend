<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {ref} from "vue";

const showStats = ref(false);
const textState = ["See stats", "Close stats"];
const statsText = ref(0);
const enableStats = () => {
  showStats.value = !showStats.value;
  statsText.value = (statsText.value + 1) % 2;
}
</script>

<template>
  <div
      class="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-10 bg-white shadow-xl rounded-lg text-gray-900">
    <div class="rounded-t-lg h-32 overflow-hidden">
      <img class="object-cover object-top w-full" src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Mountain'>
    </div>
    <div class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
      <img class="object-cover object-center h-32" src='../assets/user_img.jpg' alt='Woman looking front'>
    </div>
    <div class="text-center mt-2">
      <h2 class="font-semibold">George</h2>
    </div>
    <ul class="py-4 mt-2 text-gray-700 flex items-center justify-around">
      <li class="flex flex-col items-center justify-around">
        <svg class="w-4 fill-current text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path
              d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
        <div>4.7</div>
      </li>
      <li class="flex flex-col items-center justify-between">
        <font-awesome-icon icon="fa-solid fa-battery-three-quarters" class="text-lg text-black" />
        <div>10k</div>
      </li>
      <li class="flex flex-col items-center justify-around">
        <font-awesome-icon icon="fa-regular fa-clock" class="text-lg text-black"/>
        <div>15min</div>
      </li>
    </ul>
    <div class="p-4 border-t mx-8 mt-2">
      <button @click="enableStats" class="w-1/2 block mx-auto rounded-full bg-purple-500 hover:shadow-lg font-semibold text-white px-6 py-2">
        {{ textState[statsText] }}</button>
    </div>
  </div>

  <div v-if="showStats">
    <p>test</p>
  </div>
</template>