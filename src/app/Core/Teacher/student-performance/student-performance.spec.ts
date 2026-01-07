import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPerformance } from './student-performance';

describe('StudentPerformance', () => {
  let component: StudentPerformance;
  let fixture: ComponentFixture<StudentPerformance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentPerformance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentPerformance);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
