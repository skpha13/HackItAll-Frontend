<script setup lang="ts">
import { RouterView } from 'vue-router'
import DropdownCarBrand from "@/components/DropdownCarBrand.vue";

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

const getCarsFromBrand = async () => {
  console.log(brandMarcaMasina);
  return brandMarcaMasina;
}


</script>

<template>
  <div class="flex flex-row justify-center items-center
              border border-purple-500 rounded-full p-2">
    <DropdownCarBrand @has-chosen-brand="getCarsFromBrand" :car-brands="marcaMasina" class="mr-10"></DropdownCarBrand>
    <p>Implement Search</p>
  </div>

  <RouterView />
</template>
