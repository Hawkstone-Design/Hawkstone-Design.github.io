import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatWeDoLinksComponent } from './what-we-do-links.component';

describe('WhatWeDoLinksComponent', () => {
  let component: WhatWeDoLinksComponent;
  let fixture: ComponentFixture<WhatWeDoLinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhatWeDoLinksComponent]
    });
    fixture = TestBed.createComponent(WhatWeDoLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
