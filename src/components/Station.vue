<template>
  <div class="p-2 rounded border-2 flex flex-col justify-center items-center">
    <h2 class="text-center font-semibold text-xl">{{name}}</h2>
    <ul class="w-full p-4 min-w-80" v-if="batteryList2.length > 0">
      <Battery class="mb-2 p-4 " 
        v-for="(battery, index) in batteryList2"
        :battery="battery"
        :index="index"/>
    </ul>
  </div>
</template>

<script setup>
import Battery from '@/components/Battery.vue';
import { defineProps, ref } from 'vue';
const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    batteryList: {
        type: Array,
        required: true,
    },
});
const batteryList2 = ref([
  {
    model: 'Lithium-Ion',
    capacity: 45,
    procent: 30,
    status: 'Charging',
  },
  {
    model: 'Lithium-Ion',
    capacity: 45,
    procent: 50,
    status: 'Charging',
  },
  {
    model: 'Lithium-Ion',
    capacity: 45,
    procent: 90,
    status: 'Charging',
  },
]);
const name = "Station 1";
</script>


