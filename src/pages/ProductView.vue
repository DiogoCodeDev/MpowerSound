<script setup>
import HeaderProduct from "../components/HeaderProduct.vue";
import AppFooter from "../components/AppFooter.vue";
import InfiniteCarousel from "../components/InfiniteCarousel.vue";
import { useRoute, useRouter } from "vue-router";
import { ref, watch, computed } from "vue";
import useProductStore from "../store/product.js";

const route = useRoute();
const router = useRouter();
const productStore = useProductStore();

const productId = computed(() => parseInt(route.params.id));

const product = ref(null);
const selectedImage = ref(null)

const slidesArray = computed(() => {
  return productStore.slideEnterprise.map(slide => {
    return {
      ...slide,
      products: slide.products.map(productId => {
        return productStore.products.find(product => product.id === productId) || {};
      }),
    };
  });
});

const getProduct = () => {
    product.value = productStore.products.find(
        (product) => product.id === productId.value
    );
};

const backPage = () => {
    router.push(`/`);
};

const openImage = (img) => {
  selectedImage.value = img
}

const closeModal = () => {
  selectedImage.value = null
}

watch(productId, getProduct, { immediate: true });
</script>

<template>
    <div id="container"
        class="relative w-full max-w-full overflow-hidden overflow-x-hidden flex flex-col text-white before:absolute before:inset-0 before:bg-black before:opacity-85">
        <img src="/mpower-sound-bg.webp" alt="Background Mpower Sound"
            class="fixed top-0 left-0 w-full h-full object-cover -z-10" />
        <HeaderProduct class="z-50 px-7 md:px-20 lg:px-32" />

        <div class="z-10 text-black" style="background: linear-gradient(to bottom, white, #eeeeee);">
            <div class="w-full cursor-pointer flex px-6 md:px-12 xl:px-20 items-center h-8 lg:h-10 mt-8">
                <img @click="backPage()" class="h-3 mr-2 rotate-180" alt="imagem produto não encontrado"
                    src="/icons/black-arrow-right.webp" />
                <h2 @click="backPage()" class="uppercase lg:text-[0.85rem]">Voltar</h2>
            </div>
            <div v-if="product" class="lg:flex-row w-full flex flex-col pb-16">
                <div class="w-full lg:w-80 lg:h-80 flex-grow lg:pb-20 lg:pt-8 pb-2 pt-8 flex flex-wrap justify-center">
                    <section v-for="(img, index) in product.imgsProduct" :key="index"
                        class="w-40 h-40 lg:w-56 lg:h-56 xl:w-60 xl:h-60 m-2"
                        style="background: linear-gradient(to bottom, white, #f1f1f1);">
                        <img data-aos="zoom-in" :src="img.img" class="h-full shadow mx-auto cursor-pointer"
                            @click="openImage(img.img)" alt="Product image" />
                    </section>
                    <div v-if="selectedImage"
                        class="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50"
                        @click="closeModal">
                        <div class="relative">
                            <img :src="selectedImage" class="max-w-full imgselected max-h-full rounded-lg shadow-lg" />
                            <button @click="closeModal" class="absolute top-4 right-4 text-white text-2xl">X</button>
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-1/2 py-8 lg:pb-20 lg:pt-12 lg:px-12 px-6 mr-2">
                    <h1 class="text-black text-[1.72rem] pl-2 pt-2 lg:pt-0 lg:mb-5 leading-none">{{ product.name }}</h1>
                    <p data-aos="fade-left" class="text-black text-[1.05rem] pt-12 lg:pt-2 mb-6">{{ product.description }}</p>
                    <section v-for="(desc, index) in product.topicsDesc" :key="index">
                        <p data-aos="fade-left" class="text-black text-[0.9rem] lg:text-[0.8rem] pt-2 lg:mb-3 lg:pl-2">
                            <bold class="font-bold text-[1rem]">• {{ desc.title }}:</bold> {{ desc.description }}
                        </p>
                    </section>
                    <section v-if="product.oldPricePromotion && product.oldPricePromotion.length > 0">
                        <div class="mt-5">
                            <h1 data-aos="fade-down" class="text-neutral-500 text-[2.22rem] line-through pl-2 mr-3">R$
                                {{
                                    product.oldPricePromotion[0].price }}</h1>
                        </div>
                        <div class="flex flex-col xl:flex-row xl:items-center -mt-4">
                            <div>
                                <h1 data-aos="fade-down"
                                    class="text-black lg:text-[3.2rem] text-[3.7rem] lg:pt-2 pl-2 mr-3">R$ {{
                                        product.saleCfg[0].price }}</h1>
                            </div>
                            <div data-aos="fade-left">
                                <h1 class="text-black lg:text-[1.12rem] text-[1.42rem] mt-2 pl-2">no PIX</h1>
                                <h1 class="text-black lg:text-[1.12rem] text-[1.22rem] -mt-2 pl-2">ou
                                    até {{ product.saleCfg[0].installmentMax }} de R$ {{
                                        product.saleCfg[0].installmentPrice }}</h1>
                            </div>
                        </div>
                    </section>
                    <section v-else>
                        <div class="flex flex-col xl:flex-row xl:items-center mt-4">
                            <div>
                                <h1 data-aos="zoom-in" class="text-black text-[3.2rem] pt-2 pl-2 mr-3">R$ {{
                                    product.saleCfg[0].price }}</h1>
                            </div>
                            <div data-aos="fade-left">
                                <h1 class="text-black lg:text-[1.12rem] text-[1.42rem] mt-2 pl-2">no PIX</h1>
                                <h1 class="text-black lg:text-[1.12rem] text-[1.42rem] lg:-mt-2 pl-2">ou até {{
                                    product.saleCfg[0].installmentMax
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
            <div v-else style="background-color: #fff;"
                class="w-full flex flex-col lg:flex-row items-center justify-center py-16">
                <img data-aos="flip-right" class="lg:mr-16 mb-4 lg:mb-0" alt="imagem produto não encontrado"
                    src="/products/not-found.webp" />
                <div class="w-10/12 lg:w-72">
                    <h3 class="mb-3 text-[1.2rem]">Ops! Produto não encontrado.</h3>
                    <h4 class="mb-3">Não conseguimos localizar o item que você está procurando.</h4>
                    <h4>Verifique se a busca está correta ou explore outras categorias em nosso catálogo.</h4>
                </div>
            </div>
            <div style="background-color: #f5f5f5;" class="w-full pb-8 bg-white">
                <h3
                    class="mt-4 lg:mt-2 pt-12 mb-7 lg:mb-10 lg:text-lg text-xl font-bold uppercase text-center text-black">
                    Você também pode gostar!</h3>
                <InfiniteCarousel :slide="slidesArray[0]"/>
            </div>
        </div>

        <AppFooter />
    </div>
</template>

<style scoped>
.fixed {
    background-color: rgba(0, 0, 0, 0.7);
}

.imgselected {
    max-width: 500px;
    max-height: 500px;
    object-fit: contain;
    transition: transform 0.3s ease-in-out;
}

.imgselected:hover {
    transform: scale(1.05);
}

@media (max-width: 768px) {
    .imgselected {
        max-width: 330px;
        max-height: 330px;
    }
}

</style>
