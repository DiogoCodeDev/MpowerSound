<template>
    <div class="relative text-black overflow-hidden mx-auto w-full lg:w-11/12 mb-12 lg:mb-14">
        <div class="w-full lg:w-11/12 mx-auto py-4 lg:mx-12">
            <h2 class="mx-3 lg:mx-0 text-xl lg:text-lg mb-4 lg:mb-2 font-[400]">{{ slide.title }}</h2>
            <p class="mr-1 ml-3 lg:mx-0 lg:text-[0.8rem] hidden font-[400] lg:block">{{ slide.desc }}</p>
            <p class="mr-1 ml-3 lg:mx-0 text-sm lg:hidden">{{ slide.descMobile }}</p>
        </div>
        <div class="w-11/12 mx-auto lg:py-1 text-right lg:mx-11 mb-2 lg:mb-0"> 
            <h2 @click="goToGallery(slide.title)" class="text-[0.93rem] lg:text-[0.75rem] text-black cursor-pointer">
                Ver mais...</h2>
        </div>
        <div ref="carousel" class="flex overflow-x-auto scroll-smooth lg:mx-11">
            <div @click="goToProduct(product)" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="200"
                v-for="(product, index) in slide.products" :key="index"
                class="w-36 h-58 lg:w-48 lg:h-50 bg-white rounded hover:scale-105 duration-200 ease-in-out shadow lg:m-2 lg:mr-0 mb-4 lg:mb-6 m-2 flex-none relative">
                <div v-if="product.oldPricePromotion"
                    class="absolute top-0 right-0 p-1 z-50 bg-red-500 text-white text-[0.7rem] font-semibold rounded-bl-lg">
                    {{ product.oldPricePromotion[0].discountPercentage }} OFF
                </div>

                <div class="flex items-center h-20 justify-center pt-4">
                    <img :class="product.size" class="cursor-pointer" :src="getImagePath(product.img)"
                        :alt="product.alt" />
                </div>
                <div v-bind:title="product.oldPricePromotion && product.name.length > 12 ? product.name : ''"
                    class="w-full flex items-center justify-center pt-5">
                    <h2 class="font-semibold text-[0.8rem] mb-2 lg:mb-1 px-4 text-left">{{ product.oldPricePromotion ?
                        limitNameProduct(product.name) : product.name }}</h2>
                </div>
                <div class="w-full flex items-start justify-start">
                    <h3 v-if="product.oldPricePromotion"
                        class="font-semibold text-[0.88rem] lg:text-[0.845rem] line-through px-4 text-left text-neutral-500">
                        R$
                        {{ product.oldPricePromotion[0].price }}</h3>
                </div>
                <div class="w-full flex items-start justify-start -mt-1">
                    <h3 v-if="product.saleCfg"
                        :class="product.oldPricePromotion ? 'lg:text-[0.98rem] text-[1.13rem]' : 'text-[1.15rem] lg:text-[1.08rem] -pt-1'"
                        class="font-semibold px-4 mb-2 lg:mb-0 text-left text-black">R$ {{ product.saleCfg[0].price }}
                        <span class="text-[0.65rem] lg:text-[0.6rem] hidden lg:block font-[500] -mt-0.5">No PIX!</span>
                    </h3>
                </div>
                <div class="w-full flex items-start justify-start lg:ml-2 ml-1 -mt-1.5">
                    <!-- <h4 class="font-[600] px-2 text-left text-black text-[0.67rem] lg:text-[0.55rem] mt-2">Em até
                        <span class="font-semibold">{{ product.saleCfg[0].installmentMax }}</span> de <span
                            class="font-semibold">{{ product.saleCfg[0].installmentPrice }}</span> sem juros!
                    </h4> -->
                    <h4 class="font-[600] px-2 text-left text-black text-[0.67rem] lg:text-[0.55rem] mt-2">15% de desconto na retirada.
                    </h4>
                </div>
            </div>
        </div>
        <button
            class="absolute hidden lg:flex left-1 top-3/5 transform -translate-y-1/2 bg-black hover:bg-neutral-900 cursor-pointer w-8 items-center justify-center h-8 text-white p-2 rounded-full"
            @click="scrollLeft">
            <img class="h-3 rotate-180 drop-shadow cursor-pointer" src="../assets/img/icons/white-arrow-right.webp"
                alt="Seta carrosel esquerda" />
        </button>
        <button
            class="absolute hidden lg:flex right-1 top-3/5 transform -translate-y-1/2 bg-black hover:bg-neutral-900 cursor-pointer w-8 items-center justify-center h-8 text-white p-2 rounded-full"
            @click="scrollRight">
            <img class="h-3 drop-shadow cursor-pointer" src="../assets/img/icons/white-arrow-right.webp"
                alt="Seta carrosel direita" />
        </button>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const carousel = ref(null);

defineProps({
    slide: {
        type: [Array, Object],
        required: true
    }
});

const getScrollAmount = () => {
    if (window.innerWidth <= 768) {
        return 160;
    }
    return 275;
};

const goToGallery = (filter) => {
    if(filter == "Selecionados para você!")
        filter = "Produtos"
    router.push({ path: '/product-gallery', query: { search: filter } });
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

        if (carousel.value.scrollLeft <= 0) {
            carousel.value.scrollLeft = carousel.value.scrollWidth - carousel.value.clientWidth;
        }
    }
};

const scrollRight = () => {
    if (carousel.value) {
        const scrollAmount = getScrollAmount();
        carousel.value.scrollBy({ left: scrollAmount, behavior: 'smooth' });

        if (carousel.value.scrollLeft + carousel.value.clientWidth >= carousel.value.scrollWidth - 1) {
            setTimeout(() => { carousel.value.scrollLeft = 0; }, 300);
        }
    }
};

let autoScrollInterval;

const goToProduct = (product) => {
    router.push(`/product/${product.id}`);
};

onMounted(() => {
    autoScrollInterval = setInterval(() => {
        if (carousel.value) {
            const currentScroll = carousel.value.scrollLeft + carousel.value.clientWidth;
            const maxScroll = carousel.value.scrollWidth;

            if (currentScroll >= maxScroll - 1) {
                setTimeout(() => { carousel.value.scrollLeft = 0; }, 300);
            } else {
                scrollRight();
            }
        }
    }, 3500);

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
