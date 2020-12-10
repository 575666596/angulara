import { TestBed } from '@angular/core/testing';

import { MyseriveService } from './myserive.service';

describe('MyseriveService', () => {
  let service: MyseriveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyseriveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
