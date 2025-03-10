<template>
    <div class="relative overflow-hidden mx-auto w-full lg:w-11/12 mb-12 lg:mb-20">
        <div class="w-full lg:w-11/12 mx-auto py-4 lg:mx-12">
            <h2 class="mx-3 lg:mx-0 text-lg mb-2 font-bold">Carrosel x - Lorem ipsun Lorem ipsun</h2>
            <p class="mx-3 lg:mx-0 text-xs">A vida é como uma jornada cheia de descobertas e momentos inesperados. Às vezes, as
                estradas mais sinuosas nos levam a lugares surpreendentes, onde aprendemos mais sobre nós mesmos do que
                jamais imaginamos.
            </p>
        </div>
        <div ref="carousel" class="flex overflow-x-auto scroll-smooth lg:mx-11">
            <div v-for="(product, index) in duplicatedProducts" :key="index"
                class="w-36 h-56 lg:w-48 lg:h-48 bg-white shadow-lg lg:m-2 mb-4 lg:mb-6 m-2 flex-none">
                <p class="text-center font-semibold">{{ product.name }}</p>
            </div>
        </div>
        <button
            class="absolute hidden lg:flex left-1 top-3/5 transform -translate-y-1/2 bg-black hover:bg-neutral-900 cursor-pointer w-8 items-center justify-center h-8 text-white p-2 rounded-full"
            @click="scrollLeft">
            &lt;
        </button>
        <button
            class="absolute hidden lg:flex right-1 top-3/5 transform -translate-y-1/2 bg-black hover:bg-neutral-900 cursor-pointer w-8 items-center justify-center h-8 text-white p-2 rounded-full"
            @click="scrollRight">
            &gt;
        </button>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import useProductStore from '../store/product.js';

const productStore = useProductStore();
const products = ref(productStore.productSection[0].products);

const duplicatedProducts = computed(() => [...products.value, ...products.value, ...products.value]);

const carousel = ref(null);

const getScrollAmount = () => {
    if (window.innerWidth <= 768) {
        return 160;
    }
    return 275;
};

const scrollLeft = () => {
    if (carousel.value) {
        const scrollAmount = getScrollAmount();
        carousel.value.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
};

const scrollRight = () => {
    if (carousel.value) {
        const scrollAmount = getScrollAmount();
        carousel.value.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
};

let autoScrollInterval;

onMounted(() => {
    autoScrollInterval = setInterval(scrollRight, 4000);
});

onUnmounted(() => {
    clearInterval(autoScrollInterval);
});
</script>

<style>
::-webkit-scrollbar {
    display: none;
}
</style>