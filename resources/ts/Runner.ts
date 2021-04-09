import {Component} from "vue";
import {State} from "./States/State";

export class Runner {
	states: State[];
	internal:  {state: Component | null, data: any};
	index: number = 0;

	constructor(internal: {state: Component | null, data: any}, states: State[]) {
		this.internal = internal;
		this.states = states;
	}

	current(): State {
		return this.states[this.index];
	}

	run() {
		this.internal.state = this.current().comp;
		this.internal.data = this.current().data();
		if (this.index < this.states.length - 1) {
			setTimeout(this.run.bind(this), this.current().time);
			this.index++;
		}
	}
}
