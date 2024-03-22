import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalTwinComponent } from './digital-twin.component';

describe('DigitalTwinComponent', () => {
  let component: DigitalTwinComponent;
  let fixture: ComponentFixture<DigitalTwinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DigitalTwinComponent]
    });
    fixture = TestBed.createComponent(DigitalTwinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
