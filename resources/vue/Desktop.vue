<template>
	<div class="desktop" v-bind:style="{backgroundImage: image}" v-bind:class="{fade: !!image, min: min}">
		<div class="window"  v-bind:style="{maxWidth: max ? null : '1024px', maxHeight: max ? null : '768px', display: close ? 'none' : null}">
			<div class="title">
				<span class="name">Terminal</span>
				<div class="controls">
					<div class="min" v-on:click="cmdMin">
						<svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
							<line stroke-width=".9" fill="none" shape-rendering="crispEdges" x1="1" y1="5.5" x2="11" y2="5.5"/>
						</svg>
					</div><div class="max" v-on:click="cmdMax">
					<svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
						<rect stroke-width=".9" fill="none" x="1.5" y="1.5" width="9" height="9"/>
					</svg>
					</div><div class="close" v-on:click="cmdClose">
						<svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
							<path stroke-width=".9" fill="none" d="M1,1 l 10,10 M1,11 l 10,-10"/>
						</svg>
					</div>
				</div>
			</div>
			<div class="frame" v-bind:style="{display: min ? 'none' : null}">
				<component v-bind:is="page"></component>
			</div>
		</div>
		<img class="logo" src="/img/logo.png" alt="Aaron Walter Logo"/>
		<div class="icons">
			<div v-for="(launch, index) in icons" :key="index" v-on:click="cmdLaunch(launch.page)">
				<component v-bind:is="launch.icon"></component>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Welcome from "./Pages/Welcome.vue";
import Reboot from "./Pages/Reboot.vue";
import LauncherWelcome from "./Launchers/LauncherWelcome.vue";
import LauncherReboot from "./Launchers/LauncherReboot.vue";
import {Component} from "vue";

interface Launch {
	icon: Component,
	page: Component
}

export default {
	name: "Desktop",
	props: ["color", "image"],
	data() {
		let icons: Launch[] = [
			{icon: LauncherReboot, page: Reboot},
			{icon: LauncherWelcome, page: Welcome}
		]

		return  {
			max: false,
			min: false,
			close: true,
			page: Welcome,
			icons: icons
		}
	},
	methods: {
		cmdMin: function () {
			let self: any = this;
			self.min = !self.min;
		},
		cmdMax: function () {
			let self: any = this;
			if (self.min) {
				self.min = false;
			} else {
				self.max = !self.max;
			}
		},
		cmdClose: function () {
			let self: any = this;
			self.close = true;
		},
		cmdLaunch: function (page: Component) {
			let self: any = this;
			if (page == Reboot) {
				setTimeout(function () {
					self.$emit('reboot');
				}, 1000);
			}

			self.page = page;
			self.close = false;
			self.min = false;
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

.icon::v-deep
	width: 64px
	stroke: white
	fill: white !important
	color: white
	text-align: center
	margin: 8px 16px

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

.icons
	height: 100%
	position: absolute
	top: 0
	left: 0
	display: flex
	flex-direction: column
	flex-wrap: wrap

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
.min .window
	box-shadow: 0 0
	height: auto
.min .title
	box-shadow: $window-shadow
.min.desktop
	align-items: end

</style>
