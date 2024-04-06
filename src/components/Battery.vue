<template>
    <div class="rounded overflow-hidden shadow-lg rounded-md p-2 cursor-pointer flex flex-row justify-between items-center">
      <div>
        <div class="text-lg font-medium text-black mb-2">
            <span>Model: {{ battery.model }}</span>
        </div>
        <div class="text-slate-500 mb-2">
            <span> Capacity: {{ battery.capacity }} kWh</span>
        </div>
        <div class="text-slate-500 mb-2">
            <span>Status: {{ battery.status }}</span>
        </div>
        <div class="text-slate-500 mb-2">
            <div class="bg-gray-200 rounded-full dark:bg-gray-700">
                <div class="bg-green-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" :style="{ width: `${battery.procent}%` }"> {{battery.procent}}%</div>
            </div>
        </div>

      </div>
      <div>
        <Button @click="handleBookClick" class="w-20">Book</Button>
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
const emit = defineEmits(['openModal']);
const handleBookClick = () => {
    emit('openModal', props.battery.model);
};
console.log(props.battery);
</script>
