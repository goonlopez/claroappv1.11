import { TestBed } from '@angular/core/testing';

import { InfoNumerosService } from './info-numeros.service';

describe('InfoNumerosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfoNumerosService = TestBed.get(InfoNumerosService);
    expect(service).toBeTruthy();
  });
});
