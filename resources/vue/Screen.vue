<template>
	<div id="screen" v-bind:style="{maxWidth: width, maxHeight: height}">
		<component @power="power" @skip="skip" @reboot="reboot" v-if="component" v-bind:is="component" v-bind="componentData"></component>
	</div>
</template>

<script lang="ts">
import Power from "./Power.vue";
import {StateFactory} from "../ts/StateFactory";
import {Runner} from "../ts/Runner";

import {Component, Vue} from "vue-property-decorator";
import {Component as VueComponent} from "vue";

@Component
export default class Screen extends Vue {
	private runner: Runner;
	private component: VueComponent = Power;
	private componentData: any = null;
	private keypress: string | null = null;
	private width: string | null = "800px";
	private height: string | null = "600px";

	constructor(props: any) {
		super(props);
		this.runner = new Runner(this);
	}

	created() {
		let self = this;
		window.addEventListener('keydown', (e) => {
			self.keypress = e.key;
			if (self.component == Power) {
				self.power();
				self.keypress = null;
			}
		});
	}

	power() {
		console.log("Let's go!");
		console.log("Try out the BIOS hotkeys while you're at it!");
		this.runner.add(StateFactory.createNormal());
		this.runner.start();
	}

	skip() {
		console.log("Skipping...");
		this.runner.add(StateFactory.createFast());
		this.runner.start();
	}

	reboot() {
		console.log("Goodbye!");
		this.runner.add(StateFactory.createReboot());
		this.runner.add(StateFactory.createNormal());
		this.runner.start();
	}

	public getKeypress() {
		return this.keypress
	}

	public resetKeypress() {
		this.keypress = null;
	}

	public setComponentData(data: any) {
		data.keypress = this.keypress;
		this.componentData = data;
	}

	public setWidth(width: string | null) {
		this.width = width;
	}

	public setHeight(height: string | null) {
		this.height = height;
	}

	public setComponent(component: VueComponent) {
		this.component = component;
	}
}
</script>

<style lang="sass" scoped>
#screen
	width: 100%
	height: 100%
	border: 2px solid #222
	padding: 5px
	background-color: #000
	box-shadow: 8px 8px 8px #000
	box-sizing: border-box
	overflow: hidden
</style>