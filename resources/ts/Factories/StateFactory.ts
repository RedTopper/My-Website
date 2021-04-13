import {ConData, Format} from "@ts/App/ConData";

import {State} from "@ts/States/State";
import {StateBlank} from "@ts/States/StateBlank";
import {StateResize} from "@ts/States/StateResize";
import {StateDesktop} from "@ts/States/StateDesktop";
import {StateModeColor} from "@ts/States/StateModeColor";
import {StateConsole} from "@ts/States/StateConsole";
import {StateBios} from "@ts/States/StateBios";
import {StateSplash} from "@ts/States/StateSplash";
import {StateKey} from "@ts/States/StateKey";
import {StatePower} from "@ts/States/StatePower";

export class StateFactory {
	static createFast(): State[] {
		return [
			new StateBlank(10, "#000"),
			new StateResize(0),
			new StateBlank(750, "#000", "background.jpg"),
			new StateDesktop(100, "background.jpg"),
		];
	}

	static createDesktop(): State[] {
		return [
			new StateBlank(200),
			new StateBlank(1000, "#202020"),
			new StateResize(1000),
			new StateBlank(2000, "#202020", "background.jpg"),
			new StateDesktop(0, "background.jpg"),
		]
	}

	// This is used for showing a splash if the user boots normally
	// (as in not chaining from the Kernel or something)
	static createDesktopEnter(): State[] {
		let desktopEnter: State[] =  [
			new StateSplash(2000, true),
		]

		return desktopEnter.concat(this.createDesktop())
	}

	static createKernelConsole(): State[] {
		let con = new ConData();
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

		return console.concat(this.createDesktop());
	}

	static createPxe(): State[] {
		let con = new ConData();
		let pxe: State[] = [
			new StateBlank(0),
			new StateResize(0, "640px", "480px"),
			new StateModeColor(0, con, false),
			new StateConsole(1000,con, ">>Start PXE over IPv4..", Format.None),
			new StateConsole(1200,con, "&nbsp;&nbsp;Station IP address is 10.0.0.100", Format.None),
			new StateConsole(0,   con, "&nbsp;", Format.None),
			new StateConsole(200, con, "&nbsp;&nbsp;Server IP address is 10.0.0.2", Format.None),
			new StateConsole(0,   con, "&nbsp;&nbsp;NBP filename is /e64/syslinux.efi", Format.None),
			new StateConsole(0,   con, "&nbsp;&nbsp;NBP filesize is 196536 Bytes", Format.None),
			new StateConsole(1000,con, "&nbsp;Downloading NBP file...", Format.None),
			new StateConsole(0,   con, "&nbsp;", Format.None),
			new StateConsole(1000,con, "&nbsp;&nbsp;NBP file downloaded successfully.", Format.None),
			new StateConsole(0,   con, "Getting cached packet", Format.None),
			new StateConsole(1000,con, "My IP is 10.0.0.100", Format.None),
		]

		return pxe.concat(this.createKernelConsole())
	}

	static createBios(): State[] {
		return [
			new StateResize(0, "800px", "600px"),
			new StateKey(0, []),
			new StateBios(70, 0, "00"),
			new StateBios(60, 2, "01"),
			new StateBios(400, 5, "06"),
			new StateBios(90, 15, "10"),
			new StateBios(150, 40, "2B"),
			new StateBios(600, 55, "E0"),
			new StateBios(900, 95, "E2"),
			new StateBios(1000, 100, "E3"),
			new StateBlank(0),
			new StateResize(0, "640px", "480px"),
			new StateBlank(600),
			new StateResize(0, "800px", "600px"),
			new StateSplash(800),
			new StateKey(0, [
				// Normal boot gets a loading wheel
				{keypress: "", events: this.createDesktopEnter()},
				{keypress: "Shift", events: this.createPxe()}
			])
		]
	}

	static createReboot() {
		let con = new ConData();
		return [
			new StateBlank(300),
			new StateResize(0, "800px", "600px"),
			new StateConsole(1000,con, "", Format.None),
			new StateSplash(2000, true),
			new StateBlank(2200)
		]
	}

	static createShutdown() {
		let reboot: State[] = this.createReboot();
		let shutdown: State[] = [
			new StatePower(0)
		]

		// Shutdown has the same as the reboot sequence but ends in
		// the StatePower() event.
		return reboot.concat(shutdown);
	}
}