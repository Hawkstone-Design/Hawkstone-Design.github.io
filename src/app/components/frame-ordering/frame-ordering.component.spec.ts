import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameOrderingComponent } from './frame-ordering.component';

describe('FrameOrderingComponent', () => {
  let component: FrameOrderingComponent;
  let fixture: ComponentFixture<FrameOrderingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrameOrderingComponent]
    });
    fixture = TestBed.createComponent(FrameOrderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
