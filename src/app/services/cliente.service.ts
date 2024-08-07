import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente/cliente.model';

const baseUrl = 'https://pontefitnez-back-1-0-0.onrender.com/api/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(baseUrl);
  }

  get(id: any): Observable<Cliente> {
    return this.http.get<Cliente>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByDniContaining(dni: string): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${baseUrl}/DniContaining/${dni}`);
  }
}
