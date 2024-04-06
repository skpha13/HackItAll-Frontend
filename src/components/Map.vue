<!-- <script setup>
import { VMap, VMapOsmTileLayer, VMapZoomControl } from 'vue-map-ui';
const tileSource = {
  type: 'XYZ', 
  url: 'https://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', 
};
</script>

<template>
  <VMap style="height: 400px;">
    <VMapTileLayer :source="tileSource" />
    <VMapZoomControl />
  </VMap>
</template> -->
<script setup>
import { VMap, VMapOsmTileLayer, VMapZoomControl } from 'vue-map-ui';
</script>

<template>
  <VMap style="height: 200px;">
    <VMapOsmTileLayer />
    <VMapZoomControl />
  </VMap>
</template>