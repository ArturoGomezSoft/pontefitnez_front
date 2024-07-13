import { Component, OnInit } from '@angular/core';
import { Venta } from '../../models/venta/venta.model';
import { VentaService } from '../../services/venta.service';

@Component({
  selector: 'app-venta-list',
  templateUrl: './venta-list.component.html',
  styleUrl: './venta-list.component.css'
})
export class VentaListComponent implements OnInit {

  ventas?: Venta[];
  currentVenta: Venta = {};
  currentIndex = -1;
  nombre = '';

  constructor(private ventaService: VentaService) { }

  ngOnInit(): void {
    this.retrieveVentas();
  }

  retrieveVentas(): void {
    this.ventaService.getAll()
      .subscribe({
        next: (data) => {
          this.ventas = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveVentas();
    this.currentVenta = {};
    this.currentIndex = -1;
  }

  setActiveVenta(venta: Venta, index: number): void {
    this.currentVenta = venta;
    this.currentIndex = index;
  }

  removeAllVentas(): void {
    this.ventaService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  listarHoy(): void {
    this.ventaService.findByFechaHoy()
      .subscribe({next: (data) => {this.ventas = data;}});
  }

  listarSemana(): void {
    this.ventaService.findBySemanaActual()
      .subscribe({next: (data) => {this.ventas = data;}});
  }

  listarMes(): void {
    this.ventaService.findByMesActual()
      .subscribe({next: (data) => {this.ventas = data;}});
  }

  listarTotal(): void {
    this.ventaService.getAll()
      .subscribe({next: (data) => {this.ventas = data;}});
  }
}
