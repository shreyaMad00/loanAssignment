import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseLoanComponentComponent } from './house-loan-component.component';

describe('HouseLoanComponentComponent', () => {
  let component: HouseLoanComponentComponent;
  let fixture: ComponentFixture<HouseLoanComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseLoanComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseLoanComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
