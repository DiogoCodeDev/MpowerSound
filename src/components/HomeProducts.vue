<script setup>
import InfiniteCarousel from "../components/InfiniteCarousel.vue";
</script>
<template>
    <div class="w-full bg-neutral-100 text-black">
        <h1 class="text-black font-bold text-center uppercase text-xl py-12"> Produtos em destaque! </h1>

        <div class="w-full items-end flex justify-end px-4 lg:px-32 mb-8">
            <div class="w-full flex justify-end px-4 lg:px-7">
                <div class="relative w-36 lg:w-48">
                    <select id="filter"
                        class="w-full bg-white text-black p-2 pl-3 pr-8 rounded outline-none text-sm border-l-2 border-black appearance-none">
                        <option class="py-4" value="" disabled selected>Filtre aqui..</option>
                        <option class="py-4" value="conectividade">Promoções</option>
                        <option class="py-4" value="potencia">Maior preço</option>
                        <option class="py-4" value="modelo">Menor preço</option>
                    </select>

                    <!-- Ícone da seta -->
                    <span class="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-xs">
                        ▼
                    </span>
                </div>
            </div>

            <div class="relative w-[28rem] lg:w-80">
                <input id="name" type="text"
                    class="w-full bg-white text-black p-2 pl-3 pr-8 rounded outline-none text-sm border-l-2 border-black"
                    placeholder="Pesquise aqui.." required />
                <span class="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer">
                    <img class="h-4 m-1" src="../assets/img/icons/search-icon.webp" alt="Ícone de procura, search" />
                </span>
            </div>
        </div>

        <InfiniteCarousel />

        <InfiniteCarousel />

        <InfiniteCarousel />
    </div>
</template>

<style scoped></style>
