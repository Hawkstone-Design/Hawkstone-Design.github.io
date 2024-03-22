import { createReducer, Action, on } from "@ngrx/store";
import { IAppState } from "./state.interface";
import { setTestStringAction, setWhatWeDoSectionAction } from "./state.actions";
import { WhatWeDoSection } from "../shared/enums/what-we-do-section.enum";

export const initialState: IAppState = {
    test:'Hello World',
  currentWhatWeDoSection: WhatWeDoSection.WebOrdering
  };
  

  const appReducer = createReducer(
    initialState,
    on(setTestStringAction, setTestString),
    on(setWhatWeDoSectionAction, setWhatWeDoSection),
  );

  export const reducer = (state: IAppState | undefined, action: Action) =>
  appReducer(state, action);

  function setTestString(
    state: IAppState,
    action: { test: string }
  ): IAppState {

    return {
      ...state,
      test: action.test,
    };
  }
  function setWhatWeDoSection(
    state: IAppState,
    action: { section: WhatWeDoSection }
  ): IAppState {

    return {
      ...state,
      currentWhatWeDoSection: action.section,
    };
  }