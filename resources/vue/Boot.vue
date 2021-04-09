<template>
	<div class="bios">
		<img class="splash" src="/img/splash.png" alt="splash">
		<div class="progress">
			<div>
				<span class="text">Starting</span>
			</div>
			<div class="background">
				<div class="filled" v-bind:style="{width: percent}"></div>
			</div>
		</div>
		<div class="help">Press F2 to enter SETUP, F12 for Network Boot, ESC for Boot Menu</div>
		<div class="code">{{ code }}</div>
	</div>
</template>

<script lang="ts">
export default {
	name: "Boot",
	props: ["code", "percent"]
}
</script>

<style lang="sass" scoped>
.bios
	color: white
	position: relative
	width: 100%
	height: 100%

.splash
	padding-top: 120px
	margin: 0 auto
	display: block

.progress
	display: flex
	flex-direction: row
	padding-top: 220px
	width: 100%
	max-width: 500px
	margin: auto

.text
	flex: 0 0 auto
	margin-right: 10px

.background
	width: 75%
	height: 20px
	background-color: grey
	flex: 1 0 auto

.filled
	height: 100%
	width: 0
	background-color: white

.help
	font-size: 10px
	padding-top: 8px
	text-align: center

.code
	position: absolute
	right: 0
	bottom: 0

</style>