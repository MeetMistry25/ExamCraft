import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionPreview } from './question-preview';

describe('QuestionPreview', () => {
  let component: QuestionPreview;
  let fixture: ComponentFixture<QuestionPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionPreview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionPreview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
