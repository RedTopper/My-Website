<template>
	<div class="content">
		<p><span class="accent-green">user@awalter.net</span>:<span class="accent-blue">~</span>$ /bin/projects</p><br>
		<p><span class="accent-gold">Personal Projects:</span></p>

		<p><span class="accent-pink"> * </span><a href="https://github.com/RedTopper/Super-Haxagon">Super Haxagon</a>:
			a very portable <a href="https://superhexagon.com/">Super Hexagon</a> clone.
			Runs on a whole bunch of things from a calculator to the nintendo switch.</p>

		<p><span class="accent-pink"> * </span><a href="https://github.com/RedTopper/My-Website">My Website</a>:
			Want to see how that boot sequence was done? You're in luck, this site is open source! (warning: it's
			a lot of javascript)</p>

		<p><span class="accent-pink"> * </span><a href="https://github.com/RedTopper/Click-NET">Click.NET</a>:
			A multiplayer "clicker" game designed in Express.JS for a hackathon. Here's a
			<a href="https://youtu.be/-fjI0MRuX_s ">video of it</a> in action.</p>

		<p><span class="accent-pink"> * </span><a href="https://github.com/RedTopper/Rubric-Pro">Rubric Pro</a>:
			A site that was designed to help teachers with understanding how much students understand subjects
			when parts of a curriculum are attached to rubric criteria. I was awarded
			<a href="https://awards.acm.org/award_winners/walter_8284600">a scholarship</a> for innovation in teaching
			computer science.</p>
	</div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component
export default class Projects extends Vue {

}
</script>

<style lang="sass" scoped>
@use "./resources/sass/app"

.content
	padding: 5px
	color: app.$window-color-primary
	user-select: text

.content a
	text-decoration: none
	color: app.$window-color-accent-blue

.content p
	margin: 0
</style>