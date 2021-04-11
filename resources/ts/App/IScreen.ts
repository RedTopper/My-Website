import {Component} from "vue";

export interface IScreen {
	getKeypress(): string | null;
	resetKeypress(): void;
	setComponentData(data: any): void;
	setWidth(width: string | null): void;
	setHeight(height: string | null): void;
	setComponent(component: Component): void;
}
