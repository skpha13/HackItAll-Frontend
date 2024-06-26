<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import {ref} from "vue";

const props = defineProps<{
  buttonLabel: string,
  carBrands: string[]
}>();

const emit = defineEmits<{
  (e: 'hasChosenBrand', carBrand: string): void
}>();

const selectedItem = ref(props.buttonLabel);
const buttonClicked = (brand: string) => {
  selectedItem.value = brand;
  emit('hasChosenBrand', brand);
}
</script>

<template>
    <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          {{ selectedItem }}
          <ChevronDownIcon class="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </MenuButton>
      </div>

      <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
        <MenuItems class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div class="py-1">
            <MenuItem v-for="brand in props.carBrands"
                      v-slot=" { active }">
              <a @click="buttonClicked(brand)"
                 :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">{{ brand }}</a>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
</template>