import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableTests } from './available-tests';

describe('AvailableTests', () => {
  let component: AvailableTests;
  let fixture: ComponentFixture<AvailableTests>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailableTests]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableTests);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
