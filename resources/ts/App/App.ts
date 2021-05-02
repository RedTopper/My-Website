import {Component} from "vue";

export class App {
	constructor(
		public readonly app: Component,
		public readonly title: string,
		public readonly label: string,
		public readonly hover: string,
		public readonly thumb: Component | string,
		public readonly width: number,
		public readonly height: number,
		public readonly maximizable: boolean = true,
		public readonly background?: string,
		protected data?: any
	) {}

	get componentData() {
		return this.data;
	}
}
