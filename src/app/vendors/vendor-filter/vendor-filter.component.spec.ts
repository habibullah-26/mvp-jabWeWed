import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorFilterComponent } from './vendor-filter.component';

describe('VendorFilterComponent', () => {
  let component: VendorFilterComponent;
  let fixture: ComponentFixture<VendorFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VendorFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
