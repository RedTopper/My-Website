<template>
	<div id="screen" v-bind:style="{maxWidth: width, maxHeight: height}">
		<component @cmd-power="cmdPower" @cmd-skip="cmdSkip" @cmd-reboot="cmdReboot" @cmd-shutdown="cmdShutdown" v-if="component" v-bind:is="component" v-bind="componentData"></component>
	</div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {Component as VueComponent} from "vue";

import {IScreen} from "@ts/App/IScreen";
import {Runner} from "@ts/App/Runner";
import {StateFactory} from "@ts/Factories/StateFactory";

import Power from "@vue/Power.vue";

@Component
export default class Screen extends Vue implements IScreen {
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

	cmdPower() {
		console.log("Let's go!");
		console.log("Try out the BIOS hotkeys while you're at it!");
		this.runner.add(StateFactory.createBios());
		this.runner.start();
	}

	cmdSkip() {
		console.log("Skipping...");
		this.runner.add(StateFactory.createFast());
		this.runner.start();
	}

	cmdReboot() {
		console.log("Rebooting...");
		this.runner.add(StateFactory.createReboot());
		this.runner.add(StateFactory.createBios());
		this.runner.start();
	}

	cmdShutdown() {
		console.log("Goodbye!");
		this.runner.add(StateFactory.createShutdown());
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
	user-select: none
</style>