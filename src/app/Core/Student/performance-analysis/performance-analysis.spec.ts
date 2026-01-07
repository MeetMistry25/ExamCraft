import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceAnalysis } from './performance-analysis';

describe('PerformanceAnalysis', () => {
  let component: PerformanceAnalysis;
  let fixture: ComponentFixture<PerformanceAnalysis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerformanceAnalysis]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformanceAnalysis);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
