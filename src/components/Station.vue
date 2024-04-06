<template>
  <div class="w-full p-4 rounded-lg border-2 border-gray-300 shadow-md max-w-sm min-w-fit mb-4 ">
  <h2 class="text-lg font-semibold mb-4 text-center">{{ name }}</h2>
  <ul class="w-full space-y-4 min-w-72" v-if="batteryList2.length > 0">
    <Battery
      class="w-full bg-white rounded-lg shadow-md p-4"
      v-for="(battery, index) in batteryList2"
      :key="index"
      :battery="battery"
      @openModal = "openModal"
    />
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
const modalOpen = ref(false);
const openModal = (index) => {
  console.log(index);
  modalOpen.value = true; 
}
const closeModal = () => {
  modalOpen.value = false;
};
</script>


