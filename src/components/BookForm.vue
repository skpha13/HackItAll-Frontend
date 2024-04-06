<script setup>
import { ref, defineEmits, defineProps } from 'vue'
import { FormKit } from '@formkit/vue'
import axios from 'axios';
import Button from '../components/Button.vue'
const submitted = ref(false)

const submitHandler = async () => {
//   await axios.post('/api/Battery/update', {
//       id: props.id,
//       state: 2,
//     });
  await new Promise((r) => setTimeout(r, 1000))

  submitted.value = true
}
const emits = defineEmits(['clicked-close']);
const close = () => {
  emits('clicked-close');
}
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});
</script>

<template>
<div v-show="!submitted">
  <FormKit
    type="form"
    id="registration-example"
    :form-class="submitted ? 'hide' : 'show'"
    submit-label="Book"
    @submit="submitHandler"
    :actions="false"
    #default="{ value }"
  >
    <div class="flex justify-between items-center">
        <h1 class="text-2xl font-bold mb-2">Book this battery!</h1>
        <font-awesome-icon :icon="['fas', 'xmark']" class="cursor-pointer text-xl"   @click="close"/>
    </div>
    <p class="text-sm mb-4">
    </p>
    <FormKit
      type="text"
      name="name"
      label="Your name"
      placeholder="Jane Doe"
      validation="required"
    />
    <FormKit
      type="text"
      name="email"
      label="Your email"
      placeholder="jane@example.com"
      validation="required|email"
    />
    <FormKit
    type="datetime-local"
    value="2020-03-13T18:22"
    label="Date and time to book the battery"
    validation="required|date_after"
    validation-visibility="live"
    />
    <FormKit type="submit" label="Book" style="background-color: rgb(168 85 247); color: white; width: fit-content; cursor: pointer;"/>
      

  </FormKit>
</div>
  <div v-if="submitted" class="py-4 px-2">
    <h2 class="text-xl text-green-500 mb-4">Booking successful!</h2>
    <Button @clickedButton="close">Close</Button>
  </div>
</template>