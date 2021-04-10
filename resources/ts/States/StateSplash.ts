import Splash from "../../vue/Splash.vue";
import {State} from "./State";

export class StateSplash extends State {
	load: boolean

	constructor(time: number, load: boolean = false) {
		super(Splash, time);
		this.load = load;
	}

	data() {
		return {
			load: this.load
		}
	}
}
