<script setup>
import { ref, nextTick, watch } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
  descProd: {
    type: Array,
    required: true,
  },
});

const activeIndex = ref(null);
const route = useRoute();

watch(() => route.fullPath, () => {
  activeIndex.value = null;
});

const toggleAnswer = async (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
  await nextTick();
};

function beforeEnter(el) {
  el.style.height = '0';
  el.style.opacity = '0';
}

function enter(el) {
  el.offsetHeight;
  el.style.transition = 'height 0.3s ease, opacity 0.3s ease';
  el.style.height = el.scrollHeight + 'px';
  el.style.opacity = '1';
}

function leave(el) {
  el.style.transition = 'height 0.3s ease, opacity 0.3s ease';
  el.style.height = '0';
  el.style.opacity = '0';
}
</script>

<template>
  <div class="w-full flex items-center justify-center pt-4">
    <div class="lg:mb-6 mb-2 w-full mx-1 lg:w-[34rem] lg:mx-auto">
      <div v-for="(item, qIndex) in descProd" :key="qIndex" class="mb-3 shadow w-full mx-auto rounded-lg bg-white text-black">
        
        <button @click="toggleAnswer(qIndex)"
                class="w-full text-left font-semibold cursor-pointer flex justify-between items-center p-5">
          <span class="text-[1.05rem] lg:text-[0.96rem] font-semibold mr-4">Expecificações Técnicas</span>
          <span :class="['transition-transform duration-300', activeIndex === qIndex ? 'rotate-180' : 'rotate-0']">
            ▼
          </span>
        </button>
        
        <transition @before-enter="beforeEnter" @enter="enter" @leave="leave">
          <div v-if="activeIndex === qIndex" class="overflow-hidden">
            <div class="p-5 text-black font-[400] text-[0.85rem] lg:text-sm mr-4 lg:mr-0">
              <p>{{ item.description }}</p>

              <h5 class="font-semibold mt-4 mb-4 text-[1.25rem] lg:text-[0.86rem]">Especificações:</h5>
              <ul>
                <li v-for="(spec, specIndex) in item.specifications" :key="specIndex" class="mb-3 mr-4 lg:mr-0 text-[1rem] lg:text-[0.86rem] lg:mb-1.5">
                  <strong>{{ spec.label }}:</strong> {{ spec.value }}
                </li>
              </ul>

              <p class="mt-10 lg:mt-8"><strong>Garantia:</strong> {{ item.warranty }}</p>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
button {
  transition: all 0.3s ease;
}

.fade-enter-active,
.fade-leave-active {
  transition: height 0.3s ease, opacity 0.3s ease;
}
</style>
