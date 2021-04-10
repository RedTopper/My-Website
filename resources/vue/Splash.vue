<template>
	<div class="bios">
		<img class="splash" src="/img/splash.png" alt="splash">
	</div>
</template>

<script lang="ts">
export default {
	name: "Splash"
}
</script>

<style lang="sass" scoped>
.bios
	color: white
	position: relative
	width: 100%
	height: 100%

.splash
	position: absolute
	top: 120px
	left: 50%
	transform: translate(-50%, 0)
	display: block
	width: 100%
	max-width: 384px
</style>