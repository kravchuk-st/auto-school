import type { ReactNode } from 'react';

export enum AppActionKind {
	INCREASE = 'INCREASE',
	DECREASE = 'DECREASE'
}

export interface IAppAction {
	type: AppActionKind;
	payload: number;
}

export interface IAppState {
	isModalActive: boolean;
	modalContent: ReactNode;
}
