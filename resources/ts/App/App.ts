import {Component} from "vue";

export class App {
	public readonly icon: Component | string;
	public readonly app: Component;
	public readonly width: number;
	public readonly height: number;
	public readonly maximizable: boolean;
	public readonly title: string;
	public readonly label: string;
	public readonly hover: string;
	public readonly componentData?: any;
	public readonly background?: string;

	constructor(
		app: Component,
		title: string,
		label: string,
		hover: string,
		icon: Component | string,
		width: number,
		height: number,
		maximizable: boolean = true,
		background?: string,
		componentData?: any) {
		this.icon = icon;
		this.app = app;
		this.width = width;
		this.height = height;
		this.maximizable = maximizable;
		this.title = title;
		this.label = label;
		this.hover = hover;
		this.background = background;
		this.componentData = componentData;

	}
}
