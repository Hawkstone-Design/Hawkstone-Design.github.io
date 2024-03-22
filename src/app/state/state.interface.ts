import { WhatWeDoSection } from "../shared/enums/what-we-do-section.enum";


export const APP_STATE_NAME = 'appState';

export interface IAppState {
    test:string;
    currentWhatWeDoSection:WhatWeDoSection;
}