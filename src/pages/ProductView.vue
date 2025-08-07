<script setup>
import HeaderProduct from "../components/HeaderProduct.vue";
import AppFooter from "../components/AppFooter.vue";
import InfiniteCarousel from "../components/InfiniteCarousel.vue";
import { useRoute, useRouter } from "vue-router";
import { ref, watch, computed } from "vue";
import useProductStore from "../store/product.js";
import DescProduct from "../components/DescProduct.vue";
import ContactModal from "../components/ContactModal.vue";

const route = useRoute();
const router = useRouter();
const productStore = useProductStore();
const productId = computed(() => parseInt(route.params.id));

const product = ref(null);
const selectedImage = ref(null)
const showModal = ref(false);
const contactType = ref("");

const openContact = (type) => {
    contactType.value = type;
    showModal.value = true;
};

const closeContact = () => {
    showModal.value = false;
};

const openContactWpp = (product, price) => {
    const phoneNumber = "5519988770404";
    const message = `Olá, estou interessado no ${product} anunciado no valor de R$ ${price}!`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
};

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

const ShareProduct = () => {
    if (navigator.share) {
        navigator.share({
            title: 'Confira isso!',
            text: 'Dá uma olhada nesse conteúdo incrível.',
            url: window.location.href
        })
    }
};

function applyDiscount(price) {
  if (!price) return '';

  const numeric = parseFloat(
    price.toString().replace(/\./g, '').replace(',', '.')
  );

  if (isNaN(numeric)) return '';

  const discounted = numeric * 0.90;

  return discounted.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
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
            <div class="w-full cursor-pointer flex px-6 md:px-12 xl:px-20 justify-between h-8 lg:h-10 mt-8">
                <div class="flex items-center">
                    <img @click="backPage()" class="h-3 mr-2 rotate-180" alt="imagem produto não encontrado"
                        src="/icons/black-arrow-right.webp" />
                    <h2 @click="backPage()" class="uppercase lg:text-[0.85rem]">Voltar</h2>
                </div>
                <img @click="ShareProduct" class="lg:h-5 h-6 mr-2" alt="imagem produto não encontrado"
                    src="/icons/share-icon.webp" />
            </div>
            <div v-if="product" class="lg:flex-row w-full flex items-center lg:items-start flex-col pb-8 lg:pb-16">
                <div
                    class="w-96 lg:w-1/2 md:w-2/4 lg:pb-20 lg:pt-8 pt-8 flex flex-col lg:items-center lg:justify-center">
                    <div
                        class="w-full lg:w-[40rem] flex-grow flex h-96 lg:h-[32rem] flex-wrap lg:mb-12 justify-center py-2">
                        <section v-for="(img, index) in product.imgsProduct" :key="index"
                            class="w-42 h-42 lg:w-56 lg:h-56 xl:w-60 xl:h-60 m-2"
                            style="background: linear-gradient(to bottom, white, #f1f1f1);">
                            <img data-aos="zoom-in" :src="img.img" class="h-full shadow mx-auto cursor-pointer"
                                @click="openImage(img.img)" alt="Product image" />
                        </section>
                        <div v-if="selectedImage"
                            class="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50"
                            @click="closeModal">
                            <div class="relative">
                                <img :src="selectedImage"
                                    class="max-w-full imgselected max-h-full rounded-lg shadow-lg" />
                                <button @click="closeModal"
                                    class="absolute top-4 right-4 text-white text-2xl">X</button>
                            </div>
                        </div>
                    </div>
                    <div class="w-full hidden lg:block">
                        <DescProduct data-aos="zoom-in" :descProd="product.infos" />
                    </div>
                </div>
                <div class="w-full lg:w-1/2 py-8 lg:pb-20 lg:pt-10 lg:px-12 px-6 mr-2">
                    <h1 class="text-black text-[1.72rem] pl-2 pt-2 lg:pt-0 lg:mb-5 mb-4 leading-none">{{ product.name }}
                    </h1>
                    <div v-if="product.manual" class="w-full flex justify-end items-center mb-2">
                        <a data-aos="zoom-in" :href="`/manual/${product.manual}`" download target="_blank"
                            class="flex items-center">
                            <img src="/products/download.png" class="h-5 lg:h-3 cursor-pointer" alt="Download Manual" />
                            <p data-aos="fade-left" class="text-black mx-4 lg:mx-2 lg:text-[0.7rem] text-[0.95rem]">
                                Manual de instalação
                            </p>
                        </a>
                    </div>

                    <p data-aos="fade-left" class="text-black lg:text-[0.90rem] text-[1.05rem] pt-8 lg:pt-2 mb-6">{{
                        product.description }}</p>
                    <section v-for="(desc, index) in product.topicsDesc" :key="index">
                        <p data-aos="fade-left" class="text-black text-[1rem] lg:text-[0.85rem] pt-2 lg:mb-3 lg:pl-2">
                            <bold class="font-bold text-[1.1rem] lg:text-[0.9rem]">• {{ desc.title }}:</bold> {{
                                desc.description }}
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
                                <h1 class="text-black lg:text-[1.32rem] text-[1.42rem] mt-1 lg:mt-7 pl-2">no PIX</h1>
                                <!-- <h1 class="text-black lg:text-[1.12rem] text-[1.42rem] lg:-mt-2 pl-2">ou até {{
                                    product.saleCfg[0].installmentMax
                                }}
                                    de R$ {{ product.saleCfg[0].installmentPrice }}</h1> -->
                            </div>
                        </div>
                    </section>
                    <div class="w-full mt-8 block lg:hidden">
                        <DescProduct data-aos="zoom-in" :descProd="product.infos" />
                    </div>
                    <div data-aos="fade-left" class="mb-10 mt-6 lg:mt-0">
                        <h3 class="font-bold uppercase mt-8 text-black text-[1.25rem] lg:text-[1rem]"><span class="text-red-800">10%</span> de desconto na retirada!</h3>
                        <h1 data-aos="zoom-in" class="text-black text-[1.5rem] pt-2 pl-2 mr-3">{{ applyDiscount(product.saleCfg[0].price) }}</h1>
                    </div>
                    <div data-aos="fade-left" class="mb-10 mt-14 lg:mt-0">
                        <h3 class="font-bold uppercase mt-8 text-[1.3rem] lg:text-[1.1rem]">Tenho interesse:</h3>
                        <p class="text-[0.98rem] lg:text-[0.9rem] mt-3">Você pode adquirir este produto nos seguintes
                            locais:</p>
                    </div>
                    <div class="flex flex-col mb-10 items-center lg:items-start">
                        <h3 class="ml-2 mb-1 lg:text-[0.95rem] text-[1.35rem] text-bold"> Comprar on-line: </h3>
                        <p class="ml-2.5 mb-6 lg:text-[0.75rem] text-[0.9rem]"> * Pode haver uma <span
                                class="font-bold">pequena</span> diferença de
                            preço </p>
                        <div class="w-full flex flex-col items-center lg:flex-row">
                            <a :href="product.magalu" target="_blank">
                                <button data-aos="zoom-in" data-aos-duration="100"
                                    class="w-80 lg:w-64 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out mb-6 lg:mb-0 shadow-xl h-16 bg-[#0E87FE] text-[#2D2E7B] font-bold rounded-full flex items-center justify-center space-x-2">
                                    <img alt="logo Magalu" class="h-8"
                                        src="../assets/img/icons/magalu-logo.png" />
                                </button>
                            </a>
                            <!-- <a :href="product.amazon" target="_blank">
                                <button data-aos="zoom-in" data-aos-duration="200"
                                    class="w-80 lg:w-64 cursor-pointer hover:scale-105 mb-6 lg:mb-0 transition-transform duration-300 mx-6 ease-in-out h-16 shadow-xl bg-[#131921] text-white font-bold rounded-full flex items-center justify-center space-x-2">
                                    <img alt="logo Magalu" class="h-8 pt-1"
                                        src="../assets/img/icons/amazon-logo.webp" />
                                </button>
                            </a> -->
                        </div>
                    </div>
                    <div class="flex flex-col lg:mb-6 items-center lg:items-start">
                        <h3 class="ml-2 mb-1 lg:text-[0.95rem] text-[1.35rem] text-bold"> Combinar retirada: </h3>
                        <p class="ml-2.5 mb-6 lg:text-[0.75rem] text-[0.9rem]"> * Únidade em Campinas-SP </p>
                        <div class="w-full flex flex-col items-center lg:flex-row">
                            <button @click="openContact('email')" data-aos="zoom-in" data-aos-duration="300"
                                class="w-80 lg:w-64 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out shadow-xl mb-6 lg:mb-0 h-16 bg-white text-neutral-900 font-bold rounded-full flex items-center justify-center space-x-2">
                                <span>E-mail</span>
                                <img alt="icon email" class="h-5 lg:h-4 ml-4 lg:ml-6"
                                    src="../assets/img/icons/email-black.webp" />
                            </button>

                            <button @click="openContactWpp(product.name, product.saleCfg[0].price)" data-aos="zoom-in"
                                data-aos-duration="400"
                                class="w-80 lg:w-64 cursor-pointer hover:scale-105 mb-6 lg:mb-0 transition-transform duration-300 mx-6 ease-in-out h-16 shadow-xl bg-[#31B646] text-white font-bold rounded-full flex items-center justify-center space-x-2">
                                <span>WhatsApp</span>
                                <img alt="icon whatsapp" class="h-7 lg:h-6 ml-2 lg:ml-6"
                                    src="../assets/img/icons/wpp-icon.webp" />
                            </button>


                            <ContactModal v-if="showModal"
                                class="z-50 fixed top-0 left-0 right-0 bottom-0 bg-opacity-70" :produto="product.name"
                                :price="product.saleCfg[0].price" @close="closeContact" />

                        </div>
                    </div>
                </div>
            </div>
            <div v-else style="background-color: #fff;"
                class="w-full flex flex-col lg:flex-row items-center justify-center pt-12 pb-16 lg:pt-8 lg:pb-24">
                <img data-aos="flip-right" class="lg:mr-16 mb-4 lg:mb-0" alt="imagem produto não encontrado"
                    src="/products/not-found.webp" />
                <div class="w-10/12 lg:w-72">
                    <h3 class="mb-3 font-[500] text-[1.2rem]">Ops! Produto não encontrado.</h3>
                    <h2 class="mb-3 font-[500]">Não conseguimos localizar o item que você está procurando.</h2>
                    <h2>Verifique se a busca está correta ou explore outras categorias em nosso catálogo.</h2>
                </div>
            </div>
            <div style="background-color: #f5f5f5;" class="w-full pb-8 bg-white">
                <h3
                    class="mt-4 lg:mt-2 pt-12 mb-7 lg:mb-10 lg:text-lg text-xl font-bold uppercase text-center text-black">
                    Você também pode gostar!</h3>
                <InfiniteCarousel :slide="slidesArray[0]" />
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
