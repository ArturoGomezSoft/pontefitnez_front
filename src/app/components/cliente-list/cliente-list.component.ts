import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente/cliente.model';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrl: './cliente-list.component.css'
})
export class ClienteListComponent implements OnInit {

  clientes?: Cliente[];
  currentCliente: Cliente = {};
  currentIndex = -1;
  dni = '';

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.retrieveClientes();
  }

  retrieveClientes(): void {
    this.clienteService.getAll()
      .subscribe({
        next: (data) => {
          this.clientes = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveClientes();
    this.currentCliente = {};
    this.currentIndex = -1;
  }

  setActiveCliente(cliente: Cliente, index: number): void {
    this.currentCliente = cliente;
    this.currentIndex = index;
  }

  removeAllClientes(): void {
    this.clienteService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchDni(): void {
    this.currentCliente = {};
    this.currentIndex = -1;

    this.clienteService.findByDniContaining(this.dni)
      .subscribe({
        next: (data) => {
          this.clientes = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
