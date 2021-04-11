<template>
	<div class="content">
		<div class="button" v-on:click="cmdReboot">Yes</div>
		<div class="button" v-on:click="cmdClose">No</div>
	</div>
</template>

<script lang="ts">
import {Component, Emit, Vue} from "vue-property-decorator";

@Component
export default class Reboot extends Vue {
	@Emit()
	cmdReboot() {
		this.$emit("reboot");
	}

	@Emit()
	cmdClose() {
		this.$emit("cmdClose");
	}
}
</script>

<style lang="sass" scoped>
.content
	display: flex
	text-align: center
	justify-content: center
	align-items: center
	height: 100%
	background-color: grey

.button
	margin: 10px
	width: 100px
	height: 20px
	border: 2px solid white
	background-color: lightgray
	color: black
</style>