<template>
	<div class="console" v-bind:style="{backgroundImage: image}" v-bind:class="{fade: !!image}">
		<div class="window">
			<div class="title">
				<span class="text">Terminal</span>
				<div class="controls">
					<div class="min">
						<svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
							<line stroke-width=".9" fill="none" shape-rendering="crispEdges" x1="1" y1="5.5" x2="11" y2="5.5"/>
						</svg>
					</div>
					<div class="max">
						<svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
							<rect stroke-width=".9" fill="none" x="1.5" y="1.5" width="9" height="9"/>
						</svg>
					</div>
					<div class="close">
						<svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
							<path stroke-width=".9" fill="none" d="M1,1 l 10,10 M1,11 l 10,-10"/>
						</svg>
					</div>
				</div>
			</div>
			<div class="content">
				<span class="accent">Welcome to my website!</span><br>
				Some other text will go here.
			</div>
		</div>
	</div>
</template>

<script lang="ts">
export default {
	name: "Window",
	props: ["color", "image"]
}
</script>

<style lang="sass" scoped>
$window-control-height: 28px
$window-accents: #2B2B2B
$window-control-color: #EEE

$window-color-primary: #839496
$window-color-accent: #B58900
$window-background: rgba(0, 43, 54, 0.95)

.console
	height: 100%
	background-position: center
	background-repeat: no-repeat
	background-size: cover
	background-color: black
	padding: 50px
	box-sizing: border-box

.window
	border: 1px solid $window-accents
	width: 100%
	height: 100%
	background: $window-background
	box-shadow: 0 0 8px 2px #000

.title
	height: $window-control-height
	width: 100%
	background-color: $window-accents
	color: $window-control-color

.controls
	float: right
	height: $window-control-height

.title .close, .title .max, .title .min
	width: $window-control-height
	height: $window-control-height
	position: relative
	display: inline-block

.title svg
	stroke: $window-control-color
	position: absolute
	top: 50%
	left: 50%
	transform: translate(-50%, -50%)

.title .text
	height: $window-control-height
	line-height: $window-control-height - 2px
	margin-left: 5px
	vertical-align: middle
	display: inline-block

.content
	padding: 5px
	color: $window-color-primary

.accent
	color: $window-color-accent

</style>