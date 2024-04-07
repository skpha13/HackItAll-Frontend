<script setup lang="ts">
import Review from "@/components/Review.vue";
import TextTitle from "@/components/TextTitle.vue";

const reviews = {
  "review01": {
    "id": 0,
    "username": "Str. Marasesti",
    "comment": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
    "rating": 4.3
  },
  "review02": {
    "id": 1,
    "username": "Str. Gheorghe Sincai",
    "comment": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni",
    "rating": 4
  },
  "review03": {
    "id": 2,
    "username": "Str. Mihai Eminescu",
    "comment": "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    "rating": 4.7
  },
  "review04": {
    "id": 3,
    "username": "Str. Brancoveanu",
    "comment": "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    "rating": 4.7
  }
}
</script>

<template>
  <div id="google-review">
    <div class="flex flex-row justify-start flex-wrap">
      <Review v-for="(item, index) in reviews"
              :key="index"
              :rating="item['rating']"
              :comment="item['comment']"
              :username="item['username']"
              class="mb-8 mx-2 max-w-96"/>
    </div>
  </div>
</template>