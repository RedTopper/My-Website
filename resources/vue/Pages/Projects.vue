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
	width: 64px
	stroke: white
	fill: white !important
	display: block
	margin: 0 auto

.app .title
	margin-top: 4px

</style>