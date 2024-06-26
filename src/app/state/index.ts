import { InjectionToken } from "@angular/core";
import { ActionReducerMap, Action } from "@ngrx/store";
import { APP_STATE_NAME, IAppState } from "./state.interface";
import* as app from "./state.reducer";

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
    [APP_STATE_NAME]: IAppState;
  }


  /**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
export const ROOT_REDUCERS = new InjectionToken<
ActionReducerMap<State, Action>
>('Root reducers token', {
factory: () => ({
  [APP_STATE_NAME]: app.reducer
}),
});