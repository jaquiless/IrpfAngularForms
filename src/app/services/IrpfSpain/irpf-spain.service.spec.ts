import { TestBed } from '@angular/core/testing';

import { IrpfSpainService } from './irpf-spain.service';

describe('IrpfSpainService', () => {
  let service: IrpfSpainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IrpfSpainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
