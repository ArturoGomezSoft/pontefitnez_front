import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reposicion } from '../models/reposicion/reposicion.model';

const baseUrl = 'https://pontefitnez-back-1-0-0.onrender.com/api/reposicions';

@Injectable({
  providedIn: 'root'
})
export class ReposicionService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Reposicion[]> {
    return this.http.get<Reposicion[]>(baseUrl);
  }

  get(id: any): Observable<Reposicion> {
    return this.http.get<Reposicion>(`${baseUrl}/${id}`);
  }

  findByFechaManana(): Observable<Reposicion[]> {
    return this.http.get<Reposicion[]>(`${baseUrl}/manana`);
  }

  findByFechaTarde(): Observable<Reposicion[]> {
    return this.http.get<Reposicion[]>(`${baseUrl}/tarde`);
  }

  findByFechaHoy(): Observable<Reposicion[]> {
    return this.http.get<Reposicion[]>(`${baseUrl}/hoy`);
  }

  findBySemanaActual(): Observable<Reposicion[]> {
    return this.http.get<Reposicion[]>(`${baseUrl}/semana`);
  }

  findByMesActual(): Observable<Reposicion[]> {
    return this.http.get<Reposicion[]>(`${baseUrl}/mes`);
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

  findByNombre(nombre: any): Observable<Reposicion[]> {
    return this.http.get<Reposicion[]>(`${baseUrl}?nombre=${nombre}`);
  }

  createReposicion(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
}
