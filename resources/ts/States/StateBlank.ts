import Blank from "../../vue/Blank.vue";
import {State} from "./State";

export class StateBlank extends State {
	color: string;

	constructor(time: number, color: string = "#000") {
		super(Blank, time);
		this.color = color;
	}

	data() {
		return {
			color: this.color
		}
	}
}
