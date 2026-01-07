import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerReview } from './answer-review';

describe('AnswerReview', () => {
  let component: AnswerReview;
  let fixture: ComponentFixture<AnswerReview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnswerReview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnswerReview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
