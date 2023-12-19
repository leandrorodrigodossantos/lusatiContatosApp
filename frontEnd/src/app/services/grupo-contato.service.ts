import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GrupoContatoService {

  constructor(private _http: HttpClient) {}

  insGrupoContato(data: any): Observable<any> {
    return this._http.post('http://127.0.0.1:3333/group', data);
  }

  updGrupoContato(id: number, data: any): Observable<any> {
    return this._http.put(`http://127.0.0.1:3333/group/${id}`, data);
  }

  getGrupoContatoLista(): Observable<any> {
    return this._http.get('http://127.0.0.1:3333/group/');
  }

  delGrupoContato(id: number): Observable<any> {
    return this._http.delete(`http://127.0.0.1:3333/group/${id}`);
  }

  getGrupoContatoAtivos(): Observable<any> {
    return this._http.get('http://127.0.0.1:3333/group/actives/');
  }
}

