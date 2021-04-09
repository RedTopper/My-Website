<template>
	<div class="console" v-bind:class="{color: color}">
		<div v-for="line in lines" :key="line"  v-html="line">
			{{ line }}
		</div>
		<div class="cursor" v-bind:class="{off: off}">_</div><br>
	</div>
</template>

<script lang="ts">
export default {
	name: "Console",
	props: ["lines", "color"],
	data() {
		return {
			off: false
		}
	},
	created() {
		let self: any = this;
		setInterval(function() {
			self.off = !self.off;
		}.bind(this), 250);
	}
}
</script>

<style lang="sass" scoped>
.console
	color: white

.off
	display: none

.console.color
	color: lightgray

</style>
