import { Component, Input, OnInit } from '@angular/core';
import { VentaService } from '../../services/venta.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Venta } from '../../models/venta/venta.model';

@Component({
  selector: 'app-venta-details',
  templateUrl: './venta-details.component.html',
  styleUrl: './venta-details.component.css'
})
export class VentaDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentVenta: Venta = {
    nombre: '',
    cantidad: 0,
    costo: 0,
    tipo_pago: '',
    fecha_hora: '',
//MoDetComp1
  };
  
  message = '';

  constructor(
    private ventaService: VentaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getVenta(this.route.snapshot.params["id"]);
    }
  }

  getVenta(id: string): void {
    this.ventaService.get(id)
      .subscribe({
        next: (data) => {
          this.currentVenta = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateVenta(): void {
    this.message = '';

    this.ventaService.update(this.currentVenta.id, this.currentVenta)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This venta was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteVenta(): void {
    this.ventaService.delete(this.currentVenta.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/venta']);
        },
        error: (e) => console.error(e)
      });
  }
}