<template>
	<div class="bios">
		<img class="splash" src="/img/splash.png" alt="splash">
		<div class="bottom">
			<div class="progress">
				<div>
					<span class="text">Starting</span>
				</div>
				<div class="background">
					<div class="filled" v-bind:style="{width: percent}"></div>
				</div>
			</div>
			<div class="help">Press F2 to enter SETUP, F12 for Network Boot, ESC for Boot Menu</div>
		</div>
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
	position: absolute
	top: 120px
	left: 50%
	transform: translate(-50%, 0)
	display: block
	width: 100%
	max-width: 384px

.progress
	display: flex
	flex-direction: row
	margin: auto

.progress .text
	flex: 0 0 auto
	margin-right: 10px

.progress .background
	height: 20px
	background-color: grey
	flex: 1 0 auto

.progress .filled
	height: 100%
	width: 0
	background-color: white

.bottom
	position: absolute
	bottom: 120px
	left: 50%
	transform: translate(-50%, 0)
	width: 100%
	max-width: 500px
	box-sizing: border-box
	padding: 0 20px

.help
	font-size: 10px
	padding-top: 8px
	text-align: center

.code
	position: absolute
	right: 0
	bottom: 0

@media screen and (max-height: 500px)
	.splash
		top: 20px

	.bottom
		bottom: 20px

</style>