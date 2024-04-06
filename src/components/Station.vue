<template>
  <div class="p-2 rounded border-2 flex flex-col justify-center items-center">
    <h2 class="text-center font-semibold text-xl">{{name}}</h2>
    <ul class="w-full p-4 min-w-80" v-if="batteryList.length > 0">
      <Battery class="mb-2 p-4 " 
        v-for="(battery, index) in batteryList"
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
</script>


