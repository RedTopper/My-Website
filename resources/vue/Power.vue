<template>
	<div class="screen">
		<div class="power">
			<div class="button" v-on:click="power">
				<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 489.888 489.888">
					<path d="M25.383,290.5c-7.2-77.5,25.9-147.7,80.8-192.3c21.4-17.4,53.4-2.5,53.4,25l0,0c0,10.1-4.8,19.4-12.6,25.7
						c-38.9,31.7-62.3,81.7-56.6,136.9c7.4,71.9,65,130.1,136.8,138.1c93.7,10.5,173.3-62.9,173.3-154.5c0-48.6-22.5-92.1-57.6-120.6
						c-7.8-6.3-12.5-15.6-12.5-25.6l0,0c0-27.2,31.5-42.6,52.7-25.6c50.2,40.5,82.4,102.4,82.4,171.8c0,126.9-107.8,229.2-236.7,219.9
						C122.183,481.8,35.283,396.9,25.383,290.5z M244.883,0c-18,0-32.5,14.6-32.5,32.5v149.7c0,18,14.6,32.5,32.5,32.5
						s32.5-14.6,32.5-32.5V32.5C277.383,14.6,262.883,0,244.883,0z"/>
				</svg>
			</div>
			<div class="help">Tap to boot</div>
			<div class="help-small">or press any key</div>
		</div>

		<div class="skip" v-on:click="skip">
			<div class="button">
				<svg xmlns="http://www.w3.org/2000/svg"x="0px" y="0px" viewBox="0 0 492.004 492.004">
					<path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
						c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
						c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
						c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>
				</svg>
			</div>
			<div class="help-small">or skip...</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Power",
	methods: {
		power: function () {
			this.$emit('power');
		},
		skip: function () {
			this.$emit('skip');
		}
	}
}
</script>

<style lang="sass" scoped>
.screen
	height: 100%
	display: flex
	text-align: center
	justify-content: center
	align-items: center
	color: white
	position: relative

.power
	width: 128px
	height: 128px

.skip
	position: absolute
	left: 0
	bottom: 0

.skip svg
	width: 32px
	margin-bottom: 5px

.button
	stroke: grey
	fill: grey

.button svg:hover
	stroke: white
	fill: white

.help
	margin-top: 10px

.help-small
	font-size: 10px
</style>
