export class ConData {
	timeStart: number = 0;
	lines: string[] = [];
	grey: boolean = false;

	addLine(format: Format, line?: string) {
		// Return early if the line is empty
		if (!line) {
			return;
		}

		// Elapsed time
		let elapsed = 0;
		if (this.timeStart != 0) {
			elapsed = (new Date().getTime() - this.timeStart) / 1000 + Math.random() / 1000;
		}

		// Apply formatting
		switch (format) {
			case Format.Kernel:
				this.lines.push(this.formatTime(elapsed) + line);
				break;
			case Format.ServiceFinishOK:
				this.lines.push(this.formatOK(line, "Finished"));
				break;
			case Format.ServiceStartOK:
				this.lines.push(this.formatOK(line, "Started"));
				break;
			case Format.ServiceTarget:
				this.lines.push(this.formatOK(line, "Reached Target"));
				break;
			case Format.ServiceStarting:
				this.lines.push(this.formatStarting(line));
				break;
			case Format.None:
			default:
				this.lines.push(line);
		}

		// Update the start time if it is unset
		if (this.timeStart == 0) {
			this.timeStart = new Date().getTime();
		}
	}

	formatStarting(line: string): string {
		// why write code when you can write hard code
		return "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Starting <span class='white'>" + line + "...</span>";
	}

	formatOK(line: string, state: string): string {
		return "[&nbsp;&nbsp;<span class='green'>OK</span>&nbsp;&nbsp;] " + state + " <span class='white'>" + line + ".</span>";
	}

	formatTime(number: number): string {
		// Format time [   0.000000] like that
		const len = 11;
		const frac = 6;
		const n = number.toFixed(frac) + '';
		const time = n.length >= len ? n : new Array(len - n.length + 1).join('&nbsp;') + n;
		return '[' + time + '] ';
	}
}

export enum Format {
	None,
	Kernel,
	ServiceStartOK,
	ServiceFinishOK,
	ServiceStarting,
	ServiceTarget
}
