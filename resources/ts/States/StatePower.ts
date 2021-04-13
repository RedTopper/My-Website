import {State} from "@ts/States/State";

import Power from "@vue/Power.vue";

export class StatePower extends State {
	constructor(time: number) {
		super(Power, time);
	}

	data() {
		return {}
	}
}
