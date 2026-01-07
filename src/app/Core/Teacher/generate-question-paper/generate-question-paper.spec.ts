import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateQuestionPaper } from './generate-question-paper';

describe('GenerateQuestionPaper', () => {
  let component: GenerateQuestionPaper;
  let fixture: ComponentFixture<GenerateQuestionPaper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateQuestionPaper]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateQuestionPaper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
