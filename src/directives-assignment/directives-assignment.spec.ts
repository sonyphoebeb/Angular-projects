import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesAssignment } from './directives-assignment';

describe('DirectivesAssignment', () => {
  let component: DirectivesAssignment;
  let fixture: ComponentFixture<DirectivesAssignment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivesAssignment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivesAssignment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
