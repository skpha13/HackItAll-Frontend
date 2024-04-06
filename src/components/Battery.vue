<template>
    <div class="max-w-sm rounded overflow-hidden shadow-lg rounded-md p-2 cursor-pointer flex flex-row justify-between items-center">
      <div>
        <div class="">
            <span>Model: {{ model }}</span>
        </div>
        <div class="">
            <span> Capacity: {{ capacity }} kWh</span>
        </div>
        <div class="">
            <div class="bg-gray-200 rounded-full dark:bg-gray-700">
                <div class="bg-green-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" :style="{ width: `${procent}%` }"> {{procent}}%</div>
            </div>
        </div>
        <div class="">
            <span>Status: {{ status }}</span>
        </div>
      </div>
      <div>
        <Button class="w-20">Book</Button>
      </div>
    </div>
</template>

<script setup>
import {ref, defineProps} from 'vue';
import Button from '@/components/Button.vue';
const props = defineProps({
  model: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  procent: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  index: {
    type: Number,
    default: 0,
  },
});
const procent = 30;
const model = "Lithium-Ion";
const capacity = 45;
const status = "Charging";
</script>
