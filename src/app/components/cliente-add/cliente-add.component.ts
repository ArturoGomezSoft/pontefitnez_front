import { Component } from '@angular/core';
import { Cliente } from '../../models/cliente/cliente.model';
import { ClienteService } from '../../services/cliente.service';
import { MembresiaService } from '../../services/membresia.service';
import { VentaService } from '../../services/venta.service';
import { Venta } from '../../models/venta/venta.model';

@Component({
  selector: 'app-cliente-add',
  templateUrl: './cliente-add.component.html',
  styleUrl: './cliente-add.component.css'
})
export class ClienteAddComponent {
  membresias: any[] = [];
  selectedMembresia: any = { precio: 0.00 };
  fechaInicio: string = '';
  fechaFin: string = '';

  cliente: Cliente = {
    dni: '',
    nombres: '',
    apellidos: '',
    celular: '',
    fecha_nac: '',
    fecha_ini: '',
    fecha_fin: '',
  };

  venta: Venta = {
    nombre: '',
    cantidad: 0,
    costo: 0,
    tipo_pago: '',
  };
  submitted = false;

  constructor(private clienteService: ClienteService, private membresiaService: MembresiaService, private ventaService:VentaService) { }

  ngOnInit(): void {
    this.membresiaService.getAll().subscribe(data => {this.membresias = data;});
  }

  actualizarFechaFin(): void {
    if (this.fechaInicio) {
      const fechaInicioDate = new Date(this.fechaInicio);
      fechaInicioDate.setMonth(fechaInicioDate.getMonth() + this.selectedMembresia.duracion);
      //fechaInicioDate.setDate(fechaInicioDate.getDate() + 10);
      this.fechaFin = fechaInicioDate.toISOString().slice(0, 16);
    } else {
      console.error('La fecha de inicio no es válida.');
    }
  }

  onMembresiaSelect(event: any): void {
    this.selectedMembresia = this.membresias.filter(membresia => membresia.id === +event)[0];
    this.actualizarFechaFin();
  }

  createMembresia(): void {
    const data = {
      nombre: this.venta.nombre,
      cantidad: 1,
      costo: this.selectedMembresia.precio,
      tipo_pago: this.venta.tipo_pago,
    };
  
    this.ventaService.createMembresia(data)
      .subscribe({error: (e) => console.error(e)});
  }

  saveCliente(): void {
    const data = {
      dni: this.cliente.dni,
      nombres: this.cliente.nombres,
      apellidos: this.cliente.apellidos,
      celular: this.cliente.celular,
      fecha_nac: this.cliente.fecha_nac,
      fecha_ini: this.fechaInicio,
      fecha_fin: this.fechaFin,
    };

    this.createMembresia();

    this.clienteService.create(data)
    .subscribe({
        next: () => {this.submitted = true;},
        error: (e) => console.error(e)
    });
  }

  newCliente(): void {
    this.submitted = false;
    this.cliente = {
		dni: '',
		nombres: '',
		apellidos: '',
		celular: '',
		fecha_nac: '',
		fecha_ini: '',
		fecha_fin: '',
    };
  }
}
