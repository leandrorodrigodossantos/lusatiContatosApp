/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ContatoGrupoContatoService } from './contato-grupo-contato.service';

describe('Service: ContatoGrupoContato', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContatoGrupoContatoService]
    });
  });

  it('should ...', inject([ContatoGrupoContatoService], (service: ContatoGrupoContatoService) => {
    expect(service).toBeTruthy();
  }));
});
