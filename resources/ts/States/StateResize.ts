import {State} from "./State";
import Boot from "../../vue/Boot.vue";

export class StateResize extends State {
	width: string;
	height: string;

	constructor(time: number, width: string, height: string) {
		super(Boot, time);
		this.width = width;
		this.height = height;
	}

	data(internal: any): any {
		if (internal) {
			internal.width = this.width;
			internal.height = this.height;
		}

		return null;
	}
}