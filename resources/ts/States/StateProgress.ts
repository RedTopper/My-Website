import Boot from "../../vue/Bios.vue";
import {State} from "./State";

export class StateProgress extends State {
	percent: number;
	code: string;

	constructor(time: number, percent: number, code: string) {
		super(Boot, time);
		this.percent = percent;
		this.code = code;
	}

	data() {
		return {
			code: this.code,
			percent: this.percent + "%"
		}
	}
}
