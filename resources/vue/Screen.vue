<template>
	<div id="screen" v-bind:style="{maxWidth: width, maxHeight: height}">
		<component v-if="state" v-bind:is="state" v-bind="data"></component>
	</div>
</template>

<script>
import Boot from "./Boot";
import Console from "./Console";
import {ConData, Format} from "../ts/ConData";
import {Runner} from "../ts/Runner";
import {StateProgress} from "../ts/States/StateProgress";
import {StateBlank} from "../ts/States/StateBlank";
import {StateSplash} from "../ts/States/StateSplash";
import {StateModeColor} from "../ts/States/StateModeColor";
import {StateConsole} from "../ts/States/StateConsole";
import {StateResize} from "../ts/States/StateResize";

let internal = {
	state: null,
	data: null,
	width: "800px",
	height: "600px"
}

export default {
	name: "Screen",
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
			new StateBlank(0),
			new StateResize(100, "640px", "480px"),
			new StateBlank(600),
			new StateResize(0, "800px", "600px"),
			new StateSplash(1600),
			new StateBlank(0),
			new StateResize(0, "640px", "480px"),
			new StateModeColor(0, con, false),
			new StateConsole(900, con),
			new StateConsole(20,  con, "Web version 6.9.42-generic WebDevOS SMP " + new Date() + " (WebDevOS 6.9.42~420.0-generic)"),
			new StateConsole(20,  con, "Command line: BOOT_IMAGE=/app.js file=/index.html ---"),
			new StateConsole(0,   con, "KERNEL supported cpus:"),
			new StateConsole(0,   con, "&nbsp;&nbsp;Intel GenuineIntel"),
			new StateConsole(0,   con, "&nbsp;&nbsp;AMD AuthenticAMD"),
			new StateConsole(0,   con, "&nbsp;&nbsp;Hygiene HygieneGenuine"),
			new StateConsole(0,   con, "&nbsp;&nbsp;Dragons MysticDRAG"),
			new StateConsole(0,   con, "&nbsp;&nbsp;Aaron(R) WalterArch"),
			new StateConsole(100, con, "&nbsp;&nbsp;potato ALiteralPotato"),
			new StateConsole(30,  con, "efi: EFI v2.60 by EDK II"),
			new StateConsole(10,  con, "secureboot: Secure boot enabled, probably"),
			new StateConsole(10,  con, "SMBIOS 2.8 present."),
			new StateConsole(20,  con, "tsc: Detected 3400.420 MHz processor"),
			new StateConsole(80,  con, "warn: Oh look, an error message!"),
			new StateConsole(20,  con, "info: No, just a warning..."),
			new StateConsole(20,  con, "No NUMA configuration found"),
			new StateConsole(0,   con, "smpboot: Allowing 64 CPUs, 64 hotplug CPUs... wait"),
			new StateConsole(100, con, "Trying to unpack rootfs image as initramfs..."),
			new StateConsole(20,  con, "Freeing initrd memory: 92976K"),
			new StateConsole(80,  con, "Initialise system trusted keyrings"),
			new StateConsole(0,   con, "Run /init as init process"),
			new StateConsole(0,   con, "&nbsp;&nbsp;with arguments:"),
			new StateConsole(0,   con, "&nbsp;&nbsp;&nbsp;&nbsp;/init"),
			new StateConsole(0,   con, "&nbsp;&nbsp;&nbsp;&nbsp;---"),
			new StateConsole(0,   con, "&nbsp;&nbsp;with environment:"),
			new StateConsole(0,   con, "&nbsp;&nbsp;&nbsp;&nbsp;HOME=/"),
			new StateConsole(0,   con, "&nbsp;&nbsp;&nbsp;&nbsp;TERM=linux"),
			new StateConsole(0,   con, "&nbsp;&nbsp;&nbsp;&nbsp;BOOT_IMAGE=/app.js"),
			new StateConsole(0,   con, "&nbsp;&nbsp;&nbsp;&nbsp;file=/index.html"),
			new StateConsole(600, con, "fbcon: Look at me, I'm the console now"),
			new StateConsole(100, con, "Console: switching to color frame buffer device 100x37"),
			new StateResize(200, "800px", "600px"),
			new StateModeColor(0, con, true),
			new StateConsole(0,   con, "lp: driver loaded but no devices found"),
			new StateConsole(50,  con, "systemd[1]: Inserted module 'autofs4'"),
			new StateConsole(80,  con, "systemd[1]: Detected virtualization website."),
			new StateConsole(0,   con, "systemd[1]: Set hostname to &lt;awalter.net&gt;."),
			new StateConsole(0,   con, "systemd[1]: Mounting Huge Pages File System..."),
			new StateConsole(0,   con, "systemd[1]: Starting"),
			new StateConsole(200, con, "To Waste Your Time", Format.ServiceStarting),
			new StateConsole(0,   con, "Create Volatile Files and Directories", Format.ServiceFinishOK),
			new StateConsole(0,   con, "Network Name Resolution", Format.ServiceStarting),
			new StateConsole(100, con, "Network Time Synchronization", Format.ServiceStarting),
			new StateConsole(0,   con, "Network Time Synchronization", Format.ServiceStartOK),
			new StateConsole(0,   con, "System Time Set", Format.ServiceTarget),
			new StateConsole(0,   con, "Network Name Resolution", Format.ServiceStartOK),
			new StateConsole(0,   con, "Host and Network Name Lookups", Format.ServiceTarget),
			new StateConsole(0,   con, "Paths", Format.ServiceTarget),
			new StateConsole(0,   con, "Timers", Format.ServiceTarget),
			new StateConsole(0,   con, "Sockets", Format.ServiceTarget),
			new StateConsole(50,  con, "Accounts Service", Format.ServiceStarting),
			new StateConsole(100, con, "Network Manager", Format.ServiceStarting),
			new StateConsole(0,   con, "Login Prompts", Format.ServiceTarget),
			new StateConsole(100, con, "Network Manager", Format.ServiceFinishOK),
			new StateConsole(120, con, "Basic Networking", Format.ServiceTarget),
			new StateConsole(10,  con, "System Logging Service", Format.ServiceStarting),
			new StateConsole(10,  con, "Switcheroo", Format.ServiceStarting),
			new StateConsole(10,  con, "Login Service", Format.ServiceStarting),
			new StateConsole(10,  con, "Disk Manager", Format.ServiceStarting),
			new StateConsole(10,  con, "Filesystem", Format.ServiceStarting),
			new StateConsole(100, con, "Disk Manager", Format.ServiceStartOK),
			new StateConsole(80,  con, "System Logging Service", Format.ServiceStartOK),
			new StateConsole(120, con, "Login Service", Format.ServiceStartOK),
			new StateConsole(0,   con, "Accounts Service", Format.ServiceStartOK),
			new StateConsole(200, con, "Switcheroo", Format.ServiceStartOK),
			new StateConsole(100, con, "Filesystem", Format.ServiceStartOK),
			new StateConsole(500, con, "Hold until boot process finishes up", Format.ServiceStarting),
			new StateConsole(600, con, "Waisting Your Time", Format.ServiceFinishOK),
			new StateBlank(1000),
			new StateBlank(1000, "#1c4700"),
			new StateResize(0, null, null),
		]).run();
	}
}
</script>

<style lang="sass" scoped>
#screen
	width: 100%
	height: 100%
	border: 2px solid #222
	padding: 5px
	background-color: #000
	box-shadow: 8px 8px 8px #000
	box-sizing: border-box
	overflow: hidden
</style>