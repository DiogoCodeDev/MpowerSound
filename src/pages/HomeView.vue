<script setup>
import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";
import HomeProducts from "../components/HomeProducts.vue";
</script>

<template>
	<div
		id="container"
		class="relative w-full min-h-screen max-w-full overflow-hidden overflow-x-hidden flex flex-col text-white before:absolute before:inset-0 before:bg-black before:opacity-75 tracking-wide"
		>
		<img
			src="/mpower-sound-bg.webp"
			alt="Background Mpower Sound"
			class="fixed top-0 left-0 w-full h-full object-cover -z-10"
		/>
		<AppHeader class="z-50 px-7 md:px-20 lg:px-32" />

		<main class="z-10 flex flex-col">
			<HomeProducts/>
		</main>

		<AppFooter/>
	</div>
</template>

<style scoped></style>
