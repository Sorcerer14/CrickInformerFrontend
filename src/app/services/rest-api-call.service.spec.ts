import { TestBed } from '@angular/core/testing';

import { RESTApiCallService } from './rest-api-call.service';

describe('RESTApiCallService', () => {
  let service: RESTApiCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RESTApiCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
