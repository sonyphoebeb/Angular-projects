import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightSwitch } from './light-switch';

describe('LightSwitch', () => {
  let component: LightSwitch;
  let fixture: ComponentFixture<LightSwitch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LightSwitch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LightSwitch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
