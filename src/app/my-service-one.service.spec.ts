/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyServiceOneService } from './my-service-one.service';

describe('Service: MyServiceOne', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyServiceOneService]
    });
  });

  it('should ...', inject([MyServiceOneService], (service: MyServiceOneService) => {
    expect(service).toBeTruthy();
  }));
});
