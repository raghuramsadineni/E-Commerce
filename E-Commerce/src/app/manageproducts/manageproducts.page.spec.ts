import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageproductsPage } from './manageproducts.page';

describe('ManageproductsPage', () => {
  let component: ManageproductsPage;
  let fixture: ComponentFixture<ManageproductsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageproductsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageproductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
