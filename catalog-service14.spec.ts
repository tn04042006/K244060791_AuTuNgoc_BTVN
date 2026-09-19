import { TestBed } from '@angular/core/testing';
import { CatalogService14 } from './catalog-service14';

describe('CatalogService14', () => {
  let service: CatalogService14;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogService14);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
