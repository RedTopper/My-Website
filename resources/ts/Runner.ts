import {State} from "./States/State";
import Screen from "../vue/Screen.vue";
import Vue from "vue";

export class Runner {
	private states: State[] = [];
	private running: boolean = false;
	private screen: Screen;

	constructor(screen: Screen) {
		this.screen = screen;
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

	public getScreen(): Screen {
		return this.screen;
	}

	private run() {
		let current = this.states.shift();
		if (!current) {
			this.running = false;
			return;
		}

		let data = current.data(this);
		if (data) {
			this.getScreen().setComponentData(data);
		}

		if (current.comp) {
			this.getScreen().setComponent(current.comp);
		}

		setTimeout(this.run.bind(this), current.time);
	}
}
