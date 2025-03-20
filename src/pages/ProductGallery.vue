<script setup>
import { ref, computed } from 'vue';
import InfiniteCarousel from "../components/InfiniteCarousel.vue";
import useProductStore from '../store/product.js';

const productStore = useProductStore();
const filtroTexto = ref('');
const filtroCategoria = ref('');
const filtroPreco = ref('');

const slidesProduct = computed(() => {
    return productStore.slidesGallery.map(slide => {
        return {
            ...slide,
            products: slide.products.map(productId => {
                return productStore.products.find(product => product.id === productId) || { name: '', price: 0 };
            }),
        };
    });
});

const slidesFiltrados = computed(() => {
  return slidesProduct.value.map(slide => {
    const produtosFiltrados = slide.products.filter(product => {
      const nomeMatch = product.name.toLowerCase().includes(filtroTexto.value.toLowerCase());
      const categoriaMatch = filtroCategoria.value === '' || slide.title.toLowerCase().includes(filtroCategoria.value.toLowerCase());
      const precoMatch = filtroPreco.value === '' || (filtroPreco.value === 'menores' ? product.price < 1000 : product.price >= 1000);

      return nomeMatch && categoriaMatch && precoMatch;
    });

    return { ...slide, products: produtosFiltrados };
  }).filter(slide => slide.products.length > 0);
});
</script>

<template>
    <div class="w-full bg-neutral-100 text-black">
        <h1 class="text-black font-bold text-center uppercase text-[1.35rem] lg:text-[2.25rem] pb-7 pt-24">
            MPower Sound
        </h1>

        <div class="w-full items-end flex justify-end px-4 lg:px-32 mb-8">
            <div data-aos="fade-left" class="relative w-[29.5rem] lg:w-88 lg:mr-8">
                <input id="name" type="text" v-model="filtroTexto"
                    class="w-full bg-white text-black font-medium p-2 pl-3 pr-8 rounded outline-none text-sm border-l-2 border-black placeholder:font-bold"
                    placeholder="Pesquise aqui.." required />
                <span class="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer">
                    <img class="h-4 m-1" src="../assets/img/icons/search-icon.webp" alt="Ícone de procura, search" />
                </span>
            </div>

            <div data-aos="fade-left" class="w-2/10 flex justify-start px-4">
                <div class="relative w-36 lg:w-full">
                    <select id="categoryFilter"
                        class="w-full bg-white font-bold text-black p-2 pl-3 pr-8 rounded outline-none text-sm border-l-2 border-black appearance-none"
                        v-model="filtroCategoria">
                        <option class="py-4" value="">Produto</option>
                        <option class="py-4" value="caixas acústicas passivas">Caixas Acústicas Passivas</option>
                        <option class="py-4" value="amplificadores de potência">Amplificadores de Potência</option>
                        <option class="py-4" value="caixas para sonorização ambiente">Caixas para Sonorização</option>
                        <option class="py-4" value="Produto X">Produtos X</option>
                        <option class="py-4" value="Produxo Y">Produxos Y</option>
                        <option class="py-4" value="Produto Z">Produtos Z</option>
                    </select>
                    <span class="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-xs">▼</span>
                </div>
            </div>

            <div data-aos="fade-left" class="w-1/8 flex justify-start pr-4">
                <div class="relative w-36 lg:w-48">
                    <select id="priceFilter"
                        class="w-full bg-white font-bold text-black p-2 pl-3 pr-8 rounded outline-none text-sm border-l-2 border-black appearance-none"
                        v-model="filtroPreco">
                        <option class="py-4" value="">Preço</option>
                        <option class="py-4" value="menores">Menores preços</option>
                        <option class="py-4" value="maiores">Maiores preços</option>
                    </select>
                    <span class="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-xs">▼</span>
                </div>
            </div>
        </div>

        <div v-for="(slide, index) in slidesFiltrados" :key="index">
            <InfiniteCarousel :slide="slide" />
        </div>
    </div>
</template>

<style scoped></style>
