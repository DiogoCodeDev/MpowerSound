<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const isNavbarFixed = ref(false);
const navbarRef = ref(null);
const initialOffset = ref(0);
const navbarHeight = ref(0);
const isSubmenuOpen = ref(false);
const isSubmenuSocialMediaOpen = ref(false);
const isProdutosOpen = ref(false);
const isProdutosRedesOpen = ref(false);
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

const toggleRedes = () => {
	isProdutosRedesOpen.value = !isProdutosRedesOpen.value;
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
	}, 150);
};

const handleMouseSocialEnter = () => {
	if (submenuTimeout.value) {
		clearTimeout(submenuTimeout.value);
	}
	isSubmenuSocialMediaOpen.value = true;
};

const handleMouseSocialLeave = () => {
	submenuTimeout.value = setTimeout(() => {
		isSubmenuSocialMediaOpen.value = false;
	}, 150);
};

const isMenuOpen = ref(false);
</script>

<template>
	<div ref="navbarRef" class="z-50" :class="{ 'navbar-fixed': isNavbarFixed, 'navbar-default': !isNavbarFixed }"
		:style="!isNavbarFixed ? '' : 'transition: none;'">
		<nav :class="!isNavbarFixed ? 'w-full mb-10 lg:mb-20 pt-12 lg:pt-12' : 'w-full px-7 md:px-20 lg:px-32 py-4 lg:py-4 xl:py-2'"
			class="justify-between items-center flex">
			<router-link data-aos="fade-right" data-aos-delay="200" to="/">
				<!-- <h1 :class="isNavbarFixed ? 'text-[1.8rem] xl:text-[2.3rem] lg:mr-6' : 'text-[2.1rem] xl:text-[2.7rem] '"
					class="font-bold"> MPSound </h1> -->
				<img data-aos="fade-up" alt="icon criadores do site" class="h-8 lg:h-7 mb-4 mt-4 lg:mb-4 cursor-pointer" src="../assets/img/icons/m-power-logo-white.webp"/>
			</router-link>

			<!-- Menu Desktop -->
			<div data-aos="fade-right" data-aos-delay="400"
				class="hidden lg:flex w-8/12 lg:w-12/12 xl:w-8/12 lg:text-[0.8rem]">
				<ul :class="!isNavbarFixed ? '-mt-2' : 'mt-1'" class="flex lg:ml-12 w-11/12 justify-between">
					<li class="font-normal tracking-wider w-24 h-7 flex items-center justify-center"
						:class="{ 'text-yellow-400 font-semibold': route.path === '/', 'mr-1': isNavbarFixed }">
						<router-link @click="notFixeNavBar" to="/">Home </router-link>
					</li>
					<li :class="{ 'text-yellow-400 font-semibold ': (route.path === '/produtos' || route.path.includes('/product')), 'bg-[#090909] rounded': isSubmenuOpen }"
						class="w-24 h-7 font-normal tracking-wider ml-4 flex items-center justify-center" @mouseenter="handleMouseEnter"
						@mouseleave="handleMouseLeave">
						<router-link @click="notFixeNavBar" to="/product-gallery?all">Produtos</router-link>
						<span class="ml-3 text-xs cursor-pointer transform transition-transform duration-300"
							:class="{ 'rotate-180': isSubmenuOpen }">▼</span>
						<ul v-if="isSubmenuOpen" :class="isNavbarFixed ? 'mt-44' : 'mt-36'"
							style="background-color: #090909;"
							class="absolute w-64 shadow-md rounded mr-1 p-2 space-y-2">
							<li class="font-normal tracking-wider w-72 ml-1 pt-2 pb-1">
								<router-link @click="notFixeNavBar" to="/product-gallery?all"
									class="text-white hover:ml-1 duration-150 ease-in-out"> •&nbsp;
									Caixas Amplificadoras Multi-uso</router-link>
							</li>
							<li class="font-normal tracking-wider w-72 ml-1 py-1">
								<router-link @click="notFixeNavBar" to="/product-gallery?all"
									class="text-white hover:ml-1 duration-150 ease-in-out"> • &nbsp;
									Amplificadores de Potência</router-link>
							</li>
							<li class="font-normal tracking-wider w-72 ml-1 py-1">
								<router-link @click="notFixeNavBar" to="/product-gallery?all"
									class="text-white hover:ml-1 duration-150 ease-in-out"> • &nbsp;Caixas
									Kits M power Sound
								</router-link>
							</li>
						</ul>
					</li>
					<li class="font-normal tracking-wider w-24 h-7 ml-3 flex items-center justify-center"
						:class="{ 'text-yellow-400 font-semibold ': route.path === '/empresa' }">
						<router-link @click="notFixeNavBar" to="/empresa">Empresa</router-link>
					</li>
					<li class="font-normal tracking-wider w-24 h-7 flex items-center justify-center"
						:class="{ 'text-yellow-400 font-semibold ': route.path === '/suporte' }">
						<router-link @click="notFixeNavBar" to="/suporte">Suporte</router-link>
					</li>
					<li :class="{ 'text-yellow-400 font-semibold ': route.path === '/redes', 'bg-[#090909] rounded': isSubmenuSocialMediaOpen }"
						class="w-32 font-normal tracking-wider h-7 ml-4 flex items-center text-[0.75rem] justify-center" @mouseenter="handleMouseSocialEnter"
						@mouseleave="handleMouseSocialLeave">
						<router-link @click="notFixeNavBar" to="/redes-sociais">Redes Sociais</router-link>
						<span class="ml-3 text-xs cursor-pointer transform transition-transform duration-300"
							:class="{ 'rotate-180': isSubmenuSocialMediaOpen }">▼</span>
						<ul v-if="isSubmenuSocialMediaOpen" :class="isNavbarFixed ? 'mt-40' : 'mt-34'"
							style="background-color: #090909;"
							class="absolute w-56 shadow-md rounded mr-1 p-2 space-y-2">
							<li class="font-normal tracking-wider w-72 ml-1 pt-2 pb-1">
								<router-link @click="notFixeNavBar" to="/product-gallery?all"
									class="text-white hover:ml-1 duration-150 ease-in-out"> •
									&nbsp;Mercado Livre</router-link>
							</li>
							<li class="font-normal tracking-wider w-72 ml-1 py-1">
								<router-link @click="notFixeNavBar" to="/product-gallery?all"
									class="text-white hover:ml-1 duration-150 ease-in-out"> • &nbsp;Instagram</router-link>
							</li>
							<li class="font-normal tracking-wider w-72 ml-1 py-1">
								<router-link @click="notFixeNavBar" to="/product-gallery?all"
									class="text-white hover:ml-1 duration-150 ease-in-out"> • &nbsp;WhatsApp</router-link>
							</li>
						</ul>
					</li>
				</ul>
			</div>

			<img src="../assets/img/icons/shop-icon.webp" alt="Ícone de usuário"
				class="object-contain hidden lg:flex lg:ml-8 -mt-0.5 shop-iconh-[19px] md:h-[19px] lg:h-[24px] xl:h-[28px] 2xl:h-[28px]"
				loading="lazy" data-aos="fade-right" data-aos-delay="400" />

			<!-- Menu Mobile -->
			<div data-aos="fade-right" class="relative z-50">
				<button aria-label="btn-produtos" @click="toggleMenu"
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
						class="absolute w-88 font-bold text-white -right-4 top-9 bg-[#090909] shadow-md rounded p-4 flex flex-col space-y-2 z-50">
						<li class="font-normal tracking-wider mt-2 mb-2 flex text-[1.15rem]" :class="{ 'text-yellow-400 font-semibold ': route.path === '/' }">	
							<img class="h-[1.15rem] mt-0.5 mr-3" src="../assets/img/icons/home.webp" alt="Ícone home, página inicial">
							<router-link @click="notFixeNavBar" to="/">Home</router-link>
						</li>

						<li class="font-normal tracking-wider my-4">
							<button @click="toggleProdutos"
								aria-label="btn-produtos"
								class="flex items-center justify-start w-full text-left text-white text-[1.15rem]">
								<img class="h-5 mr-[0.85rem]" src="../assets/img/icons/products.webp" alt="Ícone produtos, página de produtos">
								<span class="mr-42" :class="{ 'text-yellow-400 font-semibold ': route.path.startsWith('/produtos') }">Produtos</span>
								<span class="ml-2 transform transition-transform duration-300"
									:class="{ 'rotate-180': isProdutosOpen }">▼</span>
							</button>
							<transition name="slide">
								<ul v-show="isProdutosOpen" class="ml-3 mt-2 space-y-1">
									<li class="font-normal tracking-wider h-10 mt-4 text-[1.05rem] flex items-center text-sm">									
										<router-link @click="notFixeNavBar" to="/product-gallery?all"
											class="text-white hover:ml-1 duration-150 ease-in-out"> • &nbsp;
											Caixas Amplificadoras Multi-uso</router-link></li>
									<li class="font-normal tracking-wider h-10 flex text-[1.05rem] items-center text-sm"><router-link @click="notFixeNavBar" to="/product-gallery?all"
											class="text-white hover:ml-1 duration-150 ease-in-out"> • &nbsp; Amplificadores de Potência</router-link></li>
									<li class="font-normal tracking-wider h-10 flex text-[1.05rem] items-center text-sm"><router-link @click="notFixeNavBar" to="/product-gallery?all"
											class="text-white hover:ml-1 duration-150 ease-in-out"> • &nbsp; Kits M power Sound</router-link></li>
								</ul>
							</transition>
						</li>
						<li class="font-normal tracking-wider my-4 flex text-[1.15rem]" :class="{ 'text-yellow-400 font-semibold ': route.path === '/empresa' }">
							<img class="h-6 ml-0.5 mr-[0.65rem]" src="../assets/img/icons/empresa.webp" alt="Ícone empresa, página sobre nós">
							<router-link @click="notFixeNavBar" to="/empresa">Empresa</router-link>
						</li>
						<li class="font-normal tracking-wider my-4 flex text-[1.15rem]" :class="{ 'text-yellow-400 font-semibold ': route.path === '/suporte' }">
							<img class="h-[1.35rem] ml-0.5 mt-0.5 mr-3" src="../assets/img/icons/suporte.webp" alt="Ícone suporte, página fale conosco">
							<router-link @click="notFixeNavBar" to="/suporte">Suporte</router-link>
						</li>
						<li class="font-normal tracking-wider my-4">
							<button @click="toggleRedes"
								aria-label="btn-produtos"
								class="flex items-center justify-start w-full text-left text-white text-[1.15rem]">
								<img class="h-5 mr-[0.85rem]" src="../assets/img/icons/products.webp" alt="Ícone produtos, página de produtos">
								<span class="mr-32 font-normal tracking-wider" :class="{ 'text-yellow-400 font-semibold ': route.path.startsWith('/produtos') }">Redes Sociais</span>
								<span class="ml-2 transform transition-transform duration-300"
									:class="{ 'rotate-180': isProdutosRedesOpen }">▼</span>
							</button>
							<transition name="slide">
								<ul v-show="isProdutosRedesOpen" class="ml-3 mt-2 space-y-1">
									<li class="font-normal tracking-wider h-10 mt-4 text-[1.05rem] flex items-center text-sm">									
										<router-link @click="notFixeNavBar" to="/product-gallery?all"
											class="text-white hover:ml-1 duration-150 ease-in-out"> • &nbsp;
											Mercado Livre</router-link></li>
									<li class="font-normal tracking-wider h-10 flex text-[1.05rem] items-center text-sm"><router-link @click="notFixeNavBar" to="/product-gallery?all"
											class="text-white hover:ml-1 duration-150 ease-in-out"> • &nbsp; 
											Instagram</router-link></li>
									<li class="font-normal tracking-wider h-10 flex text-[1.05rem] items-center text-sm"><router-link @click="notFixeNavBar" to="/product-gallery?all"
											class="text-white hover:ml-1 duration-150 ease-in-out"> • &nbsp;
											WhatsApp</router-link></li>
								</ul>
							</transition>
						</li>
					</ul>
				</transition>
			</div>

		</nav>
	</div>

	<div :style="isNavbarFixed ? 'padding-top: ' + navbarHeight + 'px' : ''">
	</div>

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
	background-color: #090909;
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
