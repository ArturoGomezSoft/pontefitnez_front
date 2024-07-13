import { Component, OnInit } from '@angular/core';
import { Membresia } from '../../models/membresia/membresia.model';
import { MembresiaService } from '../../services/membresia.service';

@Component({
  selector: 'app-membresia-list',
  templateUrl: './membresia-list.component.html',
  styleUrl: './membresia-list.component.css'
})
export class MembresiaListComponent implements OnInit {

  membresias?: Membresia[];
  currentMembresia: Membresia = {};
  currentIndex = -1;
  nombre = '';

  constructor(private membresiaService: MembresiaService) { }

  ngOnInit(): void {
    this.retrieveMembresias();
  }

  retrieveMembresias(): void {
    this.membresiaService.getAll()
      .subscribe({
        next: (data) => {
          this.membresias = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveMembresias();
    this.currentMembresia = {};
    this.currentIndex = -1;
  }

  setActiveMembresia(membresia: Membresia, index: number): void {
    this.currentMembresia = membresia;
    this.currentIndex = index;
  }

  removeAllMembresias(): void {
    this.membresiaService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchNombre(): void {
    this.currentMembresia = {};
    this.currentIndex = -1;

    this.membresiaService.findByNombre(this.nombre)
      .subscribe({
        next: (data) => {
          this.membresias = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
