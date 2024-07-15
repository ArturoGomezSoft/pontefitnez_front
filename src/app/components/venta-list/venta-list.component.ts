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
  totalEfectivo: number = 0;
  currentVenta: Venta = {};
  currentIndex = -1;
  nombre = '';
  loading: boolean = false;

  constructor(private ventaService: VentaService) { }

  ngOnInit(): void {
    this.loading = true;
    this.listarHoy();
    this.calcularTotalEfectivo();
  }

  retrieveVentas(): void {
    this.ventaService.getAll()
      .subscribe({
        next: (data) => {
          this.ventas = data;
          console.log(data);
          this.calcularTotalEfectivo();
          this.loading = false;
        },
        error: (e) => {
          console.error(e);
          this.loading = false;
        }
      });
  }

  calcularTotalEfectivo(): void {
    if (this.ventas && this.ventas.length > 0) {
      this.totalEfectivo = this.ventas
        .filter(venta => venta.tipo_pago === 'Efectivo')
        .reduce((sum, venta) => sum + (Number(venta.costo) || 0), 0);
    } else {
      this.totalEfectivo = 0;
    }
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

  listarManana(): void {
    this.ventaService.findByFechaManana()
      .subscribe({next: (data) => {this.ventas = data; this.calcularTotalEfectivo(); this.loading = false;}});
  }

  listarTarde(): void {
    this.ventaService.findByFechaTarde()
      .subscribe({next: (data) => {this.ventas = data; this.calcularTotalEfectivo(); this.loading = false;}});
  }

  listarHoy(): void {
    this.ventaService.findByFechaHoy()
      .subscribe({next: (data) => {this.ventas = data; this.calcularTotalEfectivo(); this.loading = false;}});
  }

  listarSemana(): void {
    this.ventaService.findBySemanaActual()
      .subscribe({next: (data) => {this.ventas = data; this.calcularTotalEfectivo(); this.loading = false;}});
  }

  listarMes(): void {
    this.ventaService.findByMesActual()
      .subscribe({next: (data) => {this.ventas = data; this.calcularTotalEfectivo(); this.loading = false;}});
  }

  listarTotal(): void {
    this.ventaService.getAll()
      .subscribe({next: (data) => {this.ventas = data; this.calcularTotalEfectivo(); this.loading = false;}});
  }
}
