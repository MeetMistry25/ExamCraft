import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadMaterial } from './upload-material';

describe('UploadMaterial', () => {
  let component: UploadMaterial;
  let fixture: ComponentFixture<UploadMaterial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadMaterial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadMaterial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
