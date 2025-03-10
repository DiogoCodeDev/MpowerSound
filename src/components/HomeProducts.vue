<script setup>
import InfiniteCarousel from "../components/InfiniteCarousel.vue";
</script>
<template>
	<div class="w-full bg-neutral-100 text-black">
        <h1 class="text-black font-bold text-center uppercase text-xl py-12"> Produtos em destaque! </h1>
        <InfiniteCarousel data-aos="zoom-in" data-aos-duration="300"/>

        <InfiniteCarousel data-aos="zoom-in" data-aos-duration="300"/>

        <InfiniteCarousel data-aos="zoom-in" data-aos-duration="300"/>
    </div>
</template>

<style scoped></style>
