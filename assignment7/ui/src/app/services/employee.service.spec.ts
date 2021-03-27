import { TestBed } from '@angular/core/testing';

import { EmployeeService } from './employee.service';

const baseUrl = 'http://localhost:3000/api/payinfo';

describe('EmployeeService', () => {
  let service: EmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
