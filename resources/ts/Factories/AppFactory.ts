import {App} from "@ts/App/App";

import SuperHaxagon from "@vue/Projects/SuperHaxagon.vue";
import MyWebsite from "@vue/Projects/MyWebsite.vue";
import ClickNET from "@vue/Projects/ClickNET.vue";
import HiddenPerspective from "@vue/Projects/HiddenPerspective.vue";
import Reboot from "@vue/Apps/Reboot.vue";
import Welcome from "@vue/Apps/Welcome.vue";
import Folder from "@vue/Apps/Folder.vue";
import Construction from "@vue/Apps/Construction.vue";
import IconReboot from "@vue/Icons/IconReboot.vue";
import IconWelcome from "@vue/Icons/IconWelcome.vue";
import IconProjects from "@vue/Icons/IconProjects.vue";

export class AppFactory {
	static createProjects(): App[] {
		return [
			new App(
				SuperHaxagon,
				"Project: Super Haxagon",
				"super-haxagon.md",
				"A Super Hexagon Clone",
				"/img/super-haxagon/thumb.png",
				1024,
				768,
				true,
				"#0d1117"
			),
			new App(
				MyWebsite,
				"Project: My Website",
				"my-website.md",
				"You're here right now!",
				"/img/my-website/thumb.png",
				1024,
				768,
				true,
				"#0d1117"
			),
			new App(
				ClickNET,
				"Project: Click.NET",
				"click-net.md",
				"Multiplayer clicker game",
				"/img/click-net/thumb.png",
				1024,
				768,
				true,
				"#0d1117"
			),
			new App(
				HiddenPerspective,
				"Project: Hidden Perspective",
				"hidden-perspective.md",
				"A co-op VR game",
				"/img/hidden-perspective/thumb.png",
				1024,
				768,
				true,
				"#0d1117"
			),
			new App(
				Construction,
				"More to come!",
				"More to come!",
				"Under Construction",
				"/img/construction.png",
				600,
				0,
				false,
				"rgba(0,0,0,0.95)"
			)
		]
	}

	static createApps(): App[] {
		return [
			new App(
				Reboot,
				"Power Options",
				"Power",
				"Reboot or Shutdown This PC",
				IconReboot,
				280,
				136,
				false,
				"grey",
			),
			new App(
				Welcome,
				"Terminal",
				"Welcome",
				"Welcome to awalter.net",
				IconWelcome,
				775,
				485,
				true,
			),
			new App(
				Folder,
				"Personal Projects",
				"Projects",
				"Personal Projects Folder",
				IconProjects,
				822,
				600,
				true,
				"#202020",
				{
					apps: this.createProjects()
				}
			)
		]
	}
}