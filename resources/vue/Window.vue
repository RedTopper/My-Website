<template>
	<div class="console" v-bind:style="{backgroundImage: image}" v-bind:class="{fade: !!image}">
		<div class="container" v-bind:style="{maxWidth: max ? null : '800px', maxHeight: max ? null : '600px'}">
			<div class="title">
				<span class="text">Terminal</span>
				<div class="controls">
					<div class="min" v-on:click="min = !min">
						<svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
							<line stroke-width=".9" fill="none" shape-rendering="crispEdges" x1="1" y1="5.5" x2="11" y2="5.5"/>
						</svg>
					</div><div class="max" v-on:click="max = !max">
					<svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
						<rect stroke-width=".9" fill="none" x="1.5" y="1.5" width="9" height="9"/>
					</svg>
					</div><div class="close">
						<svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
							<path stroke-width=".9" fill="none" d="M1,1 l 10,10 M1,11 l 10,-10"/>
						</svg>
					</div>
				</div>
			</div>
			<div class="window" v-bind:style="{display: min ? 'none' : null}">
				<div class="content">
					<p><span class="accent-green">user@awalter.net</span>:<span class="accent-blue">~</span>$ cat welcome.txt</p><br>

					<p><span class="accent-gold">Welcome!</span></p>
					<p>I'm <span class="accent-red">Aaron Walter</span>: Web Developer, Software Engineer, and Console Homebrew-er</p><br>

					<p><span class="accent-gold">About this site:</span></p>
					<p>This site is an index of the projects I have worked on in the past. Feel free to check out the links below to find something interesting!</p><br>

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
			</div>
		</div>
	</div>
</template>

<script lang="ts">
export default {
	name: "Window",
	props: ["color", "image"],
	data() {
		return  {
			max: false,
			min: false
		}
	}
}
</script>

<style lang="sass" scoped>
$window-control-height: 32px
$window-accents: #2B2B2B
$window-control-color: #EEE

$window-color-primary: #839496
$window-color-accent-red: #DC322F
$window-color-accent-green: #859900
$window-color-accent-blue: #268BD2
$window-color-accent-gold: #B58900
$window-color-accent-pink: #D33682
$window-background: rgba(0, 43, 54, 0.95)

.console
	height: 100%
	background-position: center
	background-repeat: no-repeat
	background-size: cover
	background-color: black
	display: flex
	justify-content: center
	align-items: center

.container
	width: 100%
	height: 100%
	display: flex
	flex-direction: column

.window
	background: $window-background
	overflow-y: auto
	flex: 1 1 auto

.title
	height: $window-control-height
	background-color: $window-accents
	color: $window-control-color
	flex: 0 0 auto

.window, .title
	border: 1px solid $window-accents
	width: 100%
	position: relative
	box-sizing: border-box

.window:before, .title:before
	content: ""
	box-shadow: 0 0 8px 2px #000
	z-index: -1
	position: absolute
	top: 0
	bottom: 0
	left: 0
	right: 0

.controls
	float: right
	height: $window-control-height
	display: flex
	flex-direction: row

.title .close, .title .max, .title .min
	width: $window-control-height
	height: $window-control-height
	display: flex
	justify-content: center
	align-items: center

.title .close:hover
	background-color: red

.title .min:hover, .title .max:hover
	background-color: #222

.title svg
	stroke: $window-control-color

.title .text
	height: $window-control-height
	line-height: $window-control-height
	margin-left: 5px
	vertical-align: middle
	display: inline-block

.content
	padding: 5px
	color: $window-color-primary

.accent-red
	color: $window-color-accent-red
.accent-green
	color: $window-color-accent-green
.accent-blue
	color: $window-color-accent-blue
.accent-gold
	color: $window-color-accent-gold
.accent-pink
	color: $window-color-accent-pink
a
	text-decoration: none
	color: $window-color-accent-blue

p
	margin: 8px 0 0

p:first-child
	margin: 0

</style>