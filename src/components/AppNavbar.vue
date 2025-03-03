<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const toggleMenu = () => {
	isMenuOpen.value = !isMenuOpen.value;
};

const isMenuOpen = ref(false);

</script>

<template>
	<div>
		<nav class="flex w-full h-16 mb-14 lg:mb-20 pt-18 justify-between items-center flex">
			<router-link data-aos="fade-right" data-aos-delay="200" to="/">
				<h1 class="text-[2.1rem] 2xl:text-[2.7rem] font-bold"> MPSound </h1>
			</router-link>

			<!-- Menu Desktop -->
			<div data-aos="fade-right" data-aos-delay="400" class="hidden lg:flex w-8/12 2xl:text-[0.8rem]">
				<ul class="flex lg:ml-12 w-10/12 -mt-2 justify-between">
					<li :class="{ 'text-yellow-400': route.path === '/' }">
						<router-link to="/">Home</router-link>
					</li>
					<li :class="{ 'text-yellow-400': route.path === '/produtos' }">
						<router-link to="/produtos">Produtos</router-link>
					</li>
					<li :class="{ 'text-yellow-400': route.path === '/empresa' }">
						<router-link to="/empresa">Empresa</router-link>
					</li>
					<li :class="{ 'text-yellow-400': route.path === '/suporte' }">
						<router-link to="/suporte">Suporte</router-link>
					</li>
					<li :class="{ 'text-yellow-400': route.path === '/redes-sociais' }">
						<router-link to="/redes-sociais">Redes Sociais</router-link>
					</li>
				</ul>
			</div>

			<img src="../assets/img/icons/user-icon.webp" alt="Camisa de mockup"
				class="object-contain hidden lg:flex lg:mr-14 h-[15px] md:h-[15px] lg:h-[20px] xl:h-[23px] 2xl:h-[23px]"
				loading="lazy" data-aos="fade-right" data-aos-delay="400" />

			<!-- Menu Mobile -->
			<div data-aos="fade-right" class="relative z-50">
				<button @click="toggleMenu" class="lg:hidden flex flex-col items-center absolute -mt-2 right-0 top-0">
					<span class="block w-9 h-1 rounded bg-white mb-1"></span>
					<span class="block w-9 h-1 rounded bg-white mb-1"></span>
					<span class="block w-9 h-1 rounded bg-white mb-1"></span>
				</button>

				<transition enter-active-class="transition-opacity duration-300 ease-out transform origin-top scale-90"
					enter-from-class="opacity-0 scale-90" enter-to-class="opacity-100 scale-100"
					leave-active-class="transition-opacity duration-300 ease-in transform origin-top scale-100"
					leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-100">
					<ul v-show="isMenuOpen"
						class="absolute w-64 text-white right-0 top-5 bg-neutral-800 shadow-md rounded p-4 flex flex-col space-y-2 z-50">
						<li class="mt-1" :class="{ 'text-yellow-400': route.path === '/' }">
							<router-link to="/">Home</router-link>
						</li>
						<li class="my-3" :class="{ 'text-yellow-400': route.path === '/produtos' }">
							<router-link to="/produtos">Produtos</router-link>
						</li>
						<li class="my-3" :class="{ 'text-yellow-400': route.path === '/empresa' }">
							<router-link to="/empresa">Empresa</router-link>
						</li>
						<li class="my-3" :class="{ 'text-yellow-400': route.path === '/suporte' }">
							<router-link to="/suporte">Suporte</router-link>
						</li>
						<li class="mt-3 mb-1" :class="{ 'text-yellow-400': route.path === '/redes-sociais' }">
							<router-link to="/redes-sociais">Redes Sociais</router-link>
						</li>
					</ul>
				</transition>
			</div>
		</nav>
	</div>
</template>
