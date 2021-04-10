import {Runner} from "./Runner";
import {State} from "./States/State";
import {StateBlank} from "./States/StateBlank";
import {StateResize} from "./States/StateResize";
import {StateWindow} from "./States/StateWindow";
import {ConData, Format} from "./ConData";
import {StateModeColor} from "./States/StateModeColor";
import {StateConsole} from "./States/StateConsole";
import {StateProgress} from "./States/StateProgress";
import {StateSplash} from "./States/StateSplash";
import {StateKey} from "./States/StateKey";
import {Component} from "vue";

export interface Internal {
	keypress: string | null
	state: Component | null
	data: any
	width: string | null
	height: string | null
}

export class RunnerFactory {
	static create(internal: Internal): Runner {
		let runner = new Runner(internal);
		let con = new ConData();
		let conPxe = new ConData();

		let os: State[] = [
			new StateBlank(1000),
			new StateBlank(1000, "#202020"),
			new StateResize(1000),
			new StateBlank(2000, "#202020", "background.jpg"),
			new StateWindow(0, "background.jpg"),
		]

		let console: State[] = [
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
		]

		let pxe: State[] = [
			new StateBlank(0),
			new StateResize(0, "640px", "480px"),
			new StateModeColor(0, conPxe, false),
			new StateConsole(1000,conPxe, ">>Start PXE over IPv4..", Format.None),
			new StateConsole(1200,conPxe, "&nbsp;&nbsp;Station IP address is 10.0.0.100", Format.None),
			new StateConsole(0,   conPxe, "&nbsp;", Format.None),
			new StateConsole(200, conPxe, "&nbsp;&nbsp;Server IP address is 10.0.0.2", Format.None),
			new StateConsole(0,   conPxe, "&nbsp;&nbsp;NBP filename is /e64/syslinux.efi", Format.None),
			new StateConsole(0,   conPxe, "&nbsp;&nbsp;NBP filesize is 196536 Bytes", Format.None),
			new StateConsole(1000,conPxe, "&nbsp;Downloading NBP file...", Format.None),
			new StateConsole(0,   conPxe, "&nbsp;", Format.None),
			new StateConsole(1000,conPxe, "&nbsp;&nbsp;NBP file downloaded successfully.", Format.None),
			new StateConsole(0,   conPxe, "Getting cached packet", Format.None),
			new StateConsole(1000,   conPxe, "My IP is 10.0.0.100", Format.None),
		]

		console = console.concat(os);
		pxe = pxe.concat(console);

		let bios: State[] = [
			new StateProgress(70, 0, "00"),
			new StateProgress(60, 2, "01"),
			new StateProgress(400, 5, "06"),
			new StateProgress(90, 15, "10"),
			new StateProgress(150, 40, "2B"),
			new StateProgress(600, 55, "E0"),
			new StateProgress(900, 95, "E2"),
			new StateProgress(1000, 100, "E3"),
			new StateBlank(0),
			new StateResize(0, "640px", "480px"),
			new StateBlank(600),
			new StateResize(0, "800px", "600px"),
			new StateSplash(1600),
			new StateKey(0, [
				{keypress: "", events: os},
				{keypress: "Shift", events: pxe}
			])
		]

		runner.add(bios);
		return runner;
	}
}