import { Component, OnInit } from '@angular/core';
import { Articulo } from '../../models/articulo/articulo.model';
import { ArticuloService } from '../../services/articulo.service';

@Component({
  selector: 'app-articulo-list',
  templateUrl: './articulo-list.component.html',
  styleUrl: './articulo-list.component.css'
})
export class ArticuloListComponent implements OnInit {

  articulos?: Articulo[];
  currentArticulo: Articulo = {};
  currentIndex = -1;
  nombre = '';
  loading: boolean = false;

  constructor(private articuloService: ArticuloService) { }

  ngOnInit(): void {
    this.retrieveArticulos();
  }

  retrieveArticulos(): void {
    this.loading = true;
    this.articuloService.getAll()
      .subscribe({
        next: (data) => {
          this.articulos = data;
          console.log(data);
          this.loading = false;
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveArticulos();
    this.currentArticulo = {};
    this.currentIndex = -1;
  }

  setActiveArticulo(articulo: Articulo, index: number): void {
    this.currentArticulo = articulo;
    this.currentIndex = index;
  }

  removeAllArticulos(): void {
    this.articuloService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchNombre(): void {
    this.loading = true;
    this.currentArticulo = {};
    this.currentIndex = -1;

    this.articuloService.findByNombreContaining(this.nombre)
      .subscribe({
        next: (data) => {
          this.articulos = data;
          console.log(data);
          this.loading = false;
        },
        error: (e) => console.error(e)
      });
  }

}
