<template>
	<div class="console" v-bind:style="{backgroundColor: color, backgroundImage: image}" v-bind:class="{fade: !!image}"></div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";

@Component
export default class Blank extends Vue {
	@Prop() color!: string;
	@Prop() image!: string;
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
