import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContatoGrupoContatoService {

    constructor(private _http: HttpClient) {}

    insContatoGrupoContato(data: any): Observable<any> {
      return this._http.post('http://127.0.0.1:3333/contatogrupocontato', data);
    }

    updContatoGrupoContato(id: number, data: any): Observable<any> {
      return this._http.put(`http://127.0.0.1:3333/contatogrupocontato/${id}`, data);
    }

    getContatoGrupoContatoLista(): Observable<any> {
      return this._http.get('http://127.0.0.1:3333/contatogrupocontato/');
    }

    delContatoGrupoContato(id: number): Observable<any> {
      return this._http.delete(`http://127.0.0.1:3333/contatogrupocontato/${id}`);
    }

  }


