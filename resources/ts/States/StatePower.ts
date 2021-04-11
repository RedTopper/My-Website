import Power from "../../vue/Power.vue";
import {State} from "./State";

export class StatePower extends State {
	constructor(time: number) {
		super(Power, time);
	}

	data() {
		return {}
	}
}
