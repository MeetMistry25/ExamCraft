import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNavigation } from './test-navigation';

describe('TestNavigation', () => {
  let component: TestNavigation;
  let fixture: ComponentFixture<TestNavigation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestNavigation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestNavigation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
