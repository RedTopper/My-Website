import {State} from "@ts/States/State";

import Splash from "@vue/Splash.vue";

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
