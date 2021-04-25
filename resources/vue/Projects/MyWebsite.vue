<template>
	<div class="content project">
		<a href="https://github.com/RedTopper/My-Website" class="site" title="Open at GitHub.com">
			<IconGithubCorner/>
		</a>
		<div class="markdown">
			<img class="banner" src="/img/my-website/banner.png" alt="Website Banner" style="margin: 60px auto">
			<h1><img class="icon" src="/img/my-website/icon.png" alt="Icon" title="Icon" >awalter.net <small>(2021-present)</small></h1>
			<div class="topics">
				<span class="tag lang">TypeScript</span>
				<span class="tag lang">Sass</span>
				<span class="tag lang">HTML</span>
				<span class="tag frame">Vue</span>
				<span class="tag plat">Web</span>
			</div>
			<p>
				Hey, you're here right now! This is my portfolio - a collection of stuff I've done in the past. Almost
				all the projects here are open source works that are published on
				<a href="https://github.com/RedTopper">my GitHub account</a>, and that includes the source code for
				<a href="https://github.com/RedTopper/My-Website">this site itself</a> (pretty meta, huh?)

				<p>Anyway, I structured my portfolio into a few sections, described below.
			</p>
			<h2>Projects</h2>
			<p>
				This is the collection of projects that I have worked on in my free time. Congratulations, you're looking
				at one right now!
			</p>
			<h2>Education</h2>
			<p>
				This folder contains coursework or school-created projects. Generally these are required rather than
				inspired, but they demonstrate my ability to implement a given set of tasks.
			</p>
		</div>
	</div>
</template>

<script lang="ts">
import IconGithubCorner from "@vue/Icons/IconGithubCorner.vue";
import {Component, Vue} from 'vue-property-decorator'

@Component({components: {IconGithubCorner}})
export default class MyWebsite extends Vue {}
</script>