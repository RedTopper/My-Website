import Vue from 'vue';
import Boot from '../vue/Boot.vue';
import Console from '../vue/Console.vue';
import {Runner, StateConsole, StateProgress, StateBlank, StateSplash, ConData} from "./state";

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
		let con = new ConData();
		new Runner(internal, [
			new StateProgress(70, 0, "00"),
			new StateProgress(60, 2, "01"),
			new StateProgress(400, 5, "06"),
			new StateProgress(90, 15, "10"),
			new StateProgress(150, 40, "2B"),
			new StateProgress(600, 55, "E0"),
			new StateProgress(100, 99, "E2"),
			new StateProgress(1000, 100, "E3"),
			new StateBlank(600),
			new StateSplash(1600),
			new StateBlank(100),
			new StateConsole(1000, con),
			new StateConsole(20, con, "Web version 6.9.42-generic WebDevOS SMP " + new Date() + " (WebDevOS 6.9.42~420.0-generic)"),
			new StateConsole(20, con, "Command line: BOOT_IMAGE=/app.js file=/index.html ---"),
			new StateConsole(0, con, "KERNEL supported cpus:"),
			new StateConsole(0, con, "&nbsp;&nbsp;Intel GenuineIntel"),
			new StateConsole(0, con, "&nbsp;&nbsp;AMD AuthenticAMD"),
			new StateConsole(0, con, "&nbsp;&nbsp;Hygiene HygieneGenuine"),
			new StateConsole(0, con, "&nbsp;&nbsp;Dragons MysticDRAG"),
			new StateConsole(0, con, "&nbsp;&nbsp;Aaron(R) Walter"),
			new StateConsole(300, con, "&nbsp;&nbsp;potato ALiteralPotato"),
			new StateConsole(30, con, "efi: EFI v2.60 by EDK II"),
			new StateConsole(10, con, "secureboot: Secure boot enabled"),
			new StateConsole(10, con, "SMBIOS 2.8 present."),
			new StateConsole(20, con, "tsc: Detected 9999.000 MHz processor"),
			new StateConsole(80, con, "warn: Oh look, an error message!"),
			new StateConsole(20, con, "info: No, just a warning..."),
			new StateConsole(20, con, "No NUMA configuration found"),
			new StateConsole(0, con, "smpboot: Allowing 420 CPUs, 69 hotplug CPUs"),
			new StateConsole(300, con, "Trying to unpack rootfs image as initramfs..."),
			new StateConsole(20, con, "Freeing initrd memory: 92976K"),
			new StateConsole(80, con, "Initialise system trusted keyrings"),
			new StateConsole(0, con, "Run /init as init process"),
			new StateConsole(0, con, "&nbsp;&nbsp;with arguments:"),
			new StateConsole(0, con, "&nbsp;&nbsp;&nbsp;&nbsp;/init"),
			new StateConsole(0, con, "&nbsp;&nbsp;&nbsp;&nbsp;---"),
			new StateConsole(200, con, "&nbsp;&nbsp;with environment:"),
			new StateConsole(0, con, "&nbsp;&nbsp;&nbsp;&nbsp;HOME=/"),
			new StateConsole(0, con, "&nbsp;&nbsp;&nbsp;&nbsp;TERM=linux"),
			new StateConsole(0, con, "&nbsp;&nbsp;&nbsp;&nbsp;BOOT_IMAGE=/app.js"),
			new StateConsole(0, con, "&nbsp;&nbsp;&nbsp;&nbsp;file=/index.html"),
			new StateConsole(400, con, "Console: switching to colour frame buffer device 100x37", true),
		]).run();
	}
});
