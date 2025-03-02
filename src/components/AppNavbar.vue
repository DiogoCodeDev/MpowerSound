<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
	<div>
		<nav class="flex w-full h-16 lg:mb-20 pt-18 justify-between items-center flex">
			<router-link data-aos="fade-right" data-aos-delay="200" to="/">
				<h1 class="2xl:text-[2.7rem] font-bold"> MPSound </h1>
			</router-link>
			<div data-aos="fade-right" data-aos-delay="400" class="flex w-8/12 2xl:text-[0.8rem]">
				<ul class="flex lg:ml-12 w-10/12 -mt-2 justify-between">
					<li>Home</li>
					<li>Produtos</li>
					<li>Empresa</li>
					<li>Suporte</li>
					<li>Redes Sociais</li>
				</ul>
			</div>
			<img
				src="../assets/img/icons/user-icon.webp"
				alt="Camisa de mockup"
				class="object-contain lg:mr-14 h-[15px] md:h-[15px] lg:h-[20px] xl:h-[23px] 2xl:h-[23px]"
				loading="lazy"
				data-aos="fade-right"
				data-aos-delay="400"
			/>
		</nav>
	</div>
</template>
