<template>
	<div class="content">
		<div class="button" v-on:click="cmdShutdown">Shutdown</div>
		<div class="button" v-on:click="cmdReboot">Reboot</div>
		<div class="button" v-on:click="cmdClose">Cancel</div>
	</div>
</template>

<script lang="ts">
import {Component, Emit, Vue} from "vue-property-decorator";

@Component
export default class Reboot extends Vue {
	@Emit()
	cmdReboot() {}

	@Emit()
	cmdShutdown() {}

	@Emit()
	cmdClose() {}
}
</script>

<style lang="sass" scoped>
.content
	display: flex
	text-align: center
	justify-content: center
	align-items: center
	flex-wrap: wrap
	height: 100%
	background-color: grey
	padding: 8px
	box-sizing: border-box

.button
	margin: 0 10px
	width: 100px
	height: 20px
	border: 2px solid white
	background-color: lightgray
	color: black
</style>