import {Component} from "vue";

export interface IApp {
	icon: Component,
	app: Component,
	width: string,
	height: string,
	title: string,
	maximizable: boolean
}
