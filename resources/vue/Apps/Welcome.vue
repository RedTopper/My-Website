<template>
	<div class="content">
		<p><span class="solarized-green">user@awalter.net</span>:<span class="solarized-blue">~</span>$ /bin/welcome</p><br>

		<p><span class="solarized-gold">Welcome!</span></p>
		<p>I'm <span class="accent-red">Aaron (AJ) Walter</span>: Web Developer, Software Engineer, and Console
			Homebrew-er</p><br>

		<p><span class="solarized-gold">What am I looking at?</span></p>
		<p>You're looking at a terminal on a "virtual computer" booted on certified, genuine "Aaron(r) Walter" hardware.
			In reality it's a single page web application written in Vue and TypeScript delivered to you over the power
			of the internet. Check out <a href="https://github.com/RedTopper/My-Website">the source code</a> if you want!</p><br>

		<p><span class="solarized-gold">How do I use it?</span></p>
		<p>Try closing this "application" by pressing the "x" in the top right and launching another app that is on the
			desktop by tapping or clicking on it. Each app has different information about me, my projects, my
			qualifications, or education. Have fun!</p><br>

		<p><span class="solarized-gold">Why'd you make this?</span></p>
		<p>I wanted to learn Vue.JS and TypeScript because they seemed like fun. Also it's a nice place to feature my
			work!</p><br>

		<p><span class="solarized-gold">Anything else?</span></p>
		<p>Have you tried exploring the boot options? (You'll need a keyboard)</p>
	</div>
</template>

<style lang="sass" scoped>
@use "./resources/sass/vars"

.content
	padding: 5px
	color: vars.$solarized-primary
	user-select: text

.content a
	text-decoration: none
	color: vars.$solarized-blue

.content p
	margin: 0
</style>