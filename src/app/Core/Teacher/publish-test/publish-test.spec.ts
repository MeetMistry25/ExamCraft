import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishTest } from './publish-test';

describe('PublishTest', () => {
  let component: PublishTest;
  let fixture: ComponentFixture<PublishTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublishTest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublishTest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
