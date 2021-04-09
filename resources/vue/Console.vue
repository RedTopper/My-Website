<template>
	<div>
		<div v-for="line in lines" :key="line">
			{{ line }}
		</div>
		<div class="cursor" v-bind:class="{off: off}">_</div>
	</div>
</template>

<script lang="ts">
export default {
	name: "Console",
	props: ["lines"],
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
div
	color: white

.off
	display: none

</style>
