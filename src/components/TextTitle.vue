<script setup lang="ts">
const props = defineProps<{
  title: string
}>()
</script>

<template>
  <h1 class="text-4xl text-white text-center font-extrabold mb-6 mt-20">{{ props.title }}</h1>
</template>