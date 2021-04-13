import {Component} from "vue";

export interface IApp {
	icon: Component | string,
	app: Component,
	width: number,
	height: number,
	maximizable: boolean
	title: string,
	label: string,
	hover: string,
	componentData?: any
	background?: string;
}
