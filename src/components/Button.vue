<script setup lang="ts">
const emits = defineEmits<{
  (e: 'clickedButton'): void
}>();

const hasBeenCliked = () => {
  console.log("buton");
  emits('clickedButton');
}
</script>

<template>
    <div @click="hasBeenCliked" class="text-white bg-purple-500 border border-transparent shadow-sm rounded hover:bg-purple-600 p-2 text-center">
        <slot></slot>
    </div>
</template>
