<template>
	<div class="window" v-bind:style="{maxWidth: max ? null : app.width+'px', maxHeight: max ? null : app.height+'px'}" v-bind:class="{min: min}">
		<div class="title">
			<span class="name">{{ app.title }}</span>
			<div class="controls">
				<div class="min" v-on:click="cmdMin">
					<svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
						<line stroke-width=".9" fill="none" shape-rendering="crispEdges" x1="1" y1="5.5" x2="11" y2="5.5"/>
					</svg>
				</div><div class="max" v-on:click="cmdMax" v-bind:style="{display: app.maximizable ? null : 'none'}">
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
		<div class="frame" v-bind:style="{display: min ? 'none' : null, background: app.background}">
			<component
				@cmd-close="cmdClose"
				@cmd-reboot="cmdReboot"
				@cmd-shutdown="cmdShutdown"
				@cmd-launch="cmdLaunch($event)"
				v-bind:is="app.app" v-bind="app.componentData"/>
		</div>
	</div>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from 'vue-property-decorator'

import {IApp} from "@ts/App/IApp"

@Component
export default class Window extends Vue {
	private min: boolean = false;
	private max: boolean = false;

	@Prop() app!: IApp;

	mounted() {
		if (!this.app.maximizable) {
			this.max = false;
		} else {
			this.max = window.innerWidth < this.app.width || this.max;
		}

		this.min = false;
	}

	// Let window manager know we minimized.
	@Emit()
	cmdMin() {
		this.min = !this.min;
		return this.min;
	}

	cmdMax() {
		if (this.min) {
			this.min = false;
			this.$emit('cmd-min', false);
		} else if (this.app?.maximizable) {
			this.max = !this.max;
		}
	}

	// Pass Close, Reboot, Shutdown, and Launch to Window
	@Emit()
	cmdClose() {}
	@Emit()
	cmdReboot() {}
	@Emit()
	cmdShutdown() {}
	@Emit()
	cmdLaunch(app: IApp) {
		return app;
	}
}
</script>

<style lang="sass" scoped>
$window-shadow: 0 0 8px 2px #000
$window-control-height: 32px
$window-accents: #2B2B2B
$window-control-color: #EEE
$window-background: rgba(0, 43, 54, 0.97)

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
	margin-left: 8px
	vertical-align: middle
	display: inline-block


// .min class is added when "-" is pressed
// Shadow still shows when hidden, so this fixes it
.min.window
	box-shadow: 0 0
	height: auto
.min .title
	box-shadow: $window-shadow
.min.desktop
	align-items: end
</style>