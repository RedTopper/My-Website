import {Component} from "vue";

export interface IApp {
	icon: Component,
	app: Component,
	width: number,
	height: number,
	title: string,
	maximizable: boolean
}
