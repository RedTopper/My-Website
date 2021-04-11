import {Component} from "vue";
import {Runner} from "../App/Runner";

export abstract class State {
	time: number;
	comp: Component | null;

	protected constructor(comp: Component | null, time: number) {
		this.comp = comp;
		this.time = time;
	}

	abstract data(runner?: Runner): any;
}