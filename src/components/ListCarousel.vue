<template>
    <div class="relative text-black overflow-hidden mx-auto w-full lg:w-11/12 mb-12 lg:mb-8">
        <div class="w-full lg:w-11/12 mx-auto py-4 lg:mx-12">
            <h2 class="mx-3 lg:mx-0 text-xl lg:text-xl mb-4 lg:mb-2 font-[400]">{{ slide.title }}</h2>
            <p class="mr-1 ml-3 lg:mx-0 lg:text-[0.8rem] hidden font-[400] lg:block">{{ slide.desc }}</p>
            <p class="mr-1 ml-3 lg:mx-0 text-sm lg:hidden">{{ slide.descMobile }}</p>
        </div>
        <div class="w-11/12 mx-auto lg:py-1 text-right lg:mx-11 mb-2 lg:mb-2">
            <h2 @click="goToGallery(slide.title)" class="text-[0.93rem] lg:text-[0.8rem] text-black cursor-pointer">
                Ver mais...</h2>
        </div>
        <div class="w-11/12 mx-auto lg:mx-11 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div @click="goToProduct(product)" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="200"
                v-for="(product, index) in slide.products" :key="index"
                class="w-full flex flex-col lg:flex-row bg-white rounded items-center justify-center shadow mb-2 relative">
                <div v-if="product.oldPricePromotion"
                    class="absolute top-0 right-0 p-2 lg:p-2.5 z-50 bg-red-500 text-white text-[0.85rem] font-semibold rounded-bl-lg">
                    {{ product.oldPricePromotion[0].discountPercentage }} OFF
                </div>

                <div class="flex items-center mt-12 lg:mt-0 justify-center lg:mr-8 xl:mr-12">
                    <img :class="product.size" class="drop-shadow cursor-pointer lg:ml-10 xl:ml-0" :src="getImagePath(product.img)"
                        :alt="product.alt" />
                </div>
                <div class="w-80 ml-4 flex flex-col pt-4">
                    <div v-bind:title="product.oldPricePromotion && product.name.length > 12 ? product.name : ''"
                        class="w-full flex items-start justify-start pt-5">
                        <h3 class="font-bold text-[1.05rem] lg:text-[0.97rem] mb-2 lg:mb-1 px-4 text-left">{{ product.oldPricePromotion ?
                            limitNameProduct(product.name) : product.name }}</h3>
                    </div>
                    <div class="w-full flex items-start justify-start">
                        <h3 v-if="product.oldPricePromotion"
                            class="font-semibold text-[1rem] lg:text-[0.95rem] line-through px-4 text-left text-neutral-500">
                            R$
                            {{ product.oldPricePromotion[0].price }}</h3>
                    </div>
                    <div class="w-full flex items-start justify-start -mt-1">
                        <h3 v-if="product.saleCfg"
                            :class="product.oldPricePromotion ? 'lg:text-[1.22rem] text-[1.5rem]' : 'text-[1.5rem] lg:text-[1.25rem] -pt-1'"
                            class="font-semibold px-4 mb-2 lg:mb-0 text-left text-black">R$ {{ product.saleCfg[0].price }}
                            <span class="text-[0.65rem] lg:text-[0.7rem] hidden lg:block font-[500] -mt-0.5 lg:mb-2">No PIX!</span>
                        </h3>
                    </div>
                    <div class="w-full flex items-start justify-start lg:ml-2 ml-1 -mt-1.5 mb-8 lg:mb-12">
                        <h4 class="font-[600] px-2 text-left text-black text-[0.8rem] ml-1 lg:ml-0 lg:text-[0.75rem] mt-2">Em até
                            <span class="font-semibold">{{ product.saleCfg[0].installmentMax }}</span> de <span
                                class="font-semibold">{{ product.saleCfg[0].installmentPrice }}</span> sem juros!
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

defineProps({
    slide: {
        type: [Array, Object],
        required: true
    }
});

const goToGallery = (filter) => {
    router.push({ path: '/product-gallery', query: { search: filter } });
};

const limitNameProduct = (name) => {
    return name.length > 72 ? name.substring(0, 72) + '..' : name;
}

const getImagePath = (imgPath) => {
    return new URL(imgPath.replace('@/', '/src/'), import.meta.url).href;
};

const goToProduct = (product) => {
    router.push(`/product/${product.id}`);
};
</script>

<style>
::-webkit-scrollbar {
    display: none;
}
</style>
