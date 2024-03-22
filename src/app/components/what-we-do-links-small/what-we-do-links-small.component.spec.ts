import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatWeDoLinksSmallComponent } from './what-we-do-links-small.component';

describe('WhatWeDoLinksSmallComponent', () => {
  let component: WhatWeDoLinksSmallComponent;
  let fixture: ComponentFixture<WhatWeDoLinksSmallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhatWeDoLinksSmallComponent]
    });
    fixture = TestBed.createComponent(WhatWeDoLinksSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
