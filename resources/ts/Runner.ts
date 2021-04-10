import {State} from "./States/State";
import {Internal} from "./RunnerFactory";

export class Runner {
	states: State[] = [];
	internal:  Internal;
	index: number = 0;

	constructor(internal: Internal) {
		this.internal = internal;
	}

	current(): State {
		return this.states[this.index];
	}

	add(states: State[]) {
		this.states = this.states.concat(states);
	}

	run() {
		let data = this.current().data(this);
		if (data) {
			data.keypress = this.internal.keypress;
			this.internal.data = data;
		}

		if (this.current().comp) {
			this.internal.state = this.current().comp;
		}

		if (this.index < this.states.length - 1) {
			setTimeout(this.run.bind(this), this.current().time);
			this.index++;
		}
	}
}
