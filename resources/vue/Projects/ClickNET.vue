<template>
	<div>
		<p>
			Click.NET was a winner of the "Best Gaming Hack" award in the 2019 Iowa State University hackathon.
			It was inspired by Steam's 2015 summer sale
			"<a href="https://steamcommunity.com/minigame/">Monster Summer Sale</a>" where people around the world
			would damage virtual monsters by clicking on them from around the world.
		</p>

		<h2>Authors</h2>
		<p>Here's the team that brought it all together:</p>
		<ul>
			<li><a href="https://github.com/RedTopper">RedTopper</a> [me]</li>
			<li><a href="https://github.com/MasterPwned">MasterPwened</a></li>
			<li><a href="https://github.com/keyesa">keyesa</a></li>
			<li><a href="https://github.com/Enryith">Enryith</a></li>
		</ul>

		<h2>Screenshot</h2>
		<img src="img/click-net/screenshot.png" alt="Click.NET Screenshot" title="Screenshot of main UI">

		<h2>Video</h2>
		<div class="video">
			<iframe
				src="https://www.youtube-nocookie.com/embed/-fjI0MRuX_s"
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen>
			</iframe>
		</div>

		<h2>About</h2>
		<p>
			The rest of this page is the original text submitted to our project page
			<a href="https://devpost.com/software/click-net">at devpost</a>.
		</p>

		<h3>What it does</h3>
		<p>
			Connect from anywhere to a tapper experience. Defeat monsters and get power-ups. Become the ultimate
			mage, paladin, or swordsman.
		</p>

		<h3>How we built it</h3>
		<p>
			We built Click-NET with node.js and express. The server manages all of the game data, while the clients
			make requests via AJAX. All data is synchronized between clients with a WebSocket. For the front-end we
			used a mixture of "pug", an HTML templating engine, and "vue", an interactive JavaScript front-end
			framework.
		</p>
		<p>
			The UI was created with bootstrap to create an easy to use interface.
		</p>
		<p>
			All art was handcrafted in-house.
		</p>

		<h3>Challenges we ran into</h3>
		<p>
			At the beginning, the work was hard to split up between individual team members. Once the communication
			protocols were established and the framework was set up, we were able to get back on track and complete
			a fun game for all of us.
		</p>
		<p>
			Additionally, we were all unfamiliar with node, express, vue, and pug. It took quite a while for us to
			understand it because they are extensive frameworks.
		</p>

		<h3>Accomplishments that we're proud of</h3>
		<p>
			We made a complex game that uses modern technologies that are new to all of us!
		</p>

		<h3>What we learned</h3>
		<p>
			Our team learned about web technologies and how to make an effective interactive and real-time website.
		</p>
	</div>
</template>
