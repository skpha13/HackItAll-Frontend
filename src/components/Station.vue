<template>
    <ul class="max-w-xs p-8" v-if="batteryList2.length > 0">
      <Battery class="mb-4"
        v-for="(battery, index) in batteryList2"
        :battery="battery"
        :index="index"/>
    </ul>
</template>

<script setup>
import { ref } from 'vue';
import Battery from '@/components/Battery.vue';

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
const batteryList = ref([]);
const fetchBatteryList = async () => {
  try {
    const response = await fetch('YOUR_BACKEND_API_URL_HERE');
    if (!response.ok) {
      throw new Error('Failed to fetch battery list');
    }
    const data = await response.json();
    batteryList.value = data.batteries || [];
  } catch (error) {
    console.error('Error fetching battery list:', error.message);
  }
};
fetchBatteryList();
</script>

<style lang="scss" scoped>

</style>

