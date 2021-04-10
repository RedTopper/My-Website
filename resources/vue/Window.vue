<template>
	<div class="desktop" v-bind:style="{backgroundImage: image}" v-bind:class="{fade: !!image}">
		<div class="window" v-bind:class="{min: min}" v-bind:style="{maxWidth: max ? null : '800px', maxHeight: max ? null : '600px', display: close ? 'none' : null}">
			<div class="title" v-bind:class="{min: min}">
				<span class="name">Terminal</span>
				<div class="controls">
					<div class="min" v-on:click="min = !min">
						<svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
							<line stroke-width=".9" fill="none" shape-rendering="crispEdges" x1="1" y1="5.5" x2="11" y2="5.5"/>
						</svg>
					</div><div class="max" v-on:click="max = !max">
					<svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
						<rect stroke-width=".9" fill="none" x="1.5" y="1.5" width="9" height="9"/>
					</svg>
					</div><div class="close" v-on:click="close = true">
						<svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
							<path stroke-width=".9" fill="none" d="M1,1 l 10,10 M1,11 l 10,-10"/>
						</svg>
					</div>
				</div>
			</div>
			<div class="frame" v-bind:style="{display: min ? 'none' : null}">
				<div class="content">
					<p><span class="accent-green">user@awalter.net</span>:<span class="accent-blue">~</span>$ cat welcome.txt</p><br>

					<p><span class="accent-gold">Welcome!</span></p>
					<p>I'm <span class="accent-red">Aaron (AJ) Walter</span>: Web Developer, Software Engineer, and Console Homebrew-er</p><br>

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
		<img class="logo" src="/img/logo.png" alt="Aaron Walter Logo"/>
		<div class="sh"  v-on:click="close = false">
			<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 384 384" xml:space="preserve">
				<path d="M64,0v80H0v144h64v160h224l96-96V0H64z M16,208V96h240v112H16z M288,361.376V288h73.376L288,361.376z M368,272h-96v96H80
				V224h192V80H80V16h288V272z"/>
				<path d="M91.12,160.976c-0.4-1.744-1.072-3.312-2.064-4.752s-2.32-2.784-3.984-4.032c-1.664-1.264-3.808-2.464-6.432-3.616
				l-10.656-4.608c-2.928-1.2-4.848-2.528-5.744-3.984c-0.912-1.44-1.344-3.2-1.344-5.328c0-1.024,0.112-2.016,0.336-2.976
				c0.224-0.96,0.672-1.84,1.28-2.576c0.608-0.736,1.424-1.328,2.448-1.776c1.008-0.432,2.288-0.672,3.824-0.672
				c2.688,0,4.608,0.896,5.76,2.64c1.152,1.776,1.728,4.288,1.728,7.552H89.52v-1.92c0-3.264-0.544-6.064-1.6-8.4
				c-1.04-2.32-2.528-4.24-4.4-5.744c-1.888-1.52-4.144-2.592-6.736-3.264c-2.576-0.672-5.424-1.008-8.48-1.008
				c-6.592,0-11.792,1.664-15.568,4.992s-5.664,8.368-5.664,15.152c0,2.832,0.336,5.296,1.04,7.456
				c0.704,2.144,1.808,4.032,3.312,5.664c1.52,1.648,3.376,3.072,5.632,4.272c2.24,1.216,4.896,2.352,7.968,3.376
				c2.288,0.768,4.224,1.52,5.792,2.256c1.568,0.736,2.832,1.536,3.792,2.448c0.976,0.88,1.664,1.888,2.064,3.008
				c0.416,1.12,0.624,2.448,0.624,3.984c0,2.864-0.848,5.008-2.544,6.384c-1.68,1.376-3.584,2.064-5.696,2.064
				c-1.792,0-3.28-0.272-4.464-0.768c-1.184-0.512-2.128-1.216-2.832-2.128c-0.704-0.896-1.184-2-1.44-3.312
				c-0.256-1.296-0.416-2.752-0.416-4.352h0v-2H46.08v2.784c0,6.336,1.68,11.2,5.04,14.592c3.36,3.392,8.944,5.088,16.752,5.088
				c7.488,0,13.328-1.664,17.52-4.96c4.208-3.296,6.304-8.56,6.304-15.792C91.696,164.624,91.504,162.688,91.12,160.976z"/>
				<polygon points="138.176,117.856 138.176,144.064 122.048,144.064 122.048,117.856 108.224,117.856 108.224,186.4 122.048,186.4
				122.048,155.968 138.176,155.968 138.176,186.4 152,186.4 152,117.856 "/>
			</svg>
			<div>site.sh</div>
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
			min: false,
			close: false
		}
	}
}
</script>

<style lang="sass" scoped>
$window-shadow: 0 0 8px 2px #000
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

.desktop
	height: 100%
	background-position: center
	background-repeat: no-repeat
	background-size: cover
	background-color: black
	display: flex
	justify-content: center
	align-items: center
	position: relative

.logo
	position: absolute
	left: 0
	bottom: 0
	z-index: 0

.sh
	position: absolute
	left: 32px
	top: 32px
	z-index: 0
	stroke: white
	fill: white
	width: 64px
	color: white
	text-align: center

.window
	width: 100%
	height: 100%
	display: flex
	flex-direction: column
	box-shadow: $window-shadow
	z-index: 1

.window.min
	box-shadow: 0 0

.title
	height: $window-control-height
	background-color: $window-accents
	color: $window-control-color
	flex: 0 0 auto

.title.min
	box-shadow: $window-shadow

.frame
	background: $window-background
	overflow-y: auto
	flex: 1 1 auto

.frame, .title
	border: 1px solid $window-accents
	width: 100%
	position: relative
	box-sizing: border-box

.controls
	float: right
	height: $window-control-height
	display: flex
	flex-direction: row

.controls .close, .controls .max, .controls .min
	width: $window-control-height
	height: $window-control-height
	display: flex
	justify-content: center
	align-items: center

.controls .close:hover
	background-color: red

.controls .min:hover, .controls .max:hover
	background-color: #222

.controls svg
	stroke: $window-control-color

.title .name
	height: $window-control-height
	line-height: $window-control-height
	margin-left: 5px
	vertical-align: middle
	display: inline-block

.content
	padding: 5px
	color: $window-color-primary

.content a
	text-decoration: none
	color: $window-color-accent-blue

.content p
	margin: 8px 0 0

.content p:first-child
	margin: 0

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

</style>