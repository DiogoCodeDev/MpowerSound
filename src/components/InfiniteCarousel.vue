<template>
    <div class="relative text-black overflow-hidden mx-auto w-full lg:w-11/12 mb-12 lg:mb-16">
        <div class="w-full lg:w-11/12 mx-auto py-4 lg:mx-12">
            <h2 class="mx-3 lg:mx-0 text-lg mb-2 font-bold">Carrosel x - Lorem ipsun Lorem ipsun</h2>
            <p class="mx-3 lg:mx-0 text-xs">A vida é como uma jornada cheia de descobertas e momentos inesperados. Às vezes, as
                estradas mais sinuosas nos levam a lugares surpreendentes, onde aprendemos mais sobre nós mesmos do que
                jamais imaginamos.
            </p>
        </div>
        <div ref="carousel" class="flex overflow-x-auto scroll-smooth lg:mx-11">
            <div v-for="(product, index) in duplicatedProducts" :key="index"
                class="w-36 h-56 lg:w-48 lg:h-48 bg-white rounded hover:scale-105 duration-200 ease-in-out shadow lg:m-2 mb-4 lg:mb-6 m-2 flex-none">
                <div class="flex items-center h-20 justify-center pt-4">
                    <img :class="product.size" class="drop-shadow" :src="getImagePath(product.img)" alt="Produto" />
                </div>
                <div class="w-full flex items-center justify-center pt-5">
                    <h4 class="font-semibold text-[0.74rem] mb-1 px-4 text-left">{{ product.name }}</h4>
                </div>
                <div class="w-full flex items-start justify-start">
                    <h3 v-if="product.promotion" class="font-semibold text-[0.85rem] line-through px-4 text-left text-neutral-500">R$ {{product.promotion[0].price}}</h3>
                </div>
                <div class="w-full flex items-start justify-start -mt-1">
                    <h3 v-if="product.saleCfg" :class="product.promotion ? 'text-[0.9rem]' : 'text-[1.03rem] pt-1'" class="font-semibold px-4 text-left text-black">R$ {{product.saleCfg[0].price}}</h3>
                </div>
                <div class="w-full flex items-start justify-start -mt-1.5">
                    <h4 class="font-semibold px-4 text-left text-black text-[0.55rem] mt-2">Em até <bold class="font-bold">{{product.saleCfg[0].installmentMax}}</bold> de <bold class="font-bold">{{ product.saleCfg[0].installmentPrice }}</bold> sem juros!</h4>
                </div>
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

const getImagePath = (imgPath) => {
  return new URL(imgPath.replace('@/', '/src/'), import.meta.url).href;
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
    autoScrollInterval = setInterval(scrollRight, 5000);
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