<template>
	<div class="console" v-bind:style="{backgroundColor: color}">
	</div>
</template>

<script>
export default {
	name: "Blank",
	props: ["color"]
}
</script>

<style lang="sass" scoped>
.console
	height: 100%
</style>