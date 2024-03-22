import { createAction, props } from '@ngrx/store';
import { WhatWeDoSection } from '../shared/enums/what-we-do-section.enum';

const ACTION_PREFIX = '[App]';

export const setTestStringAction = createAction(
  `${ACTION_PREFIX} Set test`,
  props<{ test: string }>()
);

export const setWhatWeDoSectionAction = createAction(
  `${ACTION_PREFIX} Set what we do section`,
  props<{ section: WhatWeDoSection }>()
);
