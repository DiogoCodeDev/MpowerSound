<script setup>
import { ref, computed, onMounted } from 'vue';
import InfiniteCarousel from "../components/InfiniteCarousel.vue";
import ListCarousel from "../components/ListCarousel.vue";
import ProductSection from "../components/ProductSection.vue";
import useProductStore from '../store/product.js';
import { useRoute, useRouter } from "vue-router";
import HeaderProduct from "../components/HeaderProduct.vue";
import AppFooter from "../components/AppFooter.vue";
import { watch } from 'vue';

const route = useRoute();
const router = useRouter();
const productStore = useProductStore();
const filtroTexto = ref('');
const hasListMode = ref(false);
const hasBoxMode = ref(true);
const filtroCategoria = ref('');
const newfiltroCategoria = ref('');
const filtroPreco = ref('');

const slidesProduct = computed(() => {
    return productStore.productHome.map(slide => {
        return {
            ...slide,
            products: slide.products.map(productId => {
                return productStore.products.find(product => product.id === productId) || { name: '', price: 0 };
            }),
        };
    });
});

const ChangeMode = () => {
    hasListMode.value = !hasListMode.value;
    hasBoxMode.value = !hasBoxMode.value;
};

const ShareProduct = () => {
    if (navigator.share) {
        navigator.share({
            title: 'Confira isso!',
            text: 'Dá uma olhada nesse conteúdo incrível.',
            url: window.location.href
        });
    }
};

const backPage = () => {
    router.push(`/`);
};

const getTotalProducts = (slides) => {
    return slides.reduce((total, slide) => total + (slide.products?.length || 0), 0);
};

const slidesFiltrados = computed(() => {
    const formatPrice = (priceString) => {
        const precoString = priceString.replace('R$', '').replace('.', '').replace(',', '.').trim();
        const preco = parseFloat(precoString);
        return isNaN(preco) ? 0 : preco;
    };

    return slidesProduct.value.map(slide => {
        let produtosFiltrados = slide.products.filter(product => {
            const nomeMatch = product.name.toLowerCase().includes(filtroTexto.value.toLowerCase());
            const categoriaMatch = filtroCategoria.value === '' || slide.title.toLowerCase().includes(filtroCategoria.value.toLowerCase());
            let promocaoMatch = true;

            if (filtroPreco.value === 'promoções') {
                promocaoMatch = !!product.oldPricePromotion;
            }

            return nomeMatch && categoriaMatch && promocaoMatch;
        });
 
        if (filtroPreco.value === 'menores') {
            produtosFiltrados.sort((a, b) => {
                const precoA = a.saleCfg && a.saleCfg[0] && a.saleCfg[0].price ? formatPrice(a.saleCfg[0].price) : 0;
                const precoB = b.saleCfg && b.saleCfg[0] && b.saleCfg[0].price ? formatPrice(b.saleCfg[0].price) : 0;
                return precoA - precoB;
            });
        } else if (filtroPreco.value === 'maiores') {
            produtosFiltrados.sort((a, b) => {
                const precoA = a.saleCfg && a.saleCfg[0] && a.saleCfg[0].price ? formatPrice(a.saleCfg[0].price) : 0;
                const precoB = b.saleCfg && b.saleCfg[0] && b.saleCfg[0].price ? formatPrice(b.saleCfg[0].price) : 0;
                return precoB - precoA;
            });
        }

        return { ...slide, products: produtosFiltrados };
    }).filter(slide => slide.products.length > 0);
});

watch(
    () => route.fullPath,
    (newPath) => {
        if (newPath.includes('filter=promo%C3%A7%C3%A3o')) {
            filtroPreco.value = 'promoções';
        } 
        else if (newPath.includes('search')) {
            filtroCategoria.value = route.query.search || '';
            newfiltroCategoria.value = route.query.search || '';
        }
        else if (newPath.includes('filter')) {
            filtroTexto.value = route.query.filter || '';
        }
        else {
            filtroPreco.value = '';
        }
    },
    { immediate: true }
);
</script>

<template>
    <div :style="{ backgroundImage: 'linear-gradient(to bottom, rgba(244, 244, 244, 1), rgba(255, 255, 255, 1))', opacity: '100 !important' }"
        id="container" class="relative w-full max-w-full overflow-hidden overflow-x-hidden flex flex-col text-white">
        <div class="bg-black">
            <HeaderProduct class="z-50 px-7 md:px-20 lg:px-32" />
        </div>

        <div data-aos="zoom-in"
            class="w-full text-black cursor-pointer flex px-6 md:px-12 xl:px-24 justify-between h-8 lg:h-10 mt-8 items-center">
            <div class="flex items-center">
                <img @click="backPage()" class="h-3 mr-2 rotate-180" alt="imagem produto não encontrado"
                    src="/icons/black-arrow-right.webp" />
                <h2 @click="backPage()" class="uppercase lg:text-[0.85rem]">Voltar</h2>
            </div>
            <img @click="ShareProduct" class="lg:h-5 h-6 mr-2" alt="imagem produto não encontrado"
                src="/icons/share-icon.webp" />
        </div>

        <div class="w-full text-black mb-12">
            <h1 data-aos="zoom-in"
                class="text-black font-black text-center text-[3.1rem] lg:text-[3.5rem] pb-6 lg:pb-4 pt-12 lg:pt-2">
                M Power Sound
            </h1>

            <div class="w-full items-center flex justify-center px-4 lg:px-32 mb-8 lg:mb-6">
                <div data-aos="zoom-in" class="relative w-[29.5rem]">
                    <input id="name" type="text" v-model="filtroTexto"
                        class="w-full bg-white text-black font-medium p-3 lg:p-2.5 pl-3 pr-8 rounded outline-none text-[1.2rem] lg:text-sm border-l-2 border-black placeholder:font-bold"
                        placeholder="Pesquise aqui.." required />
                    <span class="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer">
                        <img class="h-4 m-1" src="../assets/img/icons/search-icon.webp"
                            alt="Ícone de procura, search" />
                    </span>
                </div>
            </div>
            <div
                class="flex flex-col lg:flex-row mb-16 lg:mb-14 items-end w-full justify-between lg:justify-end lg:mr-16">
                <div data-aos="fade-left" class="w-[5.5rem] h-full hidden lg:flex ml-4 lg:pt-7">
                    <div class="flex items-center text-neutral-700 text-[0.75rem]">
                        <h3>{{ getTotalProducts(slidesFiltrados) + '&nbsp;' + 'produtos.' }}</h3>
                    </div>
                </div>
                <div class="flex w-full lg:w-[24rem] lg:mr-8">
                    <div data-aos="fade-left" class="lg:w-[13rem] flex justify-end lg:justify-start px-4 lg:px-2">
                        <div class="relative w-48 lg:w-48 bg-[#fff] rounded">
                            <select id="categoryFilter"
                                class="w-full font-bold text-black p-2 lg:p-1.5 lg:mr-0 lg:pl-2.5 pl-3 pr-8 rounded outline-none text-sm border-l-2 border-black appearance-none"
                                v-model="filtroCategoria">
                                <option class="py-4 px-2" value="">Produto</option>
                                <option class="py-4" value="Caixas Amplificadoras Multi-uso">Caixas Amplificadoras Multi-uso</option>
                                <option class="py-4" value="amplificadores de potência">Amplificadores de Potência</option>
                                <option class="py-4" value="Kits de som ambiente">Kits de som ambiente</option>
                                <option v-if="newfiltroCategoria" class="py-4 px-2" :value="newfiltroCategoria">{{newfiltroCategoria}}</option>
                            </select>
                            <span
                                class="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-xs">▼</span>
                        </div>
                    </div>

                    <div data-aos="fade-left" class="lg:w-[13rem] flex justify-end lg:justify-start pr-4">
                        <div class="relative w-36 lg:w-48 bg-[#fff] rounded">
                            <select id="priceFilter"
                                class="w-full font-bold text-black p-2 lg:p-1.5 lg:pl-2.5 pl-3 pr-8 rounded outline-none text-sm border-l-2 border-black appearance-none"
                                v-model="filtroPreco">
                                <option class="py-4 px-2" value="">Preço</option>
                                <option class="py-4 px-2" value="menores">Menores preços</option>
                                <option class="py-4 px-2" value="maiores">Maiores preços</option>
                                <option class="py-4 px-2" value="promoções">Promoções</option>
                            </select>
                            <span
                                class="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-xs">▼</span>
                        </div>
                    </div>
                </div>
                <div class="w-24 h-full flex lg:mr-24 mt-7 -ml-12 lg:mt-0 lg:pt-7">
                    <div class="flex items-center">
                        <img data-aos="zoom-in" data-aos-duration="300" v-if="!hasListMode" @click="ChangeMode" class="h-7 lg:h-6 m-1 ml-12 cursor-pointer"
                            src="../assets/img/icons/icon-box.webp" alt="Ícone produtos modo boxe" />
                        <img data-aos="zoom-in" data-aos-duration="300" v-else-if="hasListMode" @click="ChangeMode" class="h-7 lg:h-6 m-1 ml-12 cursor-pointer"
                            src="../assets/img/icons/icon-list.webp" alt="Ícone produtos modo lista" />
                    </div>
                </div>
            </div>

            <div v-for="(slide, index) in slidesFiltrados" :key="index">
                <!-- <InfiniteCarousel v-if="hasBoxMode" :slide="slide" />
                <ListCarousel v-if="hasListMode" :slide="slide" />  -->
                <ProductSection :slide="slide" /> 
            </div>

            <div v-if="slidesFiltrados.length === 0" class="w-full mt-8 lg:mt-12 text-black">
                <div class="w-full flex flex-col lg:flex-row items-center justify-center pt-12 pb-24 lg:pt-16 lg:pb-32">
                    <img data-aos="flip-right" class="lg:mr-16 mb-4 lg:mb-0" alt="imagem produto não encontrado"
                        src="/products/not-found.webp" />
                    <div class="w-10/12 lg:w-72">
                        <h3 class="mb-3 font-[500] text-[1.2rem]">Ops! Produto não encontrado.</h3>
                        <h2 class="mb-3 font-[500]">Não conseguimos localizar o item que você está procurando.</h2>
                        <h2>Verifique se a busca está correta ou explore outras categorias em nosso catálogo.</h2>
                    </div>
                </div>
            </div>
        </div>
        <AppFooter :style="{ backgroundColor: 'rgba(0, 0, 0, 0.965)', opacity: '100 !important' }" />
    </div>
</template>

<style scoped></style>
