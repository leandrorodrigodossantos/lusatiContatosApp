/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GrupoContatoService } from './grupo-contato.service';

describe('Service: GrupoContato', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GrupoContatoService]
    });
  });

  it('should ...', inject([GrupoContatoService], (service: GrupoContatoService) => {
    expect(service).toBeTruthy();
  }));
});
