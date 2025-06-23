<script setup>
import { ref, computed } from 'vue';
import InfiniteCarousel from "../components/InfiniteCarousel.vue";
import ProductSection from "../components/ProductSection.vue";

const props = defineProps({
  slides: {
    type: [Array, Object],
    required: true,
  },
  products: {
    type: [Array, Object],
    required: true,
  },
});

const filtroTexto = ref('');
const filtroCategoria = ref('');

const slidesFiltrados = computed(() => {
  return props.slides.map(slide => {
    const produtosFiltrados = slide.products.filter(product => {
      const nomeMatch = product.name.toLowerCase().includes(filtroTexto.value.toLowerCase());
      const categoriaMatch = filtroCategoria.value === '' || slide.title.toLowerCase().includes(filtroCategoria.value.toLowerCase());

      return nomeMatch && categoriaMatch;
    });

    return { ...slide, products: produtosFiltrados };
  }).filter(slide => slide.products.length > 0);
});

const productsFiltrados = computed(() => {
  return props.products.map(slide => {
    const produtosFiltrados = slide.products.filter(product => {
      const nomeMatch = product.name.toLowerCase().includes(filtroTexto.value.toLowerCase());
      const categoriaMatch = filtroCategoria.value === '' || slide.title.toLowerCase().includes(filtroCategoria.value.toLowerCase());

      return nomeMatch && categoriaMatch;
    });

    return { ...slide, products: produtosFiltrados };
  }).filter(slide => slide.products.length > 0);
});
</script>

<template>
  <div class="w-full bg-neutral-100 text-black">
    <h1 class="text-black font-bold text-center uppercase text-[1.35rem] py-12">
      Produtos em destaque!
    </h1>

    <div class="w-full items-end flex justify-end px-4 lg:px-32 mb-8">
      <div data-aos="fade-left" class="w-full flex justify-end px-4 lg:px-7">
        <div class="relative w-36 lg:w-48">
          <select
            id="categoryFilter"
            class="w-full bg-white font-bold text-black p-2 pl-3 pr-8 rounded outline-none text-sm border-l-2 border-black appearance-none"
            v-model="filtroCategoria"
          >
            <option class="py-4" value="">Todos</option>
            <option class="py-4" value="Caixas Amplificadoras Multi-uso">Caixas Amplificadoras Multi-uso</option>
            <option class="py-4" value="amplificadores de potência">Amplificadores de Potência</option>
            <option class="py-4" value="Kits de som ambiente">Kits de som ambiente</option>
          </select>
          <span class="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-xs">
            ▼
          </span>
        </div>
      </div>

      <div data-aos="fade-left" class="relative w-[29.5rem] lg:w-80">
        <input
          id="name"
          type="text"
          v-model="filtroTexto"
          class="w-full bg-white text-black font-medium p-2 pl-3 pr-8 rounded outline-none text-sm border-l-2 border-black placeholder:font-bold"
          placeholder="Pesquise aqui.."
          required
        />
        <span class="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer">
          <img
            class="h-4 m-1"
            src="../assets/img/icons/search-icon.webp"
            alt="Ícone de procura, search"
          />
        </span>
      </div>
    </div>
 
    <!-- <div v-for="(slide, index) in slidesFiltrados" :key="index">
      <InfiniteCarousel :slide="slide" /> 
    </div> -->

    <div v-for="(slide, i) in productsFiltrados" :key="i">
      <ProductSection :slide="slide" /> 
    </div>
  </div>
</template>

<style scoped></style>
