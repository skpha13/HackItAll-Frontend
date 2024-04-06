<script setup lang="ts">
import MapComp from '@/components/Map.vue'
import Station from "@/components/Station.vue";
</script>

const stations =

<template>
  <div class="flex flex-col-reverse md:flex-row md:h-full md:max-h-screen ">
    <div class="flex flex-row flex-wrap
                w-full md:w-3/4 md:max-h-fit md:overflow-y-scroll ">
        <Station />
        <Station />
        <Station />
    </div>

    <MapComp class="rounded-lg my-4 z-10"></MapComp>
  </div>
</template>