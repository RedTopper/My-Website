import {State} from "@ts/States/State";

import Blank from "@vue/Blank.vue";

export class StateBlank extends State {
	color: string;
	image?: string;

	constructor(time: number, color: string = "#000", image?: string) {
		super(Blank, time);
		this.color = color;
		this.image = image;
	}

	data() {
		let image = "";
		if (this.image) {
			image = "url('/img/" + this.image + "')"
		}

		return {
			color: this.color,
			image: image
		}
	}
}
