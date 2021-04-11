<template>
	<div class="screen">
		<div class="power">
			<div class="button" v-on:click="cmdPower">
				<IconPower></IconPower>
			</div>
			<div class="help">Tap to boot</div>
			<div class="help-small">or press any key</div>
		</div>

		<div class="skip" v-on:click="cmdSkip">
			<div class="button">
				<IconSkip></IconSkip>
			</div>
			<div class="help-small">or skip...</div>
		</div>
	</div>
</template>

<script lang="ts">
import IconPower from "./Icons/IconPower.vue";
import IconSkip from "./Icons/IconSkip.vue";
import {Component, Emit, Vue} from "vue-property-decorator";

@Component({
	components: {IconSkip, IconPower}
})
export default class Power extends Vue {
	@Emit()
	cmdPower() {}

	@Emit()
	cmdSkip() {}
}
</script>

<style lang="sass" scoped>
.screen
	height: 100%
	display: flex
	text-align: center
	justify-content: center
	align-items: center
	color: white
	position: relative

.power
	width: 128px
	height: 128px

.skip
	position: absolute
	left: 0
	bottom: 0

.skip svg
	width: 32px
	margin-bottom: 5px

.button
	stroke: grey
	fill: grey

.button svg:hover
	stroke: white
	fill: white

.help
	margin-top: 10px

.help-small
	font-size: 10px
</style>
