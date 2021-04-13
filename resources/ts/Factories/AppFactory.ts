import {IApp} from "@ts/App/IApp";

import Something from "@vue/Pages/Something.vue";
import Reboot from "@vue/Pages/Reboot.vue";
import Welcome from "@vue/Pages/Welcome.vue";
import Projects from "@vue/Pages/Projects.vue";
import LauncherReboot from "@vue/Launchers/LauncherReboot.vue";
import LauncherWelcome from "@vue/Launchers/LauncherWelcome.vue";
import LauncherProjects from "@vue/Launchers/LauncherProjects.vue";

export class AppFactory {
	static createProjects(): IApp[] {
		return [
			{
				app: Something,
				title: "Project: Super Haxagon",
				label: "Super Haxagon",
				hover: "A Super Hexagon Clone",
				icon: "/img/projects/super.png",
				width: 800,
				height: 600,
				maximizable: true,
			},
			{
				app: Something,
				title: "A Template",
				label: "Template",
				hover: "Something",
				icon: "/img/projects/super.png",
				width: 800,
				height: 600,
				maximizable: true,
			},
		]
	}

	static createApps(): IApp[] {
		return [
			{
				app: Reboot,
				title: "Power Options",
				label: "Power",
				hover: "Reboot or Shutdown This PC",
				icon: LauncherReboot,
				background: "grey",
				width: 280,
				height: 136,
				maximizable: false,
			},
			{
				app: Welcome,
				title: "Terminal",
				label: "Welcome",
				hover: "Welcome to awalter.net",
				icon: LauncherWelcome,
				width: 775,
				height: 485,
				maximizable: true,
			},
			{
				app: Projects,
				title: "Personal Projects",
				label: "Projects",
				hover: "Personal Projects Folder",
				icon: LauncherProjects,
				background: "#202020",
				width: 800,
				height: 600,
				maximizable: true,
				componentData: {
					apps: this.createProjects()
				}
			}
		]
	}
}