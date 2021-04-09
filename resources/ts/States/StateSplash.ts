import Splash from "../../vue/Splash.vue";
import {State} from "./State";

export class StateSplash extends State {
	constructor(time: number) {
		super(Splash, time);
	}
	data() {}
}
