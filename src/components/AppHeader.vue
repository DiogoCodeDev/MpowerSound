<script setup>

import AppNavbar from "./AppNavbar.vue";
import { useRouter } from 'vue-router';

const router = useRouter();

const goToGallery = (filter) => {
    router.push({ path: '/product-gallery', query: { filter: filter } });
};	

</script>

<template>
	<header class="flex flex-col">
		<AppNavbar />

		<section class="flex w-full flex-col items-center md:items-start justify-center mb-28">
			<div class="flex w-full flex-col-reverse md:flex-row-reverse items-center justify-between">
				<div class="group">
					<img @click="goToGallery('promoção')" src="/banner/product-2.webp" alt="Item em promoção destaque" class="object-contain cursor-pointer transform transition-transform duration-300 ease-in-out group-hover:scale-110
		       		-mt-8 h-[320px] md:h-[300px] lg:h-[360px] xl:h-[450px] 2xl:h-[490px]" loading="lazy" data-aos="fade-right"
						data-aos-delay="300" />
				</div>

				<div class="flex flex-col items-start md:text-left">
					<img data-aos="fade-up" alt="icon criadores do site" class="h-11 lg:h-14 mb-8 lg:mb-8 mt-16 lg:mt-12 cursor-pointer" src="../assets/img/icons/m-power-logo-white.webp"/>
					<p class="text-white text-base md:text-md lg:text-lg 2xl:text-lg mb-16 lg:mb-24" data-aos="fade-right"
						data-aos-delay="600">
						Potência, qualidade e som incomparável! <br>
						Encontre o amplificador perfeito para o seu setup aqui!
					</p>
					<div class="flex items-center mb-16 lg:mb-0">
						<img src="../assets/img/icons/location-icon.webp" alt="Camisa de mockup"
							class="object-contain h-[35px] md:h-[35px] lg:h-[40px] xl:h-[45px] 2xl:h-[50px]"
							loading="lazy" data-aos="fade-right" data-aos-delay="800" />
						<p class="ml-4 lg:ml-6 text-white text-sm 2xl:text-[0.9rem]" data-aos="fade-right"
							data-aos-delay="700">
							Rua Altino Arantes, 717, Jardim das Bandeiras, <br class="hidden md:block">
							Campinas/SP, CEP 13051-110
						</p>
					</div>
				</div>
			</div>
		</section>
	</header>
</template>
