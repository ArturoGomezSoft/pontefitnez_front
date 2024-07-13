import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Articulo } from '../models/articulo/articulo.model';

const baseUrl = 'https://pontefitnez-back-1-0-0.onrender.com/api/articulos';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Articulo[]> {
    return this.http.get<Articulo[]>(baseUrl);
  }

  get(id: any): Observable<Articulo> {
    return this.http.get<Articulo>(`${baseUrl}/${id}`);
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

  findByNombreContaining(nombre: string): Observable<Articulo[]> {
    return this.http.get<Articulo[]>(`${baseUrl}/NombreContaining/${nombre}`);
  }

  findAllArticulo(): Observable<Articulo[]> {
    return this.http.get<Articulo[]>(baseUrl);
  }
}
