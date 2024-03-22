import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatWeDoLinksLargeComponent } from './what-we-do-links-large.component';

describe('WhatWeDoLinksLargeComponent', () => {
  let component: WhatWeDoLinksLargeComponent;
  let fixture: ComponentFixture<WhatWeDoLinksLargeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhatWeDoLinksLargeComponent]
    });
    fixture = TestBed.createComponent(WhatWeDoLinksLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
