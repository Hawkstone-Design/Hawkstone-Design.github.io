import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LensDesignComponent } from './lens-design.component';

describe('LensDesignComponent', () => {
  let component: LensDesignComponent;
  let fixture: ComponentFixture<LensDesignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LensDesignComponent]
    });
    fixture = TestBed.createComponent(LensDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
