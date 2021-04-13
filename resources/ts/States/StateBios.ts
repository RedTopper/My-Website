import {State} from "@ts/States/State";

import Boot from "@vue/Bios.vue";

export class StateBios extends State {
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
