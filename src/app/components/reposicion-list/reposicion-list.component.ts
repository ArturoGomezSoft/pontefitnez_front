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
  loading: boolean = false;

  constructor(private reposicionService: ReposicionService) { }

  ngOnInit(): void {
    this.listarHoy();
  }

  retrieveReposicions(): void {
    this.loading = true;
    this.reposicionService.getAll()
      .subscribe({
        next: (data) => {
          this.reposicions = data;
          console.log(data);
          this.loading = false;
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
    this.loading = true;
    this.reposicionService.findByFechaManana()
      .subscribe({next: (data) => {this.reposicions = data; this.loading = false;}});
  }

  listarTarde(): void {
    this.loading = true;
    this.reposicionService.findByFechaTarde()
      .subscribe({next: (data) => {this.reposicions = data; this.loading = false;}});
  }

  listarHoy(): void {
    this.loading = true;
    this.reposicionService.findByFechaHoy()
      .subscribe({next: (data) => {this.reposicions = data; this.loading = false;}});
  }

  listarSemana(): void {
    this.loading = true;
    this.reposicionService.findBySemanaActual()
      .subscribe({next: (data) => {this.reposicions = data; this.loading = false;}});
  }

  listarMes(): void {
    this.loading = true;
    this.reposicionService.findByMesActual()
      .subscribe({next: (data) => {this.reposicions = data; this.loading = false;}});
  }

  listarTotal(): void {
    this.loading = true;
    this.reposicionService.getAll()
      .subscribe({next: (data) => {this.reposicions = data; this.loading = false;}});
  }
}
