import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitTest } from './submit-test';

describe('SubmitTest', () => {
  let component: SubmitTest;
  let fixture: ComponentFixture<SubmitTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmitTest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitTest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
