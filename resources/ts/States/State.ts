import {Component} from "vue";

export abstract class State {
	time: number;
	comp: Component;

	protected constructor(comp: Component, time: number) {
		this.comp = comp;
		this.time = time;
	}

	abstract data(internal?: any): any;
}