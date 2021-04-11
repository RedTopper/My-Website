<template>
	<div class="console" v-bind:class="{grey: grey}">
		<div v-for="(line, index) in lines" :key="index"  v-html="line">
			{{ line }}
		</div>
		<div class="cursor" v-bind:class="{off: off}">_</div>
	</div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";

@Component
export default class Console extends Vue {
	private off: boolean = false;

	@Prop() lines!: string[];
	@Prop() grey!: boolean;

	created() {
		let self = this;
		// Blink cursor
		setInterval(function() {
			self.off = !self.off;
		}.bind(this), 250);
	}

	updated() {
		let self = this;
		// Auto scroll down
		self.$nextTick(function () {
			let objDiv = document.getElementById("screen");
			if (objDiv) objDiv.scrollTop = objDiv.scrollHeight;
		})
	}
}
</script>

<style lang="sass" scoped>
.console
	color: white

.console.grey
	color: #a7a7a7

.off
	opacity: 0

</style>
