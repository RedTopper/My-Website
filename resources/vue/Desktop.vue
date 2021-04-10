<template>
	<div class="desktop" v-bind:style="{backgroundImage: image}" v-bind:class="{fade: !!image}">
		<div class="window" v-bind:class="{min: min}" v-bind:style="{maxWidth: max ? null : '1024px', maxHeight: max ? null : '768px', display: close ? 'none' : null}">
			<div class="title" v-bind:class="{min: min}">
				<span class="name">Terminal</span>
				<div class="controls">
					<div class="min" v-on:click="min = !min">
						<svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
							<line stroke-width=".9" fill="none" shape-rendering="crispEdges" x1="1" y1="5.5" x2="11" y2="5.5"/>
						</svg>
					</div><div class="max" v-on:click="max = !max">
					<svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
						<rect stroke-width=".9" fill="none" x="1.5" y="1.5" width="9" height="9"/>
					</svg>
					</div><div class="close" v-on:click="close = true">
						<svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
							<path stroke-width=".9" fill="none" d="M1,1 l 10,10 M1,11 l 10,-10"/>
						</svg>
					</div>
				</div>
			</div>
			<div class="frame" v-bind:style="{display: min ? 'none' : null}">
				<Welcome></Welcome>
			</div>
		</div>
		<img class="logo" src="/img/logo.png" alt="Aaron Walter Logo"/>
		<div class="icon"  v-on:click="close = false">
			<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 524.931 524.93" xml:space="preserve">
				<path d="M226.434,249.503c0-6.995-2.705-13.403-7.846-18.556L61.8,74.165c-5.128-5.141-11.554-7.852-18.568-7.852
					c-7.026,0-13.452,2.717-18.556,7.846l-16.83,16.83c-5.129,5.135-7.84,11.549-7.84,18.538c0,7.026,2.717,13.452,7.846,18.556
					l121.415,121.42L7.84,370.936C2.711,376.071,0,382.491,0,389.486c0,7.02,2.717,13.439,7.846,18.544l16.775,16.774
					c5.116,5.165,11.555,7.895,18.611,7.895c7.044,0,13.47-2.723,18.556-7.846l156.813-156.8
					C223.729,262.913,226.434,256.504,226.434,249.503z"/>
				<path d="M498.866,384.951h-323.02c-7.203,0-13.611,2.583-18.581,7.528c-4.896,4.92-7.484,11.327-7.484,18.531v21.536
					c0,7.252,2.607,13.672,7.491,18.543c4.915,4.927,11.34,7.528,18.574,7.528h323.02c7.239,0,13.659-2.607,18.531-7.497
					c4.927-4.908,7.533-11.334,7.533-18.58v-21.537c0-7.209-2.589-13.616-7.54-18.592
					C512.477,387.534,506.069,384.951,498.866,384.951z"/>
			</svg>
			<div>Welcome</div>
		</div>
	</div>
</template>

<script lang="ts">
import Welcome from "./Pages/Welcome.vue";
export default {
	name: "Desktop",
	components: {Welcome},
	props: ["color", "image"],
	data() {
		return  {
			max: false,
			min: false,
			close: true
		}
	}
}
</script>

<style lang="sass" scoped>
$window-shadow: 0 0 8px 2px #000
$window-control-height: 32px
$window-accents: #2B2B2B
$window-control-color: #EEE
$window-background: rgba(0, 43, 54, 0.95)

.desktop
	height: 100%
	background-position: center
	background-repeat: no-repeat
	background-size: cover
	background-color: black
	display: flex
	justify-content: center
	align-items: center
	position: relative

.logo
	width: 100%
	max-width: 384px
	position: absolute
	right: 0
	bottom: 0
	z-index: 0

.icon
	position: absolute
	left: 32px
	top: 32px
	z-index: 0
	stroke: white
	fill: white
	width: 64px
	color: white
	text-align: center

.window
	width: 100%
	height: 100%
	display: flex
	flex-direction: column
	box-shadow: $window-shadow
	z-index: 1

.title
	height: $window-control-height
	background-color: $window-accents
	color: $window-control-color
	flex: 0 0 auto

.frame
	background: $window-background
	overflow-y: auto
	flex: 1 1 auto

.frame, .title
	border: 1px solid $window-accents
	width: 100%
	position: relative
	box-sizing: border-box

.controls
	float: right
	height: $window-control-height
	display: flex
	flex-direction: row

.controls .close, .controls .max, .controls .min
	width: $window-control-height
	height: $window-control-height
	display: flex
	justify-content: center
	align-items: center

.controls .close:hover
	background-color: red

.controls .min:hover, .controls .max:hover
	background-color: #222

.controls svg
	stroke: $window-control-color

.title .name
	height: $window-control-height
	line-height: $window-control-height
	margin-left: 5px
	vertical-align: middle
	display: inline-block


// .min class is added when "-" is pressed
// Shadow still shows when hidden, so this fixes it
.window.min
	box-shadow: 0 0
.title.min
	box-shadow: $window-shadow

</style>
