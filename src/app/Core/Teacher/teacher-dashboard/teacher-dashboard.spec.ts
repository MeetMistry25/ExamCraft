import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherDashboard } from './teacher-dashboard';

describe('TeacherDashboard', () => {
  let component: TeacherDashboard;
  let fixture: ComponentFixture<TeacherDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
