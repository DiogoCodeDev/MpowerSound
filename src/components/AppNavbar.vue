<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const isNavbarFixed = ref(false);
const navbarRef = ref(null);
const initialOffset = ref(0);
const navbarHeight = ref(0);
const isSubmenuOpen = ref(false);
const isProdutosOpen = ref(false);
const submenuTimeout = ref(null);

const handleScroll = () => {
	isNavbarFixed.value = window.scrollY > initialOffset.value;
};

onMounted(() => {
	if (navbarRef.value) {
		initialOffset.value = navbarRef.value.offsetTop;
		navbarHeight.value = navbarRef.value.offsetHeight;
	}
	window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
	window.removeEventListener("scroll", handleScroll);
});

const toggleMenu = () => {
	isMenuOpen.value = !isMenuOpen.value;
	if (!isMenuOpen.value) {
		isProdutosOpen.value = false;
	}
};

const toggleProdutos = () => {
	isProdutosOpen.value = !isProdutosOpen.value;
}

const notFixeNavBar = () =>  {
	isNavbarFixed.value = false;
}

const handleMouseEnter = () => {
	if (submenuTimeout.value) {
		clearTimeout(submenuTimeout.value);
	}
	isSubmenuOpen.value = true;
};

const handleMouseLeave = () => {
	submenuTimeout.value = setTimeout(() => {
		isSubmenuOpen.value = false;
	}, 300);
};

const isMenuOpen = ref(false);
</script>

<template>
	<div ref="navbarRef" class="z-50" :class="{ 'navbar-fixed': isNavbarFixed, 'navbar-default': !isNavbarFixed }"
		:style="!isNavbarFixed ? '' : 'transition: none;'">
		<nav :class="!isNavbarFixed ? 'w-full mb-10 lg:mb-20 pt-12 lg:pt-12' : 'w-full px-7 lg:px-32 py-4 lg:py-4 xl:py-2'"
			class="justify-between items-center flex">
			<router-link data-aos="fade-right" data-aos-delay="200" to="/">
				<h1 :class="isNavbarFixed ? 'text-[1.8rem] xl:text-[2.3rem] lg:mr-6' : 'text-[2.1rem] xl:text-[2.7rem] '"
					class="font-bold"> MPSound </h1>
			</router-link>

			<!-- Menu Desktop -->
			<div data-aos="fade-right" data-aos-delay="400"
				class="hidden lg:flex w-8/12 lg:w-12/12 xl:w-8/12 lg:text-[0.8rem]">
				<ul :class="!isNavbarFixed ? '-mt-2' : 'mt-1'" class="flex lg:ml-12 w-11/12 justify-between">
					<li class="w-24 h-7 flex items-center justify-center"
						:class="{ 'text-yellow-400 font-bold': route.path === '/', 'mr-1': isNavbarFixed }">
						<router-link @click="notFixeNavBar" to="/">Home </router-link>
					</li>
					<li :class="{ 'text-yellow-400 font-bold ': route.path === '/produtos', 'bg-[#111111] rounded': isSubmenuOpen }"
						class="w-24 h-7 ml-4 flex items-center justify-center" @mouseenter="handleMouseEnter"
						@mouseleave="handleMouseLeave">
						<router-link @click="notFixeNavBar" to="/produtos">Produtos</router-link>
						<span class="ml-3 text-xs cursor-pointer transform transition-transform duration-300"
							:class="{ 'rotate-180': isSubmenuOpen }">▼</span>
						<ul v-if="isSubmenuOpen" :class="isNavbarFixed ? 'mt-72' : 'mt-62'"
							style="background-color: #111111;"
							class="absolute w-56 shadow-md rounded mr-1 p-2 space-y-2">
							<li class="w-72 ml-1 pt-2 pb-1">
								<router-link @click="notFixeNavBar" to="/produtos/produto1"
									class="text-white hover:ml-1 duration-150 ease-in-out"> • &nbsp;
									&nbsp;Amplificadores de
									Pôtencia</router-link>
							</li>
							<li class="w-72 ml-1 py-1">
								<router-link @click="notFixeNavBar" to="/produtos/produto2"
									class="text-white hover:ml-1 duration-150 ease-in-out"> • &nbsp; &nbsp;Mesas de
									Som</router-link>
							</li>
							<li class="w-72 ml-1 py-1">
								<router-link @click="notFixeNavBar" to="/produtos/produto3"
									class="text-white hover:ml-1 duration-150 ease-in-out"> • &nbsp; &nbsp;Caixas
									Acústicas
									Ativas</router-link>
							</li>
							<li class="w-72 ml-1 py-1">
								<router-link @click="notFixeNavBar" to="/produtos/produto4"
									class="text-white hover:ml-1 duration-150 ease-in-out"> • &nbsp; &nbsp;Caixas
									Multiuso </router-link>
							</li>
							<li class="w-72 ml-1 py-1">
								<router-link @click="notFixeNavBar" to="/produtos/produto5"
									class="text-white hover:ml-1 duration-150 ease-in-out"> • &nbsp; &nbsp;Amplificador
									Compacto</router-link>
							</li>
							<li class="w-72 ml-1 pt-1 pb-2">
								<router-link @click="notFixeNavBar" to="/produtos/produto6"
									class="text-white hover:ml-1 duration-150 ease-in-out"> • &nbsp; &nbsp;Mixer
									Amplificado</router-link>
							</li>
						</ul>
					</li>
					<li class="w-24 h-7 ml-3 flex items-center justify-center"
						:class="{ 'text-yellow-400 font-bold ': route.path === '/empresa' }">
						<router-link @click="notFixeNavBar" to="/empresa">Empresa</router-link>
					</li>
					<li class="w-24 h-7 flex items-center justify-center"
						:class="{ 'text-yellow-400 font-bold ': route.path === '/suporte' }">
						<router-link @click="notFixeNavBar" to="/suporte">Suporte</router-link>
					</li>
					<li class="w-24 lg:w-32 h-7 flex items-center justify-center"
						:class="{ 'text-yellow-400 font-bold ': route.path === '/redes-sociais' }">
						<router-link @click="notFixeNavBar" to="/redes-sociais">Redes Sociais</router-link>
					</li>
				</ul>
			</div>

			<img src="../assets/img/icons/user-icon.webp" alt="Ícone de usuário"
				class="object-contain hidden lg:flex lg:ml-8 -mt-1 h-[15px] md:h-[15px] lg:h-[20px] xl:h-[23px] 2xl:h-[23px]"
				loading="lazy" data-aos="fade-right" data-aos-delay="400" />

			<!-- Menu Mobile -->
			<div data-aos="fade-right" class="relative z-50">
				<button @click="toggleMenu"
					class="lg:hidden flex flex-col items-center absolute -mt-2 right-1 top-0 transition-all duration-300"
					:class="{ 'open': isMenuOpen, 'right-0': isNavbarFixed }">
					<span class="block w-9 h-1 rounded bg-white mb-1 transition-all duration-300"
						:class="{ 'rotate-45 w-4 translate-y-2': isMenuOpen }"></span>
					<span class="block w-9 h-1 rounded bg-white mb-1 transition-all duration-300"
						:class="{ 'opacity-0': isMenuOpen }"></span>
					<span class="block w-9 h-1 rounded bg-white mb-1 transition-all duration-300"
						:class="{ '-rotate-45 w-4 -translate-y-2': isMenuOpen }"></span>
				</button>

				<transition enter-active-class="transition-opacity duration-300 ease-out transform origin-top scale-90"
					enter-from-class="opacity-0 scale-90" enter-to-class="opacity-100 scale-100"
					leave-active-class="transition-opacity duration-300 ease-in transform origin-top scale-100"
					leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-100">
					<ul v-show="isMenuOpen"
						class="absolute w-80 text-white -right-4 top-9 bg-[#111111] shadow-md rounded p-4 flex flex-col space-y-2 z-50">
						<li class="mt-1" :class="{ 'text-yellow-400 font-bold ': route.path === '/' }">
							<router-link @click="notFixeNavBar" to="/">Home</router-link>
						</li>

						<li class="my-3">
							<button @click="toggleProdutos"
								class="flex items-center justify-between w-full text-left text-white">
								<span :class="{ 'text-yellow-400 font-bold ': route.path.startsWith('/produtos') }">Produtos</span>
								<span class="ml-2 transform transition-transform duration-300"
									:class="{ 'rotate-180': isProdutosOpen }">▼</span>
							</button>
							<transition name="slide">
								<ul v-show="isProdutosOpen" class="ml-4 mt-2 space-y-1">
									<li class="h-10 mt-4 flex items-center text-sm"><router-link @click="notFixeNavBar" to="/produtos/produto1"
											class="text-white hover:ml-1 duration-150 ease-in-out"> • &nbsp;
											Amplificadores de
											Potência</router-link></li>
									<li class="h-10 flex items-center text-sm"><router-link @click="notFixeNavBar" to="/produtos/produto2"
											class="text-white hover:ml-1 duration-150 ease-in-out"> • &nbsp; Mesas de
											Som</router-link></li>
									<li class="h-10 flex items-center text-sm"><router-link @click="notFixeNavBar" to="/produtos/produto3"
											class="text-white hover:ml-1 duration-150 ease-in-out"> • &nbsp; Caixas
											Acústicas
											Ativas</router-link></li>
									<li class="h-10 flex items-center text-sm"><router-link @click="notFixeNavBar" to="/produtos/produto4"
											class="text-white hover:ml-1 duration-150 ease-in-out"> • &nbsp; Caixas
											Multiuso</router-link></li>
									<li class="h-10 flex items-center text-sm"><router-link @click="notFixeNavBar" to="/produtos/produto5"
											class="text-white hover:ml-1 duration-150 ease-in-out"> • &nbsp;
											Amplificador
											Compacto</router-link></li>
									<li class="h-10 flex items-center text-sm"><router-link @click="notFixeNavBar" to="/produtos/produto6"
											class="text-white hover:ml-1 duration-150 ease-in-out"> • &nbsp; Mixer
											Amplificado</router-link></li>
								</ul>
							</transition>
						</li>
						<li class="my-3" :class="{ 'text-yellow-400 font-bold ': route.path === '/empresa' }">
							<router-link @click="notFixeNavBar" to="/empresa">Empresa</router-link>
						</li>
						<li class="my-3" :class="{ 'text-yellow-400 font-bold ': route.path === '/suporte' }">
							<router-link @click="notFixeNavBar" to="/suporte">Suporte</router-link>
						</li>
						<li class="mt-3 mb-1" :class="{ 'text-yellow-400 font-bold ': route.path === '/redes-sociais' }">
							<router-link @click="notFixeNavBar" to="/redes-sociais">Redes Sociais</router-link>
						</li>
					</ul>
				</transition>
			</div>

		</nav>
	</div>

	<div v-if="isNavbarFixed" :style="{ height: navbarHeight + 'px' }"></div>

</template>

<style scoped>
.transition-navbar {
	transition: all 0.7s ease-in-out;
}

.navbar-default {
	position: relative;
	opacity: 1;
	width: 100%;
	transform: translateY(0);
}

.navbar-fixed {
	position: fixed;
	display: flex;
	justify-content: center;
	top: 0;
	z-index: 50;
	left: 0;
	width: 100%;
	background-color: #111111;
	box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
	opacity: 1;
	transform: translateY(0);
}

.slide-enter-active,
.slide-leave-active {
	transition: all 0.3s ease-in-out;
	max-height: 300px;
	opacity: 1;
}

.slide-enter,
.slide-leave-to {
	max-height: 0;
	opacity: 0;
	overflow: hidden;
}
</style>
