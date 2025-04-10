<script setup>
import EnterpriseHeader from "../components/EnterpriseHeader.vue";
import { computed } from "vue";
import AppFooter from "../components/AppFooter.vue";
import InfiniteCarousel from "../components/InfiniteCarousel.vue";
import useProductStore from '../store/product.js';

const productStore = useProductStore();

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
</script>

<template>
  <div id="container"
    class="relative w-full min-h-screen overflow-x-hidden max-w-full overflow-hidden flex flex-col text-white before:absolute before:inset-0 before:bg-black before:opacity-75 tracking-wide">
    <img src="/bg3.webp" alt="Background Mpower Sound" class="fixed top-0 left-0 w-full h-full object-cover -z-10" />
    <EnterpriseHeader class="z-50 px-7 md:px-20 lg:px-32" />


    <div class="w-full px-8 lg:px-32 bg-[#F1F1F1] gap-20 lg:gap-72 z-10">
      <h1 data-aos="fade-right" data-aos-delay="100"
        class="text-center font-bold text-[1.8rem] lg:text-[1.5rem] uppercase text-black pt-16 pb-5 lg:py-10"> Quem
        somos? </h1>
      <h2 data-aos="fade-right" data-aos-delay="100" class="text-black py-12 text-[1.2rem] lg:text-xl lg:ml-4">
        <bold class="font-bold">MPOWER SOUND</bold> – Potência e Qualidade em Cada Frequência
      </h2>
      <p data-aos="fade-right" data-aos-delay="200" class="text-black text-md tracking-wide lg:text-sm">Com mais de 20
        anos de experiência, a <bold class="font-bold">MPOWER SOUND</bold> é referência no
        desenvolvimento e fabricação de equipamentos de áudio de alta performance. Sua
        sede moderna, em operação desde 2008, conta com uma das estruturas mais
        avançadas do Brasil, garantindo eficiência e qualidade em cada detalhe da produção.
        A empresa é movida pela inovação e pelo compromisso com a excelência, investindo
        constantemente em tecnologia própria e no aprimoramento de sua equipe. </p><br>

      <p data-aos="fade-right" data-aos-delay="200" class="text-black text-md lg:text-sm">Valorizamos nossos
        profissionais, proporcionando um ambiente de trabalho
        estruturado e benefícios como transporte fretado, plano de saúde e vale-alimentação,
        que refletem nosso compromisso com o bem-estar e o crescimento de cada
        colaborador. </p><br>

      <p data-aos="fade-right" data-aos-delay="200" class="text-black text-md lg:text-sm">A <bold class="font-bold">
          MPOWER SOUND</bold> se destaca pela especialização em engenharia de áudio,
        dominando desde a concepção de circuitos eletrônicos até a seleção dos melhores
        componentes. O resultado? Equipamentos reconhecidos por sua potência,
        durabilidade e fidelidade sonora. Nosso processo produtivo é altamente tecnológico.
        Além disso, trabalhamos com alto-falantes de altíssima qualidade, ajustados para
        oferecer uma resposta acústica impecável em cada aplicação. </p><br>

      <p data-aos="fade-right" data-aos-delay="200" class="text-black text-md lg:text-sm">Todos os produtos passam por
        rigorosos testes eletroacústicos diários, e um
        percentual é submetido a condições extremas, muito acima da potência nominal, para
        assegurar confiabilidade e resistência. Nosso sistema de armazenamento é totalmente
        verticalizado, permitindo uma logística eficiente e a preservação de materiais e
        produtos. </p><br>

      <h2 data-aos="fade-right" data-aos-delay="300" class="text-black pb-12 text-md">
        <bold class="font-bold">MPOWER SOUND</bold> – Potência e Precisão para o Seu Som!
      </h2>

      <div class="w-full flex flex-col lg:flex-row justify-around items-center pb-28">
        <img data-aos="fade-up-right" class="w-72 lg:w-4/12" src="../assets/img/enterprise/enterprise-1.webp"
          alt="Imagem da empresa M Power Sound" />
        <img data-aos="fade-down-left" class="w-72 lg:w-4/12" src="../assets/img/enterprise/enterprise-2.webp"
          alt="Imagem da empresa M Power Sound" />
        <img data-aos="fade-up-left" class="w-72 lg:w-4/12" src="../assets/img/enterprise/enterprise-3.webp"
          alt="Imagem da empresa M Power Sound" />
      </div>

      <h3 class="mt-4 lg:mt-6 mb-7 lg:mb-10 lg:text-lg text-xl font-bold uppercase text-center text-black"> Você também
        pode gostar!</h3>
      <div class="w-full">
        <InfiniteCarousel :slide="slidesArray[0]" />
      </div>
    </div>

    <AppFooter />
  </div>
</template>

<style scoped></style>
