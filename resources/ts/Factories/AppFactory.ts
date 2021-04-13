import {IApp} from "@ts/App/IApp";

import Something from "@vue/Pages/Something.vue";
import Reboot from "@vue/Pages/Reboot.vue";
import Welcome from "@vue/Pages/Welcome.vue";
import Folder from "@vue/Pages/Folder.vue";
import IconReboot from "@vue/Icons/IconReboot.vue";
import IconWelcome from "@vue/Icons/IconWelcome.vue";
import IconProjects from "@vue/Icons/IconProjects.vue";

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
			}
		]
	}

	static createApps(): IApp[] {
		return [
			{
				app: Reboot,
				title: "Power Options",
				label: "Power",
				hover: "Reboot or Shutdown This PC",
				icon: IconReboot,
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
				icon: IconWelcome,
				width: 775,
				height: 485,
				maximizable: true,
			},
			{
				app: Folder,
				title: "Personal Projects",
				label: "Projects",
				hover: "Personal Projects Folder",
				icon: IconProjects,
				background: "#202020",
				width: 822,
				height: 600,
				maximizable: true,
				componentData: {
					apps: this.createProjects()
				}
			}
		]
	}
}