<script setup lang="ts">
import { defineProps, defineEmits} from 'vue';
import Button from '@/components/Button.vue';
import { type IBatteryInitial } from '@/models/Battery.js'
import GetBatteryState from '@/utils/GetBatteryState.js'
import GetPercent from '@/utils/GetPercent.ts'

const props = defineProps<{
  battery: IBatteryInitial
}>();

const emits = defineEmits<{
  (e: 'clicked-battery', id: string): void
}>();

const handleBookClick = () => {
  emits('clicked-battery', props.battery.model.id);
}
</script>

<template>
  <div class="max-w-sm overflow-hidden shadow-lg rounded-md p-2 cursor-pointer min-w-64">
    <div>
      <div class="text-lg font-bold">
        <span>Model: {{ props.battery.model.name }}</span>
      </div>
      <div class="text-neutral-500 mb-2">
        <span> Capacity: {{ props.battery.capacity }} kWh</span>
      </div>
      <div class="text-neutral-500 mb-2">
        <span>Status: {{ GetBatteryState(props.battery.state) }}</span>
      </div>
      <div class="mb-2">
        <div class="bg-gray-200 rounded-full">
          <div class="bg-green-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" :style="{ width: `${GetPercent(battery.maxCapacity, battery.capacity)}%` }"> {{GetPercent(battery.maxCapacity, battery.capacity)}}%</div>
        </div>
      </div>
    </div>
    <div>
      <Button class="w-full" @clickedButton="handleBookClick">Book</Button>
    </div>
  </div>
</template>
