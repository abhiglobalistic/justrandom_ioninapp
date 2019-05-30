import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadModelPage } from './upload-model.page';

describe('UploadModelPage', () => {
  let component: UploadModelPage;
  let fixture: ComponentFixture<UploadModelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadModelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadModelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
