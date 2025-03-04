<script setup>

import AppNavbar from "./AppNavbar.vue";

</script>

<template>
	<header class="flex flex-col">
		<AppNavbar />

		<section class="flex flex-col items-center md:items-start justify-center gap-2">
			<div
				class="flex w-full flex-col-reverse gap-5 md:gap-8 xl:gap-12">
				<div class="flex flex-col items-start md:text-left">
					<h1 class="text-[2.8rem] w-full lg:text-5xl mt-6 lg:mt-12 mb-6 lg:mb-6 xl:text-5xl 2xl:text-7xl"
						data-aos="fade-right" data-aos-delay="500">
						M Power Sound
					</h1>
					<p class="text-white text-base md:text-md lg:text-lg 2xl:text-lg mb-16 lg:mb-24"
						data-aos="fade-right" data-aos-delay="600">
						Potência, qualidade e som incomparável ! <br>
						Encontre o amplificador perfeito para o seu setup aqui !
					</p>
					<div class="flex items-center mb-32 lg:mb-24">
						<img src="../assets/img/icons/location-icon.webp" alt="Camisa de mockup"
							class="object-contain h-[30px] md:h-[30px] lg:h-[40px] xl:h-[45px] 2xl:h-[50px]"
							loading="lazy" data-aos="fade-right" data-aos-delay="600" />
						<p class="text-base ml-3 lg:ml-6 text-white md:text-md lg:text-md 2xl:text-[0.9rem]"
							data-aos="fade-right" data-aos-delay="500">
							Rua Altino Arantes, 717, Jardim das Bandeiras, <br class="md:hidden lg:block">
							Campinas/SP, CEP 13051-110
						</p>
					</div> 
				</div>
			</div>
		</section>
	</header>
</template>
