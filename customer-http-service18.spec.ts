import { TestBed } from '@angular/core/testing';
import { CustomerHttpService18 } from './customer-http-service18';

describe('CustomerHttpService18', () => {
  let service: CustomerHttpService18;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerHttpService18);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
