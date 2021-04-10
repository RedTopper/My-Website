import Window from "../../vue/Desktop.vue";
import {State} from "./State";

export class StateDesktop extends State {
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
