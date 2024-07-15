import { Component, OnInit } from '@angular/core';
import { Reposicion } from '../../models/reposicion/reposicion.model';
import { ReposicionService } from '../../services/reposicion.service';

@Component({
  selector: 'app-reposicion-list',
  templateUrl: './reposicion-list.component.html',
  styleUrl: './reposicion-list.component.css'
})
export class ReposicionListComponent implements OnInit {

  reposicions?: Reposicion[];
  currentReposicion: Reposicion = {};
  currentIndex = -1;
  nombre = '';

  constructor(private reposicionService: ReposicionService) { }

  ngOnInit(): void {
    this.listarHoy();
  }

  retrieveReposicions(): void {
    this.reposicionService.getAll()
      .subscribe({
        next: (data) => {
          this.reposicions = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveReposicions();
    this.currentReposicion = {};
    this.currentIndex = -1;
  }

  setActiveReposicion(reposicion: Reposicion, index: number): void {
    this.currentReposicion = reposicion;
    this.currentIndex = index;
  }

  removeAllReposicions(): void {
    this.reposicionService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  listarManana(): void {
    this.reposicionService.findByFechaManana()
      .subscribe({next: (data) => {this.reposicions = data;}});
  }

  listarTarde(): void {
    this.reposicionService.findByFechaTarde()
      .subscribe({next: (data) => {this.reposicions = data;}});
  }

  listarHoy(): void {
    this.reposicionService.findByFechaHoy()
      .subscribe({next: (data) => {this.reposicions = data;}});
  }

  listarSemana(): void {
    this.reposicionService.findBySemanaActual()
      .subscribe({next: (data) => {this.reposicions = data;}});
  }

  listarMes(): void {
    this.reposicionService.findByMesActual()
      .subscribe({next: (data) => {this.reposicions = data;}});
  }

  listarTotal(): void {
    this.reposicionService.getAll()
      .subscribe({next: (data) => {this.reposicions = data;}});
  }
}
