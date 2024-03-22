import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesaleOrderingComponent } from './wholesale-ordering.component';

describe('WholesaleOrderingComponent', () => {
  let component: WholesaleOrderingComponent;
  let fixture: ComponentFixture<WholesaleOrderingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WholesaleOrderingComponent]
    });
    fixture = TestBed.createComponent(WholesaleOrderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
