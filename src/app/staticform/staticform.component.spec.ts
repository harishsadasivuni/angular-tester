/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StaticformComponent } from './staticform.component';

describe('StaticformComponent', () => {
  let component: StaticformComponent;
  let fixture: ComponentFixture<StaticformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
