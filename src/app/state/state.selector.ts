import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IAppState, APP_STATE_NAME } from "./state.interface";

const _selectAppState = createFeatureSelector<IAppState>(APP_STATE_NAME);

export const selectAppState = (state: IAppState) => _selectAppState(state);

export const selectCurrentWhatWeDoSection = createSelector(
    _selectAppState,
    (state) => state.currentWhatWeDoSection
  );