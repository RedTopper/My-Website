import {Component} from 'vue';
import Boot from '../vue/Boot.vue';
import Console from '../vue/Console.vue';
import Blank from '../vue/Blank.vue';
import Splash from '../vue/Splash.vue';

export class ConData {
	timeStart: number = 0;
	lines: string[] = [];
	color: boolean = false;
}

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

	constructor(time: number, percent: number, code: string) {
		super(Boot, time);
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
	con: ConData;
	text?: string;
	color?: boolean;

	constructor(time: number, con: ConData, text?: string, color?: boolean) {
		super(Console, time);
		this.con = con;
		this.text = text;
		this.color = color;
	}

	data() {
		// stop if text is udefined
		if (!this.text) {
			return {lines: []}
		}

		// Elapsed time
		let elapsed = 0;
		if (this.con.timeStart != 0) {
			elapsed = (new Date().getTime() - this.con.timeStart) / 1000 + Math.random() / 1000;
		}

		// Format time [   0.000000] like that
		const len = 11;
		const frac = 6;
		const n = elapsed.toFixed(frac) + '';
		const time = n.length >= len ? n : new Array(len - n.length + 1).join('&nbsp;') + n;
		this.con.lines.push('[' + time + '] ' + this.text)

		// Update the start time if it is unset
		if (this.con.timeStart == 0) {
			this.con.timeStart = new Date().getTime();
		}

		// scroll down
		let objDiv = document.getElementById("app");
		if (objDiv) objDiv.scrollTop = objDiv.scrollHeight;

		// set color
		if (this.color != undefined) this.con.color = this.color;

		return {
			lines: this.con.lines,
			color: this.con.color
		}
	}
}

export class StateBlank extends State {
	constructor(time: number) {
		super(Blank, time);
	}
	data() {}
}

export class StateSplash extends State {
	constructor(time: number) {
		super(Splash, time);
	}
	data() {}
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
