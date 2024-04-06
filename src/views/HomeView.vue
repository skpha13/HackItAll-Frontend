<script setup lang="ts">
import MapComp from '@/components/Map.vue'
import {ref} from "vue";
import {BatteryModel, type IBatteryInitial} from "@/models/Battery";
import Battery from "@/components/Battery.vue";
import {store} from "@/utils/store";
import Station from "@/components/Station.vue";

// ============= FETCH ALL BATTERIES =============
const batteries = ref<IBatteryInitial>();
const batteryWorker = new BatteryModel();
const areBatteriesLoaded = ref(false);

const fetchInitialBatteries = async () => {
  batteries.value = await batteryWorker.all();
  areBatteriesLoaded.value = true;
}

fetchInitialBatteries()
// ===============================================

const openModal = ref(false);
const idModel = ref("")
const openPopup = async (id: string) => {
  idModel.value = id;
  openModal.value = true;
}
</script>

<template>
  <div class="flex flex-col-reverse md:flex-row md:h-full md:max-h-screen">
    <div v-if="!store.isFiltered"
         class="flex flex-row flex-wrap
         w-full md:w-3/4 md:max-h-fit md:overflow-y-scroll">
        <Battery @clicked-battery="id => openPopup(id)" v-for="battery in batteries" :battery="battery" />
    </div>
    <div v-else class="flex flex-row flex-wrap
                w-full md:w-3/4 md:max-h-fit md:overflow-y-scroll">
        <Station @clicked-station="id => openPopup(id)" v-for="station in store.stations" :battery-list="station.batteries" :name="station.address" />
    </div>
    <MapComp class="rounded-lg my-4 z-10"></MapComp>
  </div>
</template>