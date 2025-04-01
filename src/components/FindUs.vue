<script setup>
import { onMounted } from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

onMounted(() => {
    const isMobile = window.innerWidth <= 768;

    const map = L.map("map-container", {
        dragging: !isMobile,
        scrollWheelZoom: true,
        touchZoom: true,
        doubleClickZoom: true,
        zoomControl: true,
    }).setView([-22.9520172, -47.0914413], 16);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: 'M Power Sound - Campinas SP',
    }).addTo(map);

    const customIcon = L.icon({
        iconUrl: markerIcon,
        shadowUrl: markerShadow,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    const marker = L.marker([-22.9520172, -47.0914413], { icon: customIcon }).addTo(map)
        .bindPopup(`
            <div style="text-align: center;">
                📍 <strong>Rua Altino Arantes, 717</strong><br>
                Campinas/SP <br>
            </div>
        `);

    map.whenReady(() => {
        marker.openPopup();
    });
});
</script>

<template>
    <div class="w-full bg-white text-black py-12 flex flex-col items-center">
        <h5 class="text-black font-bold text-center uppercase text-xl mb-5 lg:mb-2">
            Como nos encontrar?
        </h5>
        <p class="text-black mx-12 text-center font-[500] text-sm lg:text-xs mb-1">
            Rua Altino Arantes, 717, Jardim das Bandeiras, Campinas/SP, CEP 13051-110
        </p>
        <p class="text-black mx-12 text-center font-[500] text-sm lg:text-[0.69rem] mb-6">
            Horário de funcionamento: Segunda a sexta, das 8h às 18h.
        </p>
        <div data-aos="fade-up" data-aos-delay="200" id="map-container" class="lg:w-full mb-4 w-88 sm:w-96 md:w-8/12 md:max-w-3xl h-[40vh] sm:h-[400px] lg:h-[600px] rounded-lg shadow-lg"></div>
        <a class="w-full flex items-center justify-center" href="https://www.google.com/maps?q=Rua+Altino+Arantes,717,Jardim+das+Bandeiras,Campinas,SP"
            target="_blank">
                <button type="submit"
                class="lg:w-full mb-4 w-88 sm:w-96 md:w-8/12 md:max-w-3xl bg-black font-bold text-white p-3 rounded-md hover:bg-neutral-900 cursor-pointer transition">
                Ir para o <span class="font-bold">MAPS!</span>
            </button>
        </a>
    </div>
</template>

<style scoped></style>
