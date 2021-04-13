import {State} from "@ts/States/State";
import {ConData} from "@ts/App/ConData";

import Console from "@vue/Console.vue";

export class StateModeColor extends State {
	grey: boolean;
	con: ConData;

	constructor(time: number, con: ConData, grey: boolean) {
		super(Console, time);
		this.con = con;
		this.grey = grey;
	}

	data() {
		this.con.grey = this.grey;
		return this.con;
	}
}
