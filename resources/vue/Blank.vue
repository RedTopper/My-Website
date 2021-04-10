<template>
	<div class="console" v-bind:style="{backgroundColor: color, backgroundImage: image}" v-bind:class="{fade: !!image}">
	</div>
</template>

<script>
export default {
	name: "Blank",
	props: ["color", "image"]
}
</script>

<style lang="sass" scoped>
.console
	height: 100%
	background-position: center
	background-repeat: no-repeat
	background-size: cover

.fade
	animation: fadeIn 1s

@keyframes fadeIn
	0%
		opacity: 0
	100%
		opacity: 1
</style>
