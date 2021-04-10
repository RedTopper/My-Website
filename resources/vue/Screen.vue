<template>
	<div id="screen" v-bind:style="{maxWidth: width, maxHeight: height}">
		<component v-if="state" v-bind:is="state" v-bind="data"></component>
	</div>
</template>

<script lang="ts">
import Boot from "./Bios.vue";
import Console from "./Console.vue";
import {Internal, RunnerFactory} from "../ts/RunnerFactory";

let internal: Internal = {
	keypress: null,
	state: null,
	data: null,
	width: "800px",
	height: "600px",
}

export default {
	name: "Screen",
	data(): Internal {
		return internal;
	},
	components: {Boot, Console},
	created() {
		let self: any = this;
		window.addEventListener('keydown', (e) => {
			if (!self.keypress) {
				self.keypress = e.key;
				console.log(e.key)
			}
		});
	},
	mounted() {
		RunnerFactory.create(internal).run();
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