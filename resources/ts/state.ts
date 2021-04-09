import {Component} from 'vue';

export abstract class State {
	time: number;
	comp: Component;

	protected constructor(comp: Component, time: number) {
		this.comp = comp;
		this.time = time;
	}

	abstract data(): any;
}

export class StateProgress extends State {
	percent: number;
	code: string;

	constructor(comp: Component, time: number, percent: number, code: string) {
		super(comp, time);
		this.percent = percent;
		this.code = code;
	}

	data() {
		return {
			code: this.code,
			percent: this.percent + "%"
		}
	}
}

export class StateConsole extends State {
	constructor(comp: Component, time: number) {
		super(comp, time);
	}

	data() {
		return {
			lines: ["hello", "line2"]
		}
	}
}

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
