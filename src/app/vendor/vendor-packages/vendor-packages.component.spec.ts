import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorPackagesComponent } from './vendor-packages.component';

describe('VendorPackagesComponent', () => {
  let component: VendorPackagesComponent;
  let fixture: ComponentFixture<VendorPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VendorPackagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
