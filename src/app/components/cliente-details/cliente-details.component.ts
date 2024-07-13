import { Component, Input, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../../models/cliente/cliente.model';

@Component({
  selector: 'app-cliente-details',
  templateUrl: './cliente-details.component.html',
  styleUrl: './cliente-details.component.css'
})
export class ClienteDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentCliente: Cliente = {
    dni: '',
    nombres: '',
    apellidos: '',
    celular: '',
    fecha_nac: '',
    fecha_ini: '',
    fecha_fin: '',
//MoDetComp1
  };
  
  message = '';

  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getCliente(this.route.snapshot.params["id"]);
    }
  }

  getCliente(id: string): void {
    this.clienteService.get(id)
      .subscribe({
        next: (data) => {
          this.currentCliente = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateCliente(): void {
    this.message = '';

    this.clienteService.update(this.currentCliente.id, this.currentCliente)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This cliente was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteCliente(): void {
    this.clienteService.delete(this.currentCliente.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/cliente']);
        },
        error: (e) => console.error(e)
      });
  }

}
