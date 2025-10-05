import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HookPage } from './hook-page';

describe('HookPage', () => {
  let component: HookPage;
  let fixture: ComponentFixture<HookPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HookPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
