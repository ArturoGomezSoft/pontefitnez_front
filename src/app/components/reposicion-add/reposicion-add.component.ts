import { Component, OnInit } from '@angular/core';
import { Reposicion } from '../../models/reposicion/reposicion.model';
import { ReposicionService } from '../../services/reposicion.service';
import { ArticuloService } from '../../services/articulo.service';

@Component({
  selector: 'app-reposicion-add',
  templateUrl: './reposicion-add.component.html',
  styleUrl: './reposicion-add.component.css'
})
export class ReposicionAddComponent implements OnInit {
  articulos: any[] = [];
  selectedArticulo: any = { precio: 0.00 };
  seleccionoArticulo: boolean = false;
  loading: boolean = false;

  reposicion: Reposicion = {
	nombre: '',
	cantidad: 0,
	costo: 0,
	tipo_pago: '',
	fecha_hora: '',
//MoAddComp1
  };
  submitted = false;

  constructor(private reposicionService: ReposicionService, private articuloService: ArticuloService) { }

  ngOnInit(): void {
    this.loading = true;
      this.articuloService.findAllArticulo().subscribe(data => {this.articulos = data; this.loading = false;});
  }

  onArticuloSelect(event: any): void {
    this.selectedArticulo = this.articulos.filter(articulo => articulo.id === +event)[0];
    this.seleccionoArticulo = true;
  }

  createReposicion(): void {
    this.loading = true;
    const data = {
      nombre: this.selectedArticulo.nombre,
      cantidad: this.reposicion.cantidad,
      costo: this.selectedArticulo.precio,
      tipo_pago: this.reposicion.tipo_pago,
    };
  
    this.reposicionService.createReposicion(data)
          .subscribe({next: (res) => { this.submitted = true;  this.loading = false;}});
  }

  saveReposicion(): void {
    const data = {
		nombre: this.reposicion.nombre,
		cantidad: this.reposicion.cantidad,
		costo: this.reposicion.costo,
		tipo_pago: this.reposicion.tipo_pago,
		fecha_hora: this.reposicion.fecha_hora,
//MoAddComp2
    };

    this.reposicionService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newReposicion(): void {
    this.submitted = false;
    this.reposicion = {
		nombre: '',
		cantidad: 0,
		costo: 0,
		tipo_pago: '',
		fecha_hora: '',
//MoAddComp3
    };
  }

}
