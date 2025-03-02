<script setup>
import AppNavbar from "./AppNavbar.vue";
</script>

<template>
	<header class="flex flex-col gap-4">
		<AppNavbar />

		<section
			class="flex flex-col items-center md:items-start justify-center gap-5"
		>
			<div
				class="flex w-full flex-col-reverse md:flex-row-reverse items-center justify-between gap-5 md:gap-8 xl:gap-32"
			>
				<div>
					<img
						src="../assets/img/promotion-image.webp"
						alt="Camisa de mockup"
						class="object-contain lg:mr-8 -mt-8 h-[250px] md:h-[300px] lg:h-[320px] xl:h-[350px] 2xl:h-[400px]"
						loading="lazy"
						data-aos="fade-right"
						data-aos-delay="300"
					/>
				</div>

				<div
					class="flex flex-col gap-7 items-start md:text-left"
				>
					<h1
						class="text-5xl w-full md:text-4xl lg:text-5xl mt-12 xl:text-5xl 2xl:text-7xl"
						data-aos="fade-right"
						data-aos-delay="500"
					>
						M Power Sound
					</h1>
					<p
						class="text-white text-base md:text-md lg:text-lg 2xl:text-lg mb-8 lg:mb-24"
						data-aos="fade-right"
						data-aos-delay="600"
					>
						Potência, qualidade e som incomparável ! <br>
						Encontre o amplificador perfeito para o seu setup aqui !
					</p>
					<div class="flex items-center mb-12 lg:mb-0">			
						<img
							src="../assets/img/icons/location-icon.webp"
							alt="Camisa de mockup"
							class="object-contain h-[30px] md:h-[30px] lg:h-[40px] xl:h-[45px] 2xl:h-[50px]"
							loading="lazy"
							data-aos="fade-right"
							data-aos-delay="600"
						/>			
						<p
							class="text-base ml-3 lg:ml-6 text-white md:text-md lg:text-md 2xl:text-[0.9rem]"
							data-aos="fade-right"
							data-aos-delay="500"
							>
							Rua Altino Arantes, 717, Jardim das Bandeiras, <br class="md:hidden lg:block">
							Campinas/SP, CEP 13051-110
						</p>
					</div>
				</div>
			</div>
		</section>
	</header>
</template>
