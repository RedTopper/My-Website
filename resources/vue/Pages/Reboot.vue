<template>
	<div class="content">
		<p><span class="accent-green">user@awalter.net</span>:<span class="accent-blue">~</span>$ sudo shutdown -r</p>
		<p>The system is going down for halt NOW!</p>
	</div>
</template>

<style lang="sass" scoped>
@use "./resources/sass/app"

.content
	padding: 5px
	color: app.$window-color-primary

.content a
	text-decoration: none
	color: app.$window-color-accent-blue

.content p
	margin: 8px 0 0

.content p:first-child
	margin: 0
</style>