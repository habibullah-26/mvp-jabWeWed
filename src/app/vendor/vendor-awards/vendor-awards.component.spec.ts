import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorAwardsComponent } from './vendor-awards.component';

describe('VendorAwardsComponent', () => {
  let component: VendorAwardsComponent;
  let fixture: ComponentFixture<VendorAwardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VendorAwardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorAwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
