import Console from "../../vue/Blank.vue";
import {State} from "./State";
import {ConData} from "../ConData";

export class StateModeColor extends State {
	enable: boolean;
	con: ConData;

	constructor(time: number, con: ConData, enable: boolean) {
		super(Console, time);
		this.con = con;
		this.enable = enable;
	}

	data() {
		this.con.color = this.enable;
		return this.con;
	}
}
