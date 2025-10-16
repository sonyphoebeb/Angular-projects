import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesAssignment } from './pipes-assignment';

describe('PipesAssignment', () => {
  let component: PipesAssignment;
  let fixture: ComponentFixture<PipesAssignment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipesAssignment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipesAssignment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
