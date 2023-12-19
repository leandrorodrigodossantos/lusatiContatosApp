import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contato } from '../persistences/contato';
import { GrupoContato } from './../persistences/grupo-contato';

@Injectable({
  providedIn: 'root',
})
export class ContatoService {
  constructor(private _http: HttpClient) {}

  insContato(contato: Contato, grupos: GrupoContato[]): Observable<any> {
    return this._http.post('http://127.0.0.1:3333/contato', { contato, grupos });
  }

  updContato(id: number, contato: Contato, grupos: GrupoContato[]): Observable<any> {
    return this._http.put(`http://127.0.0.1:3333/contato/${id}`,  { contato, grupos });
  }

  getContatoLista(): Observable<any> {
    return this._http.get('http://127.0.0.1:3333/contato/');
  }

  delContato(id: number): Observable<any> {
    return this._http.delete(`http://127.0.0.1:3333/contato/${id}`);
  }
}
