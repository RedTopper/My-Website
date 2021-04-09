<template>
	<div class="console" v-bind:class="{color: color}">
		<div v-for="line in lines" :key="line"  v-html="line">
			{{ line }}
		</div>
		<div class="cursor" v-bind:class="{off: off}">_</div>
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
	},
	updated: function () {
		let self: any = this;
		self.$nextTick(function () {
			let objDiv = document.getElementById("app");
			if (objDiv) objDiv.scrollTop = objDiv.scrollHeight;
		})
	}
}
</script>

<style lang="sass" scoped>
.console
	color: white

.console.color
	color: #a7a7a7

.off
	opacity: 0

</style>
