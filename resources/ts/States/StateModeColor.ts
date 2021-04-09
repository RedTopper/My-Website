import Console from "../../vue/Console.vue";
import {State} from "./State";
import {ConData, Format} from "../ConData";

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
