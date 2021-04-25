<template>
	<div class="content project">
		<a href="https://github.com/RedTopper/Hidden-Perspective" class="site" title="Open at GitHub.com">
			<IconGithubCorner/>
		</a>
		<div class="markdown">
			<img class="banner" src="/img/hidden-perspective/banner.png" alt="Banner" style="margin: 60px auto">
			<h1><img class="icon" src="/img/hidden-perspective/icon.png" alt="Icon" title="Icon" >Hidden Perspective <small>(2018)</small></h1>
			<div class="topics">
				<span class="tag lang">C#</span>
				<span class="tag frame">Unity</span>
				<span class="tag plat">Windows</span>
				<span class="tag plat">Oculus CV1</span>
			</div>
			<p>
				Hidden Perspective placed third in the 2018 Iowa State University hackathon of 157 participants.
			</p>
			<p>
				The "gimmick" of this game is that the VR player CANNOT see the maze layout while the PC player CAN.
				However, the PC player sometimes sees solid walls in locations where the VR player sees archways. The
				goal is for the PC player to guide the VR player to the yellow orbs to win.
			</p>
			<p>
				The RED orbs use an AI to track the player. It moves pretty quick and can use the archways that the
				PC player sees as walls.
			</p>

			<h2>Authors</h2>
			<p>Here's the team that brought it all together:</p>
			<ul>
				<li><a href="https://github.com/RedTopper">RedTopper</a> [me]</li>
				<li><a href="https://github.com/MasterPwned">MasterPwened</a></li>
				<li><a href="https://github.com/keyesa">keyesa</a></li>
				<li><a href="https://github.com/Enryith">Enryith</a></li>
			</ul>

			<h2>Screenshots</h2>
			<img src="img/hidden-perspective/screenshot1.png" alt="Main Image VR" title="Main Image VR">
			<img src="img/hidden-perspective/screenshot2.png" alt="PC player viewing maze from above" title="PC player viewing maze from above">
			<img src="img/hidden-perspective/screenshot3.png" alt="VR player running from monster" title="VR player running from monster">

			<h2>About</h2>
			<p>
				The rest of this page is the original text submitted to our project page
				<a href="https://devpost.com/software/hidden-perspective">at devpost</a>.
			</p>

			<h3>Inspiration</h3>
			<p>
				We wanted to build a game in Unity for the first time since we thought it would be interesting. So we
				built a VR game! We were inspired by other VR games and desktop games, such as keep talking and nobody
				explodes.
			</p>

			<h3>What it does</h3>
			<p>
				This game generates mazes randomly for a VR user and audience to explore. Beware! There are enemies about
				as you collect orbs to reach your objective. They know where you are, but you might not know where they are!
			</p>

			<h3>How we built it</h3>
			<p>
				We used Unity to build the app, along with Visual Studio and Git.
			</p>

			<h3>Challenges we ran into</h3>
			<p>
				Considering we had to learn unity for the first time ever, we had some trouble getting the ball rolling.
				We had many merge conflicts when working on the code and assets with our team. There were also issues
				with map generation, figuring out AI, and pretty much everything we wanted to do. We also ran into
				issues of sleep, so writing this is pretty hard.
			</p>
			<p>
				Additionally, we were all unfamiliar with node, express, vue, and pug. It took quite a while for us to
				understand it because they are extensive frameworks.
			</p>

			<h3>Accomplishments that we're proud of</h3>
			<p>
				WE MADE A GAME IN VR! IT ACTUALLY WORKS!
			</p>

			<h3>What we learned</h3>
			<p>
				We learned many aspects of game development in Unity and C#. We also learned about game brainstorming
				and sticking together.
			</p>
		</div>
	</div>
</template>

<script lang="ts">
import IconGithubCorner from "@vue/Icons/IconGithubCorner.vue";
import {Component, Vue} from 'vue-property-decorator'

@Component({components: {IconGithubCorner}})
export default class HiddenPerspective extends Vue {}
</script>
