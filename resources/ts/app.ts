import Vue from 'vue';
import Boot from '../vue/Boot.vue';
import Console from '../vue/Console.vue';
import {Runner, StateConsole, StateProgress} from "./state";

let internal = {
	state: null,
	data: null
}

new Vue({
	el: '#app',
	data() {
		return internal;
	},
	components: {Boot, Console},
	mounted() {
		new Runner(internal, [
			new StateProgress(Boot, 70, 0, "00"),
			new StateProgress(Boot, 60, 2, "01"),
			new StateProgress(Boot, 400, 5, "06"),
			new StateProgress(Boot, 90, 15, "10"),
			new StateProgress(Boot, 150, 40, "2B"),
			new StateProgress(Boot, 600, 55, "E0"),
			new StateProgress(Boot, 100, 99, "E2"),
			new StateProgress(Boot, 50, 100, "E3"),
			new StateConsole(Console, 2000),
		]).run();
	}
});
