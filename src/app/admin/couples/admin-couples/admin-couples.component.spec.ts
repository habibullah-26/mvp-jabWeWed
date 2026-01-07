import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCouplesComponent } from './admin-couples.component';

describe('AdminCouplesComponent', () => {
  let component: AdminCouplesComponent;
  let fixture: ComponentFixture<AdminCouplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCouplesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCouplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
