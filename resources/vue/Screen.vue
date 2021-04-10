<template>
	<div id="screen" v-bind:style="{maxWidth: width, maxHeight: height}">
		<component @power="power" v-if="state" v-bind:is="state" v-bind="data"></component>
	</div>
</template>

<script lang="ts">
import Power from "./Power.vue";
import {Internal, RunnerFactory} from "../ts/RunnerFactory";

let internal: Internal = {
	keypress: null,
	state: Power,
	data: null,
	width: "800px",
	height: "600px",
}

export default {
	name: "Screen",
	data(): Internal {
		return internal;
	},
	created() {
		let self: any = this;
		window.addEventListener('keydown', (e) => {
			self.keypress = e.key;
			if (self.state == Power) {
				self.power();
				self.keypress = null;
			}
		});
	},
	methods: {
		power() {
			console.log("Let's go!");
			RunnerFactory.create(internal).start();
		}
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