import { Component, OnInit } from '@angular/core';
import { Venta } from '../../models/venta/venta.model';
import { VentaService } from '../../services/venta.service';
import { ArticuloService } from '../../services/articulo.service';

@Component({
  selector: 'app-venta-add',
  templateUrl: './venta-add.component.html',
  styleUrl: './venta-add.component.css'
})
export class VentaAddComponent implements OnInit {
  articulos: any[] = [];
  selectedArticulo: any = { precio: 0.00 };
  seleccionoArticulo: boolean = false;

  venta: Venta = {
	nombre: '',
	cantidad: 0,
	costo: 0,
	tipo_pago: '',
	fecha_hora: '',
  };
  submitted = false;

  constructor(private ventaService: VentaService, private articuloService: ArticuloService) { }

  ngOnInit(): void {
    this.articuloService.findAllArticulo().subscribe(data => {this.articulos = data;});
  }

  onArticuloSelect(event: any): void {
    this.selectedArticulo = this.articulos.filter(articulo => articulo.id === +event)[0];
    this.seleccionoArticulo = true;
  }

  createVenta(): void {
	const data = {
		nombre: this.selectedArticulo.nombre,
		cantidad: this.venta.cantidad,
		costo: this.selectedArticulo.precio,
		tipo_pago: this.venta.tipo_pago,
		fecha_hora: this.venta.fecha_hora,
	};

	this.ventaService.createVenta(data)
      	.subscribe({next: (res) => { this.submitted = true; }});
  }

  newVenta(): void {
    this.submitted = false;
    this.venta = {
		nombre: '',
		cantidad: 0,
		costo: 0,
		tipo_pago: '',
		fecha_hora: '',
    };
  }
}
