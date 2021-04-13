<template>
	<div class="content">
		<div class="app" :title="app.hover" v-for="(app, index) in apps" :key="index" v-on:click="cmdLaunch(app)">
			<img class="icon" :src="app.icon" :alt="app.label"/>
			<div class="label">{{ app.label }}</div>
			<div class="hover">{{ app.hover }}</div>
		</div>
		<!-- Generate a whole bunch of fake elements so icons always align left -->
		<div class="app fake" v-for="(app, index) in Array(15)" :key="index"></div>
	</div>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from "vue-property-decorator";

import {IApp} from "@ts/App/IApp";

@Component
export default class Folder extends Vue {
	@Prop() apps!: IApp[];

	@Emit()
	cmdLaunch(app: IApp) {
		return app;
	}
}
</script>

<style lang="sass" scoped>
$icon-margin: 10px
$icon-size: 200px

.content
	display: flex
	flex-flow: row wrap
	justify-content: space-between
	padding: $icon-margin
	box-sizing: border-box

.app
	width: $icon-size
	min-width: $icon-size
	color: white
	margin: 0
	text-align: center
	flex: 1 0

.app .icon
	width: $icon-size - $icon-margin
	stroke: white
	fill: white !important
	display: block
	margin: $icon-margin/2 auto
	box-shadow: 0 0 4px black
	border-radius: $icon-margin

.app .label
	text-shadow: 0 0 4px black, 0 0 4px black

.app .hover
	margin: 4px 0 $icon-margin 0
	font-size: 13px
	color: grey
	text-shadow: 0 0 4px black

</style>