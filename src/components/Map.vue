<template>
  <div id="map" class="w-full h-96 md:h-screen" ></div>
</template>

<script setup>
import {ref, onMounted, watch} from 'vue';
import L, {map} from 'leaflet';
import {store} from "@/utils/store.ts";

const defaultCoords = [44.4268, 26.1025];
const defaultZoom = 5.5;
const initialZoom = 8;
const mapRef = ref(null);

const initializeMap = () => {
  const map = L.map("map").setView(defaultCoords, defaultZoom);
  mapRef.value = map;

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 19
  }).addTo(map);
};
const getCurrentPosition = async () => {
  if (navigator.geolocation) {
    try {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const coords = [latitude, longitude];
        console.log('Received current position:', coords);

        const map = mapRef.value;
        map.setView(coords, initialZoom, { animate: true })
        L.marker(coords).addTo(map).bindPopup('Your Location').openPopup();
      });
    } catch (error) {
      console.error('Error getting current location:', error.message);
    }
  } else {
    console.error('Geolocation is not supported by this browser.');
  }
};

watch(store, (newValue) => {
  if (newValue) {
    const map = mapRef.value;

    store.stations.forEach(station => {
      var latitude = station.coordinateX;
      var longitude = station.coordinateY;
      L.marker([latitude, longitude]).addTo(map);
    })
  }
});

onMounted(() => {
  initializeMap();
  getCurrentPosition();
});
</script>
