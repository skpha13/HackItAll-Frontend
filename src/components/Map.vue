<template>
  <div id="map" class="w-full h-96 md:h-screen" ></div>
</template>

<script setup>
import {ref, onMounted, watch} from 'vue';
import L, {map, marker} from 'leaflet';
import {store} from "@/utils/store.ts";
import icon1 from "../assets/location-dot-solid.svg"
import icon2 from "../assets/location-pin-solid.svg"

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

const handleMarkerHover = (event) => {
  const marker = event.target;
  marker.setIcon(highlightedIcon);
}

const handleMarkerHoverEnd = (event) => {
  const marker = event.target;
  marker.setIcon(defaultIcon);
}

const defaultIcon = L.icon({
  iconUrl: icon1,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const highlightedIcon = L.icon({
  iconUrl: icon2,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

watch(store, (newValue) => {
  if (newValue) {
    const map = mapRef.value;

    store.stations.forEach(station => {
      const marker = L.marker([station.coordinateX, station.coordinateY])
                      .bindTooltip(station.address)
                      .openTooltip()
                      .addTo(map)
      marker.setIcon(defaultIcon);
      marker.on('mouseover', handleMarkerHover);
      marker.on('mouseout', handleMarkerHoverEnd);
    })
  }
});

onMounted(() => {
  initializeMap();
  getCurrentPosition();
});
</script>
