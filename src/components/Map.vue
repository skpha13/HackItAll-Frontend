<template>
  <div id="map" style="height: 500px; width: 90%"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import L from 'leaflet';

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

onMounted(() => {
  initializeMap();
  getCurrentPosition();
});
</script>

<style>

#map {
  height: 500px;
  width: 90%;
}
</style>
