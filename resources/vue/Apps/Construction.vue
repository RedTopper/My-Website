<template>
	<div class="content">
		<div class="stripe"></div>
		<div class="padding">
			<div class="title">
				Under Construction
			</div>
			<div class="subtitle">
				I'm still working on adding past projects here! Check back soon!
			</div>
		</div>
		<div class="stripe"></div>
	</div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component
export default class Construction extends Vue {}
</script>

<style lang="sass" scoped>
.content
	color: white

.stripe
	display: block
	height: 12px
	background: repeating-linear-gradient(45deg, rgba(255,255,255,1), rgba(255,255,255,1) 6px, rgba(0,0,0,0) 6px, rgba(0,0,0,0) 14px)

.padding
	padding: 30px 40px 40px

.title
	font-size: 48px
	text-align: center
	margin-bottom: 10px

.subtitle
	font-size: 26px
	text-align: center
	color: grey
</style>