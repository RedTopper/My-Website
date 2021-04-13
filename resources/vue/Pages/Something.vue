<template>
	<div class="content">
		<p><strong class="accent-red">Super Haxagon</strong> -
			<em class="accent-em">A Super Hexagon clone.</em> (2013-Present)</p>
		<p><span class="accent-pink">Source:</span> <a href="https://github.com/RedTopper/Super-Haxagon">RedTopper/Super-Haxagon</a></p>
		<p><span class="accent-purple">Languages:</span> C, C++</p>
		<p><span class="accent-green">Platforms:</span> Windows, Linux, Nintendo Switch, 3DS, TI-Nspire, FPGA</p>
		<p class="description"><em>Super Haxagon is a port of a game called "<a href="https://superhexagon.com/">Super Hexagon</a>" to a bunch
			of different platforms. It started out as a hobby project for my TI-Nspire called "Super Haxaspire" in late
			middle school and is considered the app that kickstarted my career.
			</em></p><br>

		<p><strong class="accent-red">My Website</strong> -
			<em class="accent-em">Look, you're here right now!</em> (2021-Present)</p>
		<p><span class="accent-pink">Source:</span> <a href="https://github.com/RedTopper/My-Website">RedTopper/My-Website</a></p>
		<p><span class="accent-purple">Languages:</span> TypeScript, HTML/CSS</p>
		<p><span class="accent-green">Platforms:</span> Web, Vue</p>
		<p class="description"><em>A website to showcase my projects. Want to see how that boot sequence was done? You're in luck, this site is
			open source! (warning: it's a lot of javascript)</em></p><br>

		<p><strong class="accent-red">Click.NET</strong> -
			<em class="accent-em">You ever just want to beat up monsters with friends?</em> (2019)</p>
		<p><span class="accent-pink">Source:</span> <a href="https://github.com/RedTopper/Click-NET">RedTopper/Click-NET</a></p>
		<p><span class="accent-purple">Languages:</span> JavaScript, HTML/CSS</p>
		<p><span class="accent-green">Platforms:</span> Web, Express.JS, Node</p>
		<p class="description"><em>Click.NET was a multiplayer "clicker" game designed in Express.JS for a hackathon. It used websockets to handle
			real-time clicking events and power ups. The entire project was created and finished in 3 days. Here's a
			<a href="https://youtu.be/-fjI0MRuX_s ">video of it</a> in action.</em></p><br>

		<p><strong class="accent-red">Rubric Pro</strong> -
			<em class="accent-em">To design a better world is to start with the students</em> (2016-2017)</p>
		<p><span class="accent-pink">Source:</span> <a href="https://github.com/RedTopper/Rubric-Pro">RedTopper/Rubric-Pro</a></p>
		<p><span class="accent-purple">Languages:</span> PHP, JavaScript, HTML/CSS</p>
		<p><span class="accent-green">Platforms:</span> Web, Express.JS, Node</p>
		<p class="description"><em>A site that was designed to help teachers with understanding how much students understand subjects
			when parts of a curriculum are attached to rubric criteria. I was awarded
			<a href="https://awards.acm.org/award_winners/walter_8284600">a scholarship</a> for innovation in teaching
			computer science.</em></p>
	</div>
</template>

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

.description
	text-indent: 4em
</style>