import {App} from "@ts/App/App";
import {Component} from "vue";
import Project from "@vue/Project.vue";

export class AppProject extends App {
	constructor(
		public readonly project: Component,
		title: string,
		public readonly name: string,
		public readonly year: string,
		label: string,
		hover: string,
		public readonly github: string,
		thumb: Component | string,
		public readonly icon: string,
		public readonly banner: string,
		public readonly languages: string[],
		public readonly frameworks: string[],
		public readonly platforms: string[]
	) {
		super(Project, title, label, hover, thumb, 1024, 768, true, "#0d1117");
		this.data = {
			project: this,
		};
	}
}
