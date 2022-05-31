import { TestBed } from '@angular/core/testing';

import { NgMaterialService } from './ng-material.service';

describe('NgMaterialService', () => {
  let service: NgMaterialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgMaterialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
