<script setup>
import AppHeader from "../components/AppHeader.vue";
import { computed } from "vue";
import AppFooter from "../components/AppFooter.vue";
import HomeProducts from "../components/HomeProducts.vue";
import FindUs from "../components/FindUs.vue";
import PromotionalBanner from "../components/PromotionalBanner.vue";
import useProductStore from '../store/product.js';

const productStore = useProductStore();

const slidesArray = computed(() => {
  return productStore.slidesHome.map(slide => {
    return {
      ...slide,
      products: slide.products.map(productId => {
        return productStore.products.find(product => product.id === productId) || {};
      }),
    };
  });
});

const productArray = computed(() => {
  return productStore.productHome.map(slide => {
    return {
      ...slide,
      products: slide.products.map(productId => {
        return productStore.products.find(product => product.id === productId) || {};
      }),
    };
  });
});


</script>

<template>
	<div
		id="container"
		class="relative w-full max-w-full overflow-hidden overflow-x-hidden flex flex-col text-white before:absolute before:inset-0 before:bg-black before:opacity-85 tracking-wide"
		>
		<img
			src="/mpower-sound-bg.webp"
			alt="Background Mpower Sound"
			class="fixed top-0 left-0 w-full h-full object-cover -z-10"
		/>
		<AppHeader class="z-50 px-7 md:px-20 lg:px-32" />

		<main class="z-10 flex flex-col">
			<HomeProducts :slides="slidesArray" :products="productArray"/>
			<PromotionalBanner/>
			<FindUs/>
		</main>

		<AppFooter/>
	</div>
</template>

<style scoped></style>
