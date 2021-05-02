<template>
	<div class="desktop" v-bind:style="{backgroundImage: image}" v-bind:class="{fade: !!image, min: min}">
		<Window
			@cmd-close="cmdClose"
			@cmd-reboot="cmdReboot"
			@cmd-shutdown="cmdShutdown"
			@cmd-min="cmdMin($event)"
			@cmd-launch="cmdLaunch($event, false)"
			ref="window"
			v-if="!!app" v-bind="{app: app}"/>
		<img class="logo" src="/img/logo.png" alt="Aaron Walter Logo"/>
		<div class="icons">
			<div v-for="(app, index) in apps" :key="index" @click="cmdLaunch(app, true)" :title="app.hover" tabindex=0 role="button">
				<div class="app">
					<component class="icon" v-bind:is="app.thumb"></component>
					<div class="label">{{ app.label }}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import {Component, Emit, Prop, Ref, Vue} from 'vue-property-decorator'

import {App} from "@ts/App/App"
import {AppFactory} from "@ts/Factories/AppFactory";
import Window from "@vue/Window.vue";

@Component({
	components: {Window}
})
export default class Desktop extends Vue {
	private min: boolean = false;
	private app: App | null = null;
	private appLast: App | null = null;
	private apps: App[] = AppFactory.createApps();

	@Prop() color!: string;
	@Prop() image!: string;
	@Ref() readonly window!: Window

	mounted() {
		let self = this;
		setTimeout(function () {
			self.cmdLaunch(self.apps[1], true);
		}, 200)
	}

	cmdMin(min: boolean) {
		this.min = min;
	}

	cmdClose() {
		if (this.appLast?.componentData) {
			this.cmdLaunch(this.appLast, true);
		} else {
			this.app = null;
		}

		this.appLast = null;
	}

	cmdLaunch(app: App, isLaunchedFromDesktop: boolean) {
		this.appLast = this.app;
		if (isLaunchedFromDesktop) {
			// If we launch from the desktop clear the last app so
			// the explorer window doesn't re-open
			this.appLast = null;
		}

		this.min = false;
		this.app = app;

		// Tell window we're opening up
		let self = this;
		this.$nextTick(function () {
			self.window.onOpen();
		});
	}

	// Pass shutdown and reboot events to Screen
	@Emit()
	cmdShutdown() {}
	@Emit()
	cmdReboot() {}
}
</script>

<style lang="sass" scoped>
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

.desktop.min
	align-items: end

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
	align-items: center

.app
	color: white
	margin: 8px
	text-align: center

.app .icon
	width: 64px
	stroke: white
	fill: white !important
	display: block
	margin: 0 auto

.app .label
	margin-top: 4px

</style>
