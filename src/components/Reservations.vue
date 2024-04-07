<script setup lang="ts">
import Battery from "@/components/Battery.vue";

const batteries = {
  "battery0": {
    "model": {
      "name": "Model 1",
      "id": "x"
    },
    "maxCapacity": 1000,
    "capacity": 700,
    "state": 1
  },
  "battery1": {
    "model": {
      "name": "Model 1",
      "id": "x"
    },
    "maxCapacity": 500,
    "capacity": 500,
    "state": 2
  },
  "battery3": {
    "model": {
      "name": "Model 1",
      "id": "x"
    },
    "maxCapacity": 1000,
    "capacity": 700,
    "state": 0
  }
}
</script>

<template>
  <div>
    <div class="flex flex-row justify-start flex-wrap">
      <Battery v-for="(item, index) in batteries"
              :key="index"
              :battery="item"
              class="mb-8 mx-2 max-w-96"/>
    </div>
  </div>
</template>