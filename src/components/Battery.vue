<template>
    <div class="max-w-sm rounded overflow-hidden shadow-lg rounded-md p-2 cursor-pointer flex flex-row justify-between items-center">
      <div>
        <div class="">
            <span>Model: {{ battery.model }}</span>
        </div>
        <div class="">
            <span> Capacity: {{ battery.capacity }} kWh</span>
        </div>
        <div class="">
            <div class="bg-gray-200 rounded-full dark:bg-gray-700">
                <div class="bg-green-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" :style="{ width: `${battery.procent}%` }"> {{battery.procent}}%</div>
            </div>
        </div>
        <div class="">
            <span>Status: {{ battery.status }}</span>
        </div>
      </div>
      <div>
        <Button class="w-20">Book</Button>
      </div>
    </div>
</template>

<script setup>
import { defineProps} from 'vue';
import Button from '@/components/Button.vue';

const props = defineProps({
    battery: {
        type: Object,
        required: true,
    },
    index: {
        type: Number,
        required: true,
  },
});
console.log(props.battery);
</script>
