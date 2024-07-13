import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Venta } from '../models/venta/venta.model';

const baseUrl = 'https://pontefitnez-back-1-0-0.onrender.com/api/ventas';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Venta[]> {
    return this.http.get<Venta[]>(baseUrl);
  }

  get(id: any): Observable<Venta> {
    return this.http.get<Venta>(`${baseUrl}/${id}`);
  }

  findByFechaHoy(): Observable<Venta[]> {
    return this.http.get<Venta[]>(`${baseUrl}/hoy`);
  }

  findBySemanaActual(): Observable<Venta[]> {
    return this.http.get<Venta[]>(`${baseUrl}/semana`);
  }

  findByMesActual(): Observable<Venta[]> {
    return this.http.get<Venta[]>(`${baseUrl}/mes`);
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

  findByNombre(nombre: any): Observable<Venta[]> {
    return this.http.get<Venta[]>(`${baseUrl}?nombre=${nombre}`);
  }

  createVenta(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  createMembresia(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/membresia`, data);
  }
}
