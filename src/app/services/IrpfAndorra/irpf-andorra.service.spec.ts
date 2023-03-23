import { TestBed } from '@angular/core/testing';

import { IrpfAndorraService } from './irpf-andorra.service';

describe('IrpfAndorraService', () => {
  let service: IrpfAndorraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IrpfAndorraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
