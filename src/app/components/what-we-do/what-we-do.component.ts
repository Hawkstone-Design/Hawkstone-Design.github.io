import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { WhatWeDoSection } from 'src/app/shared/enums/what-we-do-section.enum';
import { setWhatWeDoSectionAction } from 'src/app/state/state.actions';
import { IAppState } from 'src/app/state/state.interface';
import { selectCurrentWhatWeDoSection } from 'src/app/state/state.selector';

@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.scss'],
})
export class WhatWeDoComponent implements OnInit {
  private unsubscribe: Subject<void> = new Subject<void>();
  visibleSection: WhatWeDoSection = WhatWeDoSection.WebOrdering;

  constructor(private readonly store: Store<IAppState>) {}

  ngOnInit(): void {
    this.store.select(selectCurrentWhatWeDoSection).pipe(takeUntil(this.unsubscribe)).subscribe((activeSection)=>{
      this.visibleSection = activeSection;
    
    })
  }

  isSectionVisible(section: string): boolean {
    return this.visibleSection.toString() === section;
  }

  setVisibleSection($event: WhatWeDoSection) {
    this.store.dispatch(setWhatWeDoSectionAction({section: $event}));
  }
}
