import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { WhatWeDoSection } from 'src/app/shared/enums/what-we-do-section.enum';
import { IAppState } from 'src/app/state/state.interface';

@Component({
  selector: 'app-what-we-do-links-small',
  templateUrl: './what-we-do-links-small.component.html',
  styleUrls: ['./what-we-do-links-small.component.scss']
})
export class WhatWeDoLinksSmallComponent implements OnInit{
  @Input()
  activeLink:WhatWeDoSection = WhatWeDoSection.WebOrdering;

  @Output()
  onSectionSelected = new EventEmitter<WhatWeDoSection>();

  constructor(private readonly store: Store<IAppState>){

  }
  ngOnInit(): void {
  }

  onLinkClicked(section:string){
    const enumValue: WhatWeDoSection = WhatWeDoSection[section as keyof typeof WhatWeDoSection];
    this.onSectionSelected.emit(enumValue);
  }

  isActive(section: string){
    const enumValue: WhatWeDoSection = WhatWeDoSection[section as keyof typeof WhatWeDoSection];
    return this.activeLink === enumValue;
  }

}
