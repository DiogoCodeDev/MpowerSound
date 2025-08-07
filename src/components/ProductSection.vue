<template>
  <div class="relative text-black mx-auto w-full lg:w-11/12 mb-12 lg:mb-14">
    <div class="w-full lg:w-11/12 mx-auto py-4 lg:mx-12">
      <h2 class="mx-3 lg:mx-0 text-2xl lg:text-xl mb-2 font-[500]">{{ slide.title }}</h2>
      <p class="mr-1 ml-3 lg:mx-0 lg:text-[0.85rem] font-[400] hidden lg:block">{{ slide.desc }}</p>
      <p class="mr-1 ml-3 lg:mx-0 text-sm lg:hidden">{{ slide.descMobile }}</p>
    </div>

    <div class="w-11/12 mx-auto lg:py-1 text-right lg:mx-11 mb-4">
      <h2 @click="goToGallery(slide.title)" class="text-[0.93rem] lg:text-[0.75rem] text-black cursor-pointer">
        Ver mais...
      </h2>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 lg:px-12">
      <div
        v-for="(product, index) in slide.products.slice(0, 4)"
        :key="index"
        @click="goToProduct(product)"
        data-aos="zoom-in"
        class="bg-white rounded shadow hover:scale-[1.02] duration-200 cursor-pointer p-4 flex flex-col justify-between relative"
      >
        <div v-if="product.oldPricePromotion"
          class="absolute top-0 right-0 p-1 bg-red-500 text-white text-[0.7rem] font-semibold rounded-bl-lg">
          {{ product.oldPricePromotion[0].discountPercentage }} OFF
        </div>

        <div class="flex items-center justify-center h-28 lg:h-38">
          <img class="h-28 lg:h-40" :src="getImagePath(product.img2)" :alt="product.alt" />
        </div>

        <h2
          v-bind:title="product.oldPricePromotion && product.name.length > 12 ? product.name : ''"
          class="font-semibold text-[0.85rem] mt-4 text-left"
        >
          {{ product.oldPricePromotion ? limitNameProduct(product.name) : product.name }}
        </h2>

        <div class="text-left mt-1">
          <h3 v-if="product.oldPricePromotion"
            class="text-sm line-through text-neutral-500">
            R$ {{ product.oldPricePromotion[0].price }}
          </h3>
          <h3 v-if="product.saleCfg" class="text-[1.05rem] font-semibold text-black">
            R$ {{ product.saleCfg[0].price }}
            <span class="text-[0.65rem] hidden lg:inline">No PIX!</span>
          </h3>
        </div>

        <h4 class="text-[0.67rem] font-[600] mt-2 text-left text-black">10% de desconto na retirada.</h4>
      </div>
    </div>
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
