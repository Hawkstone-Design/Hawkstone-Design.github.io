import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { setTestStringAction } from 'src/app/state/state.actions';
import { IAppState } from 'src/app/state/state.interface';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private readonly store: Store<IAppState>) { }


  setTest(): void {
    this.store.dispatch(setTestStringAction({ test: 'A new string' }));
  }
}
