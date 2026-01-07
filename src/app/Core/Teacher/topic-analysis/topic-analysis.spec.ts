import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicAnalysis } from './topic-analysis';

describe('TopicAnalysis', () => {
  let component: TopicAnalysis;
  let fixture: ComponentFixture<TopicAnalysis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopicAnalysis]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicAnalysis);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
