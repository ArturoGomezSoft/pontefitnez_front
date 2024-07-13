import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Membresia } from '../models/membresia/membresia.model';

const baseUrl = 'http://localhost:8080/api/membresias';

@Injectable({
  providedIn: 'root'
})
export class MembresiaService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Membresia[]> {
    return this.http.get<Membresia[]>(baseUrl);
  }

  get(id: any): Observable<Membresia> {
    return this.http.get<Membresia>(`${baseUrl}/${id}`);
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

  findByNombre(nombre: any): Observable<Membresia[]> {
    return this.http.get<Membresia[]>(`${baseUrl}?nombre=${nombre}`);
  }
}
