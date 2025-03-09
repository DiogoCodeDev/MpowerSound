<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
	<footer
		:style="{ backgroundColor: 'rgba(0, 0, 0, 0.55)' }"
		class="w-full flex flex-col justify-center items-center lg:justify-between lg:flex-row lg:h-96 py-12 lg:py-12 lg:px-32 z-10">
		<div class="w-80 md:w-96 flex flex-col md:items-center lg:w-1/3">
			<div class="w-76 lg:w-full">
				<router-link data-aos="fade-right" to="/">
					<h1 class="text-[2.6rem] xl:text-[2.7rem] font-bold mb-6 mt-4 lg:mt-0"> MPSound </h1>
				</router-link>
				<p data-aos="fade-up" class="text-[0.9rem] lg:text-xs mb-16">
					Rua Altino Arantes, 717, Jardim das Bandeiras, Campinas/SP <br class="hidden md:flex lg:hidden xl:flex">
					CEP 13051-110
				</p>
				<p data-aos="fade-up" data-aos-offset="50" class="text-sm hidden lg:flex lg:text-[0.6rem] text-white mb-12 lg:mb-4">
					© 2025 MPowerSound. Todos os direitos reservados.
				</p>
			</div>
		</div>
		<div class="w-80 md:w-96 flex flex-col justify-center md:items-center lg:items-center lg:w-1/3 mb-10 lg:mb-0">
			<div class="w-72 lg:w-32">
				<h3 data-aos="fade-right" class="text-xl mb-12 font-black uppercase">Nosso Site</h3>
				<ul>
					<li data-aos="fade-up" :class="{ 'text-yellow-400 canva-weight-800': route.path === '/' }" class="mb-8 canva-weight-500 lg:mb-4 cursor-pointer transition-all duration-150 ease-in-out text-lg lg:text-sm">
						<router-link @click="notFixeNavBar" to="/">Home</router-link></li>
					<li data-aos="fade-up" :class="{ 'text-yellow-400 canva-weight-800': route.path === '/produtos' }" class="mb-8 canva-weight-500 lg:mb-4 cursor-pointer transition-all duration-150 ease-in-out text-lg lg:text-sm">
						<router-link @click="notFixeNavBar" to="/produtos">Produtos</router-link></li>
					<li data-aos="fade-up" :class="{ 'text-yellow-400 canva-weight-800': route.path === '/empresa' }" class="mb-8 canva-weight-500 lg:mb-4 cursor-pointer transition-all duration-150 ease-in-out text-lg lg:text-sm">
						<router-link @click="notFixeNavBar" to="/empresa">Empresa</router-link></li>
					<li data-aos="fade-up" :class="{ 'text-yellow-400 canva-weight-800': route.path === '/suporte' }" class="mb-8 canva-weight-500 lg:mb-4 cursor-pointer transition-all duration-150 ease-in-out text-lg lg:text-sm">
						<router-link @click="notFixeNavBar" to="/suporte">Suporte</router-link></li>
				</ul>
			</div>
		</div>
		<div class="w-80 md:w-96 flex flex-col justify-center md:items-center lg:justify-start lg:w-1/3">
			<div>
				<h3 data-aos="fade-right" class="text-xl mb-12 lg:mb-10 lg:-mt-2 font-black uppercase">Redes Sociais</h3>
				<div class="flex w-72 lg:w-full justify-between">
					<img data-aos="fade-up" alt="icon facebook" class="h-9 lg:h-7" src="../assets/img/icons/facebook-icon.webp"/>
					<img data-aos="fade-up" alt="icon whatsapp" class="h-9 lg:h-7 ml-3 lg:ml-2 mb-28" src="../assets/img/icons/wpp-icon.webp"/>
					<img data-aos="fade-up" alt="icon instagram" class="h-9 lg:h-7" src="../assets/img/icons/instagram-icon.webp"/>
				</div>
				<p data-aos="fade-up" data-aos-offset="50" class="text-[0.74rem] flex lg:hidden lg:text-xs text-white mb-16">
					© 2025 MPowerSound. Todos os direitos reservados.
				</p>
			</div>
		</div>
	</footer>
</template>
