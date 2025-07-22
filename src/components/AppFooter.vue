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
					<!-- <h1 class="text-[2.6rem] xl:text-[2.7rem] font-bold mb-6 mt-4 lg:mt-0"> MPSound </h1> -->
					 <img data-aos="fade-up" alt="icon criadores do site" class="h-10 lg:h-8 mb-8 lg:mb-8 cursor-pointer" src="../assets/img/icons/m-power-logo-white.webp"/>
				</router-link>
				<p data-aos="fade-up" class="text-[0.95rem] lg:text-xs mb-8">
					Rua Altino Arantes, 717, Jardim das Bandeiras, Campinas/SP <br class="hidden md:flex lg:hidden xl:flex">
					CEP 13051-110
				</p>
				<p data-aos="fade-up" class="text-[0.95rem] lg:text-[0.65rem] mb-8 lg:mb-2">
					Horário de funcionamento: Segunda a sexta, das 7h às 16:45h.
				</p>
				<p data-aos="fade-up" class="text-[0.95rem] lg:text-[0.65rem] mb-8 lg:mb-2">
					Contato: (19) 3227-6477
				</p>
				<p data-aos="fade-up" class="text-[0.95rem] lg:text-[0.65rem] mb-10">
					E-mail: megapowerindsom@gmail.com
				</p>
				<p data-aos="fade-up" data-aos-offset="50" class="text-sm hidden lg:flex lg:text-[0.6rem] text-white mb-12 lg:mb-4">
					© 2025 MPowerSound. Todos os direitos reservados.
				</p>
			</div>
		</div>
		<div class="w-80 md:w-96 flex flex-col justify-center md:items-center lg:items-center lg:w-1/3 mb-10 lg:mb-0">
			<div class="w-72 lg:w-32 lg:-mt-6">
				<h3 data-aos="fade-right" class="text-xl mb-8 font-black uppercase">Nosso Site</h3>
				<ul>
					<li data-aos="fade-up" :class="{ 'text-yellow-400 canva-weight-800': route.path === '/' }" class="mb-8 font-[500] tracking-wider lg:mb-4 cursor-pointer transition-all duration-150 ease-in-out text-lg lg:text-sm">
						<router-link to="/">Home</router-link></li>
					<li data-aos="fade-up" :class="{ 'text-yellow-400 canva-weight-800': (route.path === '/produtos' || route.path.includes('/product')) }" class="mb-8 font-[500] tracking-wider lg:mb-4 cursor-pointer transition-all duration-150 ease-in-out text-lg lg:text-sm">
						<router-link to="/product-gallery?alll">Produtos</router-link></li>
					<li data-aos="fade-up" :class="{ 'text-yellow-400 canva-weight-800': route.path === '/empresa' }" class="mb-8 font-[500] tracking-wider lg:mb-4 cursor-pointer transition-all duration-150 ease-in-out text-lg lg:text-sm">
						<router-link to="/empresa">Empresa</router-link></li>
					<li data-aos="fade-up" :class="{ 'text-yellow-400 canva-weight-800': route.path === '/suporte' }" class="mb-8 font-[500] tracking-wider lg:mb-4 cursor-pointer transition-all duration-150 ease-in-out text-lg lg:text-sm">
						<router-link to="/suporte">Suporte</router-link></li>
				</ul>
			</div>
		</div>
		<div class="w-80 md:w-96 flex flex-col justify-center md:items-center lg:justify-start lg:w-1/3">
			<div>
				<h3 data-aos="fade-right" class="text-xl mb-8 lg:mb-4 lg:mt-6 font-black uppercase">Contato</h3>
				<div class="flex w-72 lg:w-8/12 justify-between mb-4 lg:mb-3">
					<a href="https://lista.mercadolivre.com.br/_CustId_2290861308?item_id=MLB5394978766&category_id=MLB11507&seller_id=2290861308&client=recoview-selleritems&recos_listing=true#origin=vip&component=sellerData&typeSeller=classic" target="_blank" rel="noopener noreferrer">
						<img data-aos="fade-up" alt="icon mercado livre" class="h-9 cursor-pointer lg:h-5.5" src="../assets/img/icons/mercado-livre-logo.webp" />
					</a>
					<img data-aos="fade-up" alt="icon whatsapp" class="h-9 cursor-pointer lg:h-5.5 mb-12 lg:mb-2" src="../assets/img/icons/wpp-icon.webp"/>
					<img data-aos="fade-up" alt="icon instagram" class="h-9 cursor-pointer lg:h-5.5" src="../assets/img/icons/instagram-icon.webp"/>
				</div>
				<div class="w-full flex flex-col mb-14 py-4 lg:mb-4">
					<p data-aos="fade-up" data-aos-offset="50" class="text-[0.74rem] lg:text-[0.6rem] tracking-wider flex lg:text-xs text-white lg:mb-2 mb-4">
						Meios de Pagamento:
					</p>
					<div class="w-full flex">
						<img data-aos="fade-up" alt="icon criadores do site" class="h-8.5 lg:h-5.5 mr-4 lg:mr-2.5 cursor-pointer" src="/icons/master-card-icon.webp"/>
						<img data-aos="fade-up" alt="icon criadores do site" class="h-8 lg:h-5.5 mx-4 lg:mx-2.5 cursor-pointer" src="/icons/pix-icon.webp"/>
						<img data-aos="fade-up" alt="icon criadores do site" class="h-7.5 lg:h-5 mx-4 lg:mx-2.5 cursor-pointer" src="/icons/visa-icon.webp"/>
					</div>
				</div>
				<div class="w-full mb-14 lg:mb-0">
					<p data-aos="fade-up" data-aos-offset="50" class="text-[0.74rem] lg:text-[0.6rem] tracking-wider flex lg:text-xs text-white lg:mb-2 mb-6">
						Powered By:
					</p>
					<a href="https://dcodev.com.br/" target="_blank">
						<img data-aos="fade-up" alt="icon criadores do site" class="h-6 lg:h-4 mb-8 lg:mb-8 cursor-pointer" src="../assets/img/icons/dcodev-white_1.webp"/>
					</a>
				</div>
				<p data-aos="fade-up" data-aos-offset="50" class="text-[0.74rem] tracking-wider flex lg:hidden lg:text-xs text-white mb-4">
					© 2025 MPowerSound. Todos os direitos reservados.
				</p>
			</div>
		</div>
	</footer>
</template>
