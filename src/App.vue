<script setup lang="ts">
import { RouterView } from 'vue-router'
import DropdownCarBrand from "@/components/DropdownCarBrand.vue";
import {ref} from "vue";

const marcaMasina = [
    "audi",
    "bmw",
    "renault",
    "dacia"
]

const brandMarcaMasina = [
  "Q4",
  "Etron",
  "TT",
  "RS"
]

const brand = ref("");
const model = ref("");
const getCarsFromBrand = async (carBrand: string) => {
  brand.value = carBrand;
//   TODO: Fetch cars from brand
}

const setModel = (carModel: string) => {
  model.value = carModel;
}

const submitSearch = async () => {
  console.log(brand.value, model.value);
}

</script>

<template>
  <div class="flex flex-row justify-center items-center
              border border-purple-500 rounded-full p-2">
    <DropdownCarBrand @has-chosen-brand="carBrand => getCarsFromBrand(carBrand)"
                      :car-brands="marcaMasina"
                      button-label="Brands"
                      class="mr-5" />

    <DropdownCarBrand :car-brands="brandMarcaMasina"
                      @has-chosen-brand="car => setModel(car)"
                      button-label="Models"
                      class="mr-5"
    />

    <font-awesome-icon @click="submitSearch"
                       icon="fa-solid fa-magnifying-glass"
                       class="text-xl text-purple-500 hover:bg-purple-100 hover:rounded-lg p-2"
    />
  </div>

  <RouterView />
</template>
