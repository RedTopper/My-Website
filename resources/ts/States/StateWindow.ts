import Window from "../../vue/Window.vue";
import {State} from "./State";

export class StateWindow extends State {
	image?: string;

	constructor(time: number, image?: string) {
		super(Window, time);
		this.image = image;
	}

	data() {
		let image = "";
		if (this.image) {
			image = "url('/img/" + this.image + "')"
		}

		return {
			image: image
		}
	}
}
