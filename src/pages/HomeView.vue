<script setup>
import AppHeader from "../components/AppHeader.vue";
// import AppFooter from "../components/AppFooter.vue";
</script>

<template>
	<div
		id="container"
		class="relative w-full min-h-screen overflow-x-hidden flex flex-col gap-20 lg:gap-32 text-white before:absolute before:inset-0 before:bg-black before:opacity-75 tracking-wide"
	>
		<img
			src="/mpower-sound-bg.webp"
			alt="Background Mpower Sound"
			class="fixed top-0 left-0 w-full h-full object-cover -z-10"
		/>
		<AppHeader class="z-10 px-7 md:px-20 lg:px-40 xl:px-[8%] 2xl:px-[10%]" />

		<main class="z-10 flex flex-col gap-20 lg:gap-32">
			<div class="w-full h-96 bg-white">

			</div>
		</main>

		<!-- <AppFooter class="z-10 px-7 md:px-20 lg:px-40 xl:px-[8%] 2xl:px-[10%]s" /> -->
	</div>
</template>

<style scoped></style>
