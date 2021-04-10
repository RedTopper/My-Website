<template>
	<div class="splash">
		<img class="logo" src="/img/splash.png" alt="splash">

		<div class="load" v-bind:style="{display: load ? null : 'none'}">
			<svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff" style="background-color: black;">
				<g fill="none" fill-rule="evenodd">
					<g transform="translate(1 1)" stroke-width="2">
						<circle stroke-opacity=".5" cx="18" cy="18" r="18"/>
						<path d="M36 18c0-9.94-8.06-18-18-18">
							<animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"/>
						</path>
					</g>
				</g>
			</svg>
		</div>
	</div>
</template>

<script lang="ts">
export default {
	name: "Splash",
	props: ["load"]
}
</script>

<style lang="sass" scoped>
.splash
	color: white
	position: relative
	width: 100%
	height: 100%

.logo
	position: absolute
	top: 90px
	left: 50%
	transform: translate(-50%, 0)
	display: block
	width: 100%
	max-width: 384px

.load
	position: absolute
	bottom: 120px
	left: 50%
	transform: translate(-50%, 0)

@media screen and (max-height: 500px)
	.splash
		top: 20px
</style>