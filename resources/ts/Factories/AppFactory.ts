import {App} from "@ts/App/App";
import {AppProject} from "@ts/App/AppProject";

import SuperHaxagon from "@vue/Projects/SuperHaxagon.vue";
import MyWebsite from "@vue/Projects/MyWebsite.vue";
import ClickNET from "@vue/Projects/ClickNET.vue";
import HiddenPerspective from "@vue/Projects/HiddenPerspective.vue";
import ArchangelStats from "@vue/Projects/ArchangelStats.vue";
import Construction from "@vue/Apps/Construction.vue";

import Reboot from "@vue/Apps/Reboot.vue";
import Welcome from "@vue/Apps/Welcome.vue";
import Folder from "@vue/Apps/Folder.vue";

import IconReboot from "@vue/Icons/IconReboot.vue";
import IconWelcome from "@vue/Icons/IconWelcome.vue";
import IconProjects from "@vue/Icons/IconProjects.vue";

export class AppFactory {
	static createProjects(): App[] {
		return [
			new AppProject(
				SuperHaxagon,
				"Project: Super Haxagon",
				"Super Haxagon",
				"2013-present",
				"super-haxagon.md",
				"A Super Hexagon Clone",
				"https://github.com/RedTopper/Super-Haxagon",
				"/img/super-haxagon/thumb.png",
				"/img/super-haxagon/icon.png",
				"/img/super-haxagon/banner.png",
				["C++", "C"],
				["OpenGL", "SFML"],
				["Windows", "Linux", "Nintendo 3DS", "Nintendo Switch", "TI-Nspire"]
			),
			new AppProject(
				MyWebsite,
				"Project: My Website",
				"awalter.net",
				"2021-present",
				"my-website.md",
				"You're here right now!",
				"https://github.com/RedTopper/My-Website",
				"/img/my-website/thumb.png",
				"/icon/android-chrome-512x512.png",
				"/img/logo.png",
				["TypeScript", "Sass", "HTML"],
				["Vue"],
				["Web"]
			),
			new AppProject(
				ClickNET,
				"Project: Click.NET",
				"Click.NET",
				"2019",
				"click-net.md",
				"Multiplayer clicker game",
				"https://github.com/RedTopper/Click-NET",
				"/img/click-net/thumb.png",
				"/img/click-net/icon.png",
				"/img/click-net/banner.png",
				["JavaScript", "HTML"],
				["Express.JS"],
				["Web"]
			),
			new AppProject(
				HiddenPerspective,
				"Project: Hidden Perspective",
				"Hidden Perspective",
				"2018",
				"hidden-perspective.md",
				"A co-op VR game",
				"https://github.com/RedTopper/Hidden-Perspective",
				"/img/hidden-perspective/thumb.png",
				"/img/hidden-perspective/icon.png",
				"/img/hidden-perspective/banner.png",
				["C#"],
				["Unity"],
				["Windows", "Oculus CV1"]
			),
			new AppProject(
				ArchangelStats,
				"Project: Archangel Stats",
				"Archangel Stats",
				"2018",
				"archangel-stats.md",
				"Simple Stats Site",
				"https://github.com/RedTopper/Archangel-Stats",
				"/img/archangel-stats/icon.jpg",
				"/img/archangel-stats/icon.jpg",
				"/img/archangel-stats/banner.png",
				["JavaScript", "CSS", "HTML"],
				["JQuery"],
				["Web"]
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