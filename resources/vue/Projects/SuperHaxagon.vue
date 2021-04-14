<template>
	<div class="content">
		<a href="https://github.com/RedTopper/Super-Haxagon" class="site" title="Open at GitHub.com">
			<IconGithubCorner/>
		</a>
		<div class="markdown">
			<img class="banner" src="/img/projects/banner.png" alt="Super Haxagon Banner">
			<h1><img class="icon" src="/img/projects/icon.png" alt="Icon" title="Icon" >Super Haxagon <small>(2013-present)</small></h1>
			<div class="topics">
				<span class="tag lang">C++</span>
				<span class="tag lang">C</span>
				<span class="tag plat">Windows</span>
				<span class="tag plat">Linux</span>
				<span class="tag plat">Nintendo 3DS</span>
				<span class="tag plat">Nintendo Switch</span>
				<span class="tag plat">TI-Nspire</span>
			</div>
			<p>
				Super Haxagon is a cross platform, open source <a href="http://superhexagon.com/">Super Hexagon</a> clone for
				the Nintendo 3DS, Nintendo Switch, Windows, Linux, and the
				<a href="https://education.ti.com/en/products/calculators/graphing-calculators/ti-nspire-cx-cas">TI-Nspire</a>
				(yes, the calculator). It's written with portability in mind, so it avoids using libraries and separates
				its core logic from the rendering, sound, and system pipelines via "drivers". It also has a GUI based
				level editor called <a href="https://github.com/RedTopper/Haxa-Editor">Haxa Editor</a> written in Java.
			</p>

			<h2>About</h2>
			<p>
				Super Haxagon started out as a hobby project for my TI-Nspire called "Super Haxaspire" in late middle
				school. At the time I considered it an interesting project in mathematics due to all of the logic it
				required, but it soon sparked my interest in programming. I still maintain this project today as a
				testing ground of skill and development.
			</p>

			<h2>Download</h2>
			<p>
				You can download the latest build on
				<a href="https://github.com/RedTopper/Super-Haxagon/releases">the releases page</a> at
				<a href="https://github.com/RedTopper/Super-Haxagon">GitHub</a>.
			</p>

			<h2>Features</h2>
			<ul>
				<li>Cross Platform </li>
				<li>Widescreen support</li>
				<li>High Refresh Rate support</li>
				<li>Custom Levels</li>
				<li>OGG decoder for BGM</li>
				<li>High Score Saving</li>
			</ul>
		</div>
	</div>
</template>

<style lang="sass" scoped>
.site
	position: absolute
	top: 0
	right: 0
	display: block

.content
	padding: 15px
	user-select: text

.banner
	margin: auto
	max-width: 100%
	width: 300px
	display: block

.icon
	max-width: 100%
	display: inline-block
	margin-right: 16px

</style>
<script>
import IconGithubCorner from "@vue/Icons/IconGithubCorner";
export default {
	components: {IconGithubCorner}
}
</script>