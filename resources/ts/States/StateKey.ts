import {State} from "./State";
import {Runner} from "../App/Runner";

export interface Fork {
	keypress: string,
	events: State[]
}

export class StateKey extends State {
	choices: Fork[];

	constructor(time: number, choices: Fork[]) {
		super(null, time);
		this.choices = choices;
	}

	data(runner: Runner): any {
		if (!runner.getScreen()) {
			return null
		}

		for (let i = 0; i < this.choices.length; i++) {
			if (runner.getScreen().getKeypress() == this.choices[i].keypress) {
				runner.add(this.choices[i].events);
				runner.getScreen().resetKeypress();
				return;
			}
		}

		// Run default first
		runner.add(this.choices[0].events);
		runner.getScreen().resetKeypress()
	}
}