<script setup>
import HeaderProduct from "../components/HeaderProduct.vue";
import AppFooter from "../components/AppFooter.vue";
import InfiniteCarousel from "../components/InfiniteCarousel.vue";
import { useRoute } from "vue-router";
import useProductStore from '../store/product.js';

const route = useRoute();
const productStore = useProductStore();

const productId = parseInt(route.params.id);

const product = productStore.productSection[0].products.find(
    (product) => product.id === productId
);

</script>

<template>
    <div id="container"
        class="relative w-full max-w-full overflow-hidden overflow-x-hidden flex flex-col text-white before:absolute before:inset-0 before:bg-black before:opacity-85">
        <img src="/mpower-sound-bg.webp" alt="Background Mpower Sound"
            class="fixed top-0 left-0 w-full h-full object-cover -z-10" />
        <HeaderProduct class="z-50 px-7 md:px-20 lg:px-32" />

        <div class="z-10 text-black"
            style="background: linear-gradient(to bottom, white, #eeeeee);">
            <div class="lg:flex-row w-full flex flex-col pb-16">
                <div class="w-full lg:w-80 lg:h-80 flex-grow lg:py-20 pb-2 pt-12 flex flex-wrap justify-center">
                    <section v-for="(img, index) in product.imgsProduct" :key="index" class="w-40 h-40 lg:w-56 lg:h-56 xl:w-72 xl:h-72 m-2"
                        style="background: linear-gradient(to bottom, white, #f1f1f1);">
                        <img data-aos="zoom-in" :src="img.img" class="h-full mx-auto" />
                    </section>
                </div>
                <div class="w-full lg:w-1/2 py-8 lg:py-20 lg:px-12 px-6 mr-2">
                    <h1 class="text-black text-[1.72rem] pl-2 pt-2">{{ product.name }}</h1>
                    <p class="text-black text-[1.05rem] pt-2 mb-6">{{ product.description }}</p>
                    <section v-for="(desc, index) in product.topicsDesc" :key="index">
                        <p data-aos="fade-left" class="text-black text-[0.9rem] pt-2 lg:pl-2">
                            <bold class="font-bold text-[1rem]">• {{ desc.title }}:</bold> {{ desc.description }}
                        </p>
                    </section>
                    <section v-if="product.promotion && product.promotion.length > 0">
                        <div class="mt-5">
                            <h1 data-aos="fade-down" class="text-neutral-500 text-[2.22rem] line-through pl-2 mr-3">R$ {{
                                product.saleCfg[0].price }}</h1>
                        </div>
                        <div class="flex flex-col xl:flex-row xl:items-center -mt-4">
                            <div>
                                <h1 data-aos="fade-down" class="text-black lg:text-[3.2rem] text-[3.7rem] lg:pt-2 pl-2 mr-3">R$ {{ product.promotion[0].price }}</h1>
                            </div>
                            <div data-aos="fade-left">
                                <h1 class="text-black lg:text-[1.12rem] text-[1.42rem] mt-2 pl-2">no PIX</h1>
                                <h1 class="text-black lg:text-[1.12rem] text-[1.22rem] -mt-2 pl-2">ou
                                    até{{ product.promotion[0].installmentMax }} de R$ {{
                                        product.promotion[0].installmentPrice }}</h1>
                            </div>
                        </div>
                    </section>
                    <section v-else>
                        <div class="flex flex-col xl:flex-row xl:items-center mt-4">
                            <div>
                                <h1 data-aos="zoom-in" class="text-black text-[3.2rem] pt-2 pl-2 mr-3">R$ {{ product.saleCfg[0].price }}</h1>
                            </div>
                            <div data-aos="fade-left">
                                <h1 class="text-black lg:text-[1.12rem] text-[1.42rem] mt-2 pl-2">no PIX</h1>
                                <h1 class="text-black lg:text-[1.12rem] text-[1.42rem] lg:-mt-2 pl-2">ou até{{ product.saleCfg[0].installmentMax
                                    }}
                                    de R$ {{ product.saleCfg[0].installmentPrice }}</h1>
                            </div>
                        </div>
                    </section>
                    <div data-aos="fade-left" class="mb-10">
                        <h3 class="font-bold uppercase mt-8">Tenho interesse:</h3>
                        <p class="text-[0.9rem] mt-3">Por enquanto estamos fazendo as vendas somente por esses
                            meios de comunicação!</p>
                    </div>
                    <div class="flex flex-col lg:flex-row items-center lg:items-start">
                        <button
                            class="w-80 lg:w-64 cursor-pointer hover:scale-105 mb-6 lg:mb-0 transition-transform duration-300 ease-in-out h-16 shadow-xl bg-neutral-900 text-white font-bold rounded-full flex items-center justify-center space-x-2">
                            <span>WhatsApp</span>
                            <img alt="icon whatsapp" class="h-7 lg:h-6 ml-2 lg:ml-8"
                                src="../assets/img/icons/wpp-icon.webp" />
                        </button>
                        <button
                            class="w-80 lg:w-64 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out mx-6 shadow-xl h-16 bg-white text-neutral-900 font-bold rounded-full flex items-center justify-center space-x-2">
                            <span>E-mail</span>
                            <img alt="icon whatsapp" class="h-7 lg:h-4 ml-2 lg:ml-8"
                                src="../assets/img/icons/email-black.webp" />
                        </button>
                    </div>
                </div>  
            </div>       
            <div style="background-color: #f5f5f5;" class="w-full pb-8 bg-white">
                <h3 class="mt-4 lg:mt-6 mb-7 lg:mb-10 lg:text-lg text-xl font-bold uppercase text-center text-black"> Você também pode gostar!</h3>
                <InfiniteCarousel/>
            </div>
        </div>
        
        <AppFooter />
    </div>
</template>

<style scoped></style>
