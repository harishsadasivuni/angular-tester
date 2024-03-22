/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormPostComponent } from './formPost.component';

describe('FormPostComponent', () => {
  let component: FormPostComponent;
  let fixture: ComponentFixture<FormPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
