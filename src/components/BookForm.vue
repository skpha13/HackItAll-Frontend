<script setup>
import { ref } from 'vue'
const submitted = ref(false)
const submitHandler = async () => {
  await new Promise((r) => setTimeout(r, 1000))
  submitted.value = true
}
</script>

<template>
  <FormKit
    type="form"
    id="registration-example"
    :form-class="submitted ? 'hide' : 'show'"
    submit-label="Book this battery!"
    @submit="submitHandler"
    :actions="false"
    #default="{ value }"
  >
    <h1 class="text-2xl font-bold mb-2">Register!</h1>
    <p class="text-sm mb-4">
        Book this battery by filling in the form below!
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

    <FormKit type="submit" label="Book" />
    <pre wrap>{{ value }}</pre>
  </FormKit>
  <div v-if="submitted">
    <h2 class="text-xl text-green-500">Submission successful!</h2>
  </div>
</template>