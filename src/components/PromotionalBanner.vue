<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const items = ref([
    {
        title: 'Caixas Acústicas',
        description: '•&nbsp; A melhor potência para seu som! <br> •&nbsp; Encontre o amplificador ideal para você. <br> •&nbsp; Conheça nossa linha premium.',
        img: '/banner/product-3.webp',
        class: 'h-52 md:h-36 lg:h-48',
    },
    {
        title: 'Amplificadores',
        description: 'Potência, qualidade e som incomparável. <br> Encontre o amplificador perfeito.',
        img: '/banner/product-1.webp',
        class: 'h-52 md:h-36 lg:h-48',
        saleDiscount: 'Até <bold class="font-black text-yellow-500 lg:text-[1.34rem]">70%</bold> de desconto!'
    },
    {
        title: 'Mixer de som',
        description: 'Som de alta fidelidade para sua experiência! <br> Conheça nossa linha premium.',
        img: '/banner/product-2.webp',
        class: 'h-52 md:h-36 lg:h-48',
        saleDiscount: 'Em até <bold class="font-black text-yellow-500 lg:text-[1.34rem]">12x</bold> sem juros!'
    }
]);

const currentIndex = ref(0);
const fadeOut = ref(false);
let interval = null;

let startX = 0;
let endX = 0;

const changeSlide = (direction) => {
    fadeOut.value = true;

    setTimeout(() => {
        if (direction === 'next') {
            currentIndex.value = (currentIndex.value + 1) % items.value.length;
        } else {
            currentIndex.value = (currentIndex.value - 1 + items.value.length) % items.value.length;
        }
        fadeOut.value = false;
    }, 740);
};

const nextSlide = () => changeSlide('next');
const prevSlide = () => changeSlide('prev');

const handleTouchStart = (event) => {
    startX = event.touches[0].clientX;
};

const handleTouchEnd = (event) => {
    endX = event.changedTouches[0].clientX;

    if (startX - endX > 100) {
        nextSlide();
    }

    if (endX - startX > 100) {
        prevSlide();
    }
};

onMounted(() => {
    interval = setInterval(nextSlide, 4000);
});

onUnmounted(() => {
    clearInterval(interval);
});
</script>

<template>
    <div id="container"
        class="relative flex w-full h-[550px] md:h-[320px] lg:h-[450px] max-w-full overflow-hidden text-white tracking-wide before:absolute before:inset-0 items-center before:bg-black before:opacity-30"
        @touchstart="handleTouchStart" @touchend="handleTouchEnd">

        <div class="w-1/12 hidden md:flex items-center justify-center h-full">
            <img data-aos="fade-right" @click="prevSlide" class="h-7 rotate-180 drop-shadow cursor-pointer"
                src="../assets/img/icons/white-arrow-right.webp" alt="Seta esquerda" />
        </div>

        <div class="relative w-full md:w-10/12 overflow-hidden flex items-center justify-center">
            <div class="flex w-full transition-transform duration-300 ease-in-out"
                :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
                <div v-for="(item, index) in items" :key="index"
                    class="w-full flex flex-col md:flex-row flex-shrink-0 justify-center items-center">
                    <div class="w-full md:w-9/12 lg:w-7/12 lg:pl-8 flex flex-col mb-16 md:mb-0 items-center justify-center">
                        <h1 data-aos="fade-down" :class="item.saleDiscount ? 'mb-2' : 'mb-4'" class="w-full text-center md:text-start mx-8 md:mx-0 md:w-10/12 text-[1.85rem] md:text-[2rem] lg:text-[2.6rem] uppercase">{{ item.title }}</h1>
                        <p data-aos="fade-down" :class="item.saleDiscount ? 'mb-8 lg:mb-6' : ''" class="w-full text-center md:text-start mx-8 md:mx-0 md:w-10/12 text-[1rem] md:text-[0.85rem] lg:text-[0.9rem]" v-html="item.description"></p>
                        <p v-if="item.saleDiscount" data-aos="zoom-in" class="w-full text-center md:text-start mx-8 md:mx-0 md:w-10/12 text-[1.59rem] md:text-[0.97rem] lg:text-[1.2rem] font-base" v-html="item.saleDiscount"></p>
                    </div>
                    <div class="w-full md:w-3/12 lg:w-5/12 md:mr-8 lg:mr-0 flex items-center justify-center">
                        <img class="drop-shadow-2xl cursor-pointer transform-gpu transition-opacity duration-500 ease-in-out"
                            :class="[items[currentIndex].class, fadeOut ? 'opacity-0' : 'opacity-100']"
                            :src="items[currentIndex].img"
                            :alt="items[currentIndex].title" />
                    </div>
                </div>
            </div>
        </div>

        <div class="w-1/12 hidden md:flex items-center justify-center h-full">
            <img data-aos="fade-right" @click="nextSlide" class="h-7 drop-shadow cursor-pointer"
                src="../assets/img/icons/white-arrow-right.webp" alt="Seta direita" />
        </div>
    </div>
</template>

<style scoped>
img {
    transition: opacity 0.5s ease-in-out;
}
</style>
