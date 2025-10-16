import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingAssignment } from './data-binding-assignment';

describe('DataBindingAssignment', () => {
  let component: DataBindingAssignment;
  let fixture: ComponentFixture<DataBindingAssignment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataBindingAssignment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBindingAssignment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
