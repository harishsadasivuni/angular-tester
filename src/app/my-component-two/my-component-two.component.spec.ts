/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComponentTwoComponent } from './my-component-two.component';

describe('MyComponentTwoComponent', () => {
  let component: MyComponentTwoComponent;
  let fixture: ComponentFixture<MyComponentTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComponentTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComponentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
