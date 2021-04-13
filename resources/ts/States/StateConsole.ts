import {State} from "@ts/States/State";
import {ConData, Format} from "@ts/App/ConData";

import Console from "@vue/Console.vue";

export class StateConsole extends State {
	con: ConData;
	text?: string;
	format: Format;

	constructor(time: number, con: ConData, text?: string, format: Format = Format.Kernel) {
		super(Console, time);
		this.con = con;
		this.text = text;
		this.format = format;
	}

	data() {
		this.con.addLine(this.format, this.text);
		return this.con;
	}
}
