<template>
	<div class="content">
		<div v-for="(app, index) in apps" :key="index" v-on:click="cmdLaunch(app)">
			<div class="app" :title="app.hover">
				<img class="icon" :src="app.icon" :alt="app.label"/>
				<div class="label">{{ app.label }}</div>
				<div class="hover">{{ app.hover }}</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from "vue-property-decorator";

import {IApp} from "@ts/App/IApp";

@Component
export default class Projects extends Vue {
	@Prop() apps!: IApp[];

	@Emit()
	cmdLaunch(app: IApp) {
		return app;
	}
}
</script>

<style lang="sass" scoped>
.content
	display: flex
	flex-wrap: wrap
	height: 100%
	padding: 8px
	box-sizing: border-box

.app
	color: white
	margin: 8px
	text-align: center


.app .icon
	width: 180px
	stroke: white
	fill: white !important
	display: block
	margin: 0 auto
	box-shadow: 0 0 4px black
	border-radius: 8px

.app .label
	margin-top: 4px
	text-shadow: 0 0 4px black, 0 0 4px black

.app .hover
	margin-top: 4px
	font-size: 13px
	color: grey
	text-shadow: 0 0 4px black

</style>