<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
import DropdownCarBrand from "@/components/DropdownCarBrand.vue";
import {ref} from "vue";
import {Car} from "@/models/Car";
import {store} from "@/utils/store";

// ============ FETCH ALL BRANDS ============
const brands = ref();
const areCarsLoaded = ref(false)
const carWorker = new Car();
const fetchAllBrands = async () => {
  brands.value = await carWorker.getAllBrands();
  brands.value = brands.value.map(obj => obj.brand);
  areCarsLoaded.value = true;
}

fetchAllBrands();
// ==========================================

const brand = ref("");
const model = ref("");
const models = ref();
const areModelsLoaded = ref(false);
const getCarsFromBrand = async (carBrand: string) => {
  brand.value = carBrand;

  models.value = await carWorker.getAllModelsFromBrand(carBrand);
  models.value = models.value.map(obj => obj.model);

  areModelsLoaded.value = true;
}

const setModel = (carModel: string) => {
  model.value = carModel;
}

const stationWorker = new StationModel();
const submitSearch = async () => {
  store.brand = brand.value;
  store.model = model.value;
  store.isFiltered = true;
  store.stations = await stationWorker.all(`?brand=${store.brand},model=${store.model}`)
}

import 'leaflet/dist/leaflet.css';
import 'vue-map-ui/dist/normalize.css';
import 'vue-map-ui/dist/style.css';
import 'vue-map-ui/dist/theme-all.css';
import {StationModel} from "@/models/Station";
</script>

<template>
  <div class="flex flex-row justify-center items-center
              border border-purple-500 rounded-full p-2 mb-1 z-[100] relative">
    <DropdownCarBrand @has-chosen-brand="brand => getCarsFromBrand(brand)"
                      v-if="areCarsLoaded"
                      :car-brands="brands"
                      button-label="Brands"
                      class="mr-5" />

    <DropdownCarBrand :car-brands="models"
                      v-if="areModelsLoaded || !areModelsLoaded"
                      @has-chosen-brand="car => setModel(car)"
                      button-label="Models"
                      class="mr-5"
    />

    <font-awesome-icon @click="submitSearch"
                       icon="fa-solid fa-magnifying-glass"
                       class="text-xl text-purple-500 hover:bg-purple-100 hover:rounded-lg p-2"
    />
    <RouterLink to="/tags" class="text-xl text-purple-500 hover:bg-purple-100 hover:rounded-lg p-2">
      <font-awesome-icon icon="fa-solid fa-tags" />
    </RouterLink>
  </div>

  <RouterView />
</template>
