<script setup lang="ts">
import Battery from '@/components/Battery.vue';
import { defineProps, ref } from 'vue';

const emits = defineEmits<{
  (e: 'clickedStation', id: string): void
}>()

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

const proccessClick = (id: string) => {
  emits('clickedStation', id);
}
</script>

<template>
  <div class="p-2 rounded border-2 flex flex-col justify-center items-center">
    <h2 class="text-center font-semibold text-xl">{{name}}</h2>

    <Battery class="mb-2 p-4"
       @clicked-battery="id => proccessClick(id)"
       v-for="(battery, index) in batteryList"
       :battery="battery"
       :index="index"
     />
  </div>
</template>


