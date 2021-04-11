import {State} from "./States/State";
import {Internal} from "./StateFactory";

export class Runner {
	private states: State[] = [];
	private running: boolean = false;

	internal:  Internal;

	constructor(internal: Internal) {
		this.internal = internal;
	}

	public add(states: State[]) {
		this.states = this.states.concat(states);
	}

	public start() {
		if (!this.running) {
			this.running = true;
			this.run();
		}
	}

	private run() {
		let current = this.states.shift();
		if (!current) {
			this.running = false;
			return;
		}

		let data = current.data(this);
		if (data) {
			data.keypress = this.internal.keypress;
			this.internal.data = data;
		}

		if (current.comp) {
			this.internal.state = current.comp;
		}

		setTimeout(this.run.bind(this), current.time);
	}
}
