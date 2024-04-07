<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {ref} from "vue";
import Reviews from "@/components/Reviews.vue";
import Reservations from "@/components/Reservations.vue";
import TimeSaved from "@/components/TimeSaved.vue";

const showStats = ref(false);
const textState = ["See stats", "Close stats"];
const statsText = ref(0);
const enableStats = () => {
  showStats.value = !showStats.value;
  statsText.value = (statsText.value + 1) % 2;
}

const showReviews = ref(false);
const showReservations = ref(false);
const showTimeSaved = ref(false);

const enableReviews = () => {
  showReviews.value = !showReviews.value;
  if (showReviews.value) {
    showReservations.value = false;
    showTimeSaved.value = false;
  }
}

const enableReservations = () => {
  showReservations.value = !showReservations.value;
  if (showReservations.value) {
    showReviews.value = false;
    showTimeSaved.value = false;
  }
}

const enableTimeSaved = () => {
  showTimeSaved.value = !showTimeSaved.value;
  if (showTimeSaved.value) {
    showReviews.value = false;
    showReservations.value = false;
  }
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
        <font-awesome-icon icon="fa-solid fa-road" class="text-black "/>
        <div>3460km</div>
      </li>
      <li class="flex flex-col items-center justify-between pr-8">
        <font-awesome-icon icon="fa-solid fa-battery-three-quarters" class="text-lg text-black" />
        <div>16</div>
      </li>
      <li class="flex flex-col items-center justify-around">
        <font-awesome-icon icon="fa-regular fa-clock" class="text-lg text-black"/>
        <div>30h</div>
      </li>
    </ul>
    <div class="p-4 border-t mx-8 mt-2">
      <button @click="enableStats" class="w-1/2 block mx-auto rounded-full bg-purple-500 hover:shadow-lg font-semibold text-white px-6 py-2">
        {{ textState[statsText] }}</button>
    </div>
  </div>

  <div class="text-sm mt-10 font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
    <ul class="flex flex-wrap -mb-px">
      <li @click="enableReviews" v-if="showReviews" class="me-2">
        <a href="#" class="inline-block p-4 text-purple-500 border-b-2 border-purple-500 rounded-t-lg">My Reviews</a>
      </li>
      <li @click="enableReviews" v-else class="me-2">
        <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">My Reviews</a>
      </li>

      <li @click="enableReservations" v-if="showReservations" class="me-2">
        <a href="#" class="inline-block p-4 text-purple-500 border-b-2 border-purple-500 rounded-t-lg">Reservations</a>
      </li>
      <li @click="enableReservations" v-else class="me-2">
        <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Reservations</a>
      </li>

      <li @click="enableTimeSaved" v-if="showTimeSaved" class="me-2">
        <a href="#" class="inline-block p-4 text-purple-500 border-b-2 border-purple-500 rounded-t-lg">Time Saved</a>
      </li>
      <li @click="enableTimeSaved" v-else class="me-2">
        <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Time Saved</a>
      </li>
    </ul>
  </div>

  <div v-if="showReviews" class="mt-8">
    <Reviews />
  </div>

  <div v-if="showReservations" class="mt-8">
    <Reservations />
  </div>

  <div v-if="showTimeSaved">
    <TimeSaved/>
  </div>

</template>