import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiringFormPage } from './hiring-form-page';

describe('HiringFormPage', () => {
  let component: HiringFormPage;
  let fixture: ComponentFixture<HiringFormPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HiringFormPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HiringFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
