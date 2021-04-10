import {State} from "./State";
import {Runner} from "../Runner";

export class StateResize extends State {
	width: string | null;
	height: string | null;

	constructor(time: number, width: string | null = null, height: string | null = null) {
		super(null, time);
		this.width = width;
		this.height = height;
	}

	data(runner: Runner): any {
		if (runner.internal) {
			runner.internal.width = this.width;
			runner.internal.height = this.height;
		}
	}
}