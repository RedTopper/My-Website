import {State} from "../States/State";
import {IScreen} from "./IScreen";

export class Runner {
	private states: State[] = [];
	private running: boolean = false;
	private readonly screen: IScreen;

	constructor(screen: IScreen) {
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

	public getScreen(): IScreen {
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
