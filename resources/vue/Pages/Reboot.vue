<template>
	<div class="content">
		<div class="button" v-on:click="cmdShutdown">Shutdown</div>
		<div class="button" v-on:click="cmdReboot">Reboot</div>
		<div class="button" v-on:click="cmdClose">Cancel</div>
	</div>
</template>

<script lang="ts">
import LauncherReboot from "../Launchers/LauncherReboot.vue";
import {Component, Emit, Vue} from "vue-property-decorator";
import {IApp} from "../../ts/App/IApp";

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
	height: 22px
	line-height: 22px
	background-color: lightgray
	color: black
	box-shadow: 0 0 3px 1px
	padding: 3px
</style>