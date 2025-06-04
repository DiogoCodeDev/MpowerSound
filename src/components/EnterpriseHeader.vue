<script setup>

import AppNavbar from "./AppNavbar.vue";

</script>

<template>
	<header class="flex flex-col overflow-hidden w-full">
		<AppNavbar />

		<section
			class="flex flex-col items-center md:items-start justify-center gap-2 w-full max-w-full overflow-hidden">
			<div class="flex w-full flex-col-reverse max-w-full">
				<div class="flex flex-col items-start md:text-left w-full">
					<img data-aos="fade-up" alt="icon criadores do site" class="h-11 lg:h-14 mb-8 lg:mb-8 mt-16 lg:mt-12 cursor-pointer" src="../assets/img/icons/m-power-logo-white.webp"/>
					<p class="text-white text-base md:text-md lg:text-lg 2xl:text-lg mb-16 lg:mb-24 w-full max-w-full"
						data-aos="fade-right" data-aos-delay="600">
						Potência, qualidade e som incomparável! <br>
						Encontre o amplificador perfeito para o seu setup aqui!
					</p>
					<div class="flex items-center mb-32 lg:mb-24 w-full max-w-full">
						<img src="../assets/img/icons/location-icon.webp" alt="Localização"
							class="object-contain h-[30px] md:h-[30px] lg:h-[40px] xl:h-[45px] 2xl:h-[50px] max-w-full"
							loading="lazy" data-aos="fade-right" data-aos-delay="600" />
						<p class="ml-3 lg:ml-6 text-white text-sm 2xl:text-[0.9rem] w-full max-w-full"
							data-aos="fade-right" data-aos-delay="500">
							Rua Altino Arantes, 717, Jardim das Bandeiras, <br class="hidden lg:block">
							Campinas/SP, CEP 13051-110
						</p>
					</div>
				</div>
			</div>
		</section>
	</header>
</template>
