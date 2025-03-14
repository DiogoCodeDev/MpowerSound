<template>
    <div class="relative text-black overflow-hidden mx-auto w-full lg:w-11/12 mb-12 lg:mb-14">
        <div class="w-full lg:w-11/12 mx-auto py-4 lg:mx-12">
            <h2 class="mx-3 lg:mx-0 text-xl lg:text-lg mb-2 font-bold">Amplificador Compacto</h2>
            <p class="mr-1 ml-3 lg:mx-0 text-xs hidden lg:block">Apresentamos a nova linha de equipamentos de som desenvolvida para proporcionar uma experiência sonora imersiva e de alta qualidade. Com tecnologia avançada e design moderno, essa linha é ideal para diversos ambientes, como residências, eventos e espaços profissionais, oferecendo um desempenho excepcional em todas as frequências sonoras.
            </p>
            <p class="mr-1 ml-3 lg:mx-0 text-xs lg:hidden">Apresentamos a nova linha de equipamentos de som desenvolvida para proporcionar uma experiência sonora imersiva e de alta qualidade.</p>
        </div>
        <div class="w-11/12 mx-auto lg:py-1 text-right lg:mx-11 mb-2 lg:mb-0">
            <h2 class="text-[0.8rem] lg:text-[0.7rem] text-black"> Ver mais...</h2>
        </div>
        <div ref="carousel" class="flex overflow-x-auto scroll-smooth lg:mx-11">
            <div data-aos="zoom-in" data-aos-delay="100" data-aos-duration="200" v-for="(product, index) in duplicatedProducts" :key="index"
                class="w-36 h-56 lg:w-48 lg:h-48 bg-white rounded hover:scale-105 duration-200 ease-in-out shadow lg:m-2 mb-4 lg:mb-6 m-2 flex-none relative">
                <div v-if="product.promotion"
                    class="absolute top-0 right-0 p-1 z-50 bg-red-500 text-white text-[0.7rem] font-semibold rounded-bl-lg">
                    {{ product.promotion[0].discountPercentage }} OFF
                </div>

                <div class="flex items-center h-20 justify-center pt-4">
                    <img :class="product.size" class="drop-shadow cursor-pointer" :src="getImagePath(product.img)"
                        :alt="product.alt" />
                </div>
                <div v-bind:title="product.promotion && product.name.length > 12 ? product.name : ''"
                    class="w-full flex items-center justify-center pt-5">
                    <h4 class="font-semibold text-[0.74rem] mb-2 lg:mb-1 px-4 text-left">{{ product.promotion ?
                        limitNameProduct(product.name) : product.name }}</h4>
                </div>
                <div class="w-full flex items-start justify-start">
                    <h3 v-if="product.promotion"
                        class="font-semibold text-[0.85rem] line-through px-4 text-left text-neutral-500">R$
                        {{ product.promotion[0].price }}</h3>
                </div>
                <div class="w-full flex items-start justify-start -mt-1">
                    <h3 v-if="product.saleCfg"
                        :class="product.promotion ? 'lg:text-[0.9rem] text-[1.03rem]' : 'text-[1.1rem] lg:text-[1.03rem] pt-1'"
                        class="font-semibold px-4 mb-2 lg:mb-0 text-left text-black">R$ {{ product.saleCfg[0].price }}
                        <span class="text-[0.65rem] lg:text-[0.6rem] hidden lg:block font-light -mt-0.5">No PIX!</span>
                    </h3>
                </div>
                <div class="w-full flex items-start justify-start -mt-1.5">
                    <h4 class="font-semibold px-4 text-left text-black text-[0.6rem] lg:text-[0.55rem] mt-2">Em até
                        <bold class="font-bold">{{ product.saleCfg[0].installmentMax }}</bold> de <bold
                            class="font-bold">
                            {{ product.saleCfg[0].installmentPrice }}</bold> sem juros!
                    </h4>
                </div>
            </div>
        </div>
        <button
            class="absolute hidden lg:flex left-1 top-3/5 transform -translate-y-1/2 bg-black hover:bg-neutral-900 cursor-pointer w-8 items-center justify-center h-8 text-white p-2 rounded-full"
            @click="scrollLeft">
            <img class="h-3 rotate-180 drop-shadow cursor-pointer" src="../assets/img/icons/white-arrow-right.webp" alt="Seta carrosel esquerda" />
        </button>
        <button
            class="absolute hidden lg:flex right-1 top-3/5 transform -translate-y-1/2 bg-black hover:bg-neutral-900 cursor-pointer w-8 items-center justify-center h-8 text-white p-2 rounded-full"
            @click="scrollRight">
            <img class="h-3 drop-shadow cursor-pointer" src="../assets/img/icons/white-arrow-right.webp" alt="Seta carrosel direita" />
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

const limitNameProduct = (name) => {
    return name.length > 23 ? name.substring(0, 23) + '..' : name;
}

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