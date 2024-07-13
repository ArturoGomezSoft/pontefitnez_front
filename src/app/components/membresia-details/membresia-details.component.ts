import { Component, Input, OnInit } from '@angular/core';
import { MembresiaService } from '../../services/membresia.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Membresia } from '../../models/membresia/membresia.model';

@Component({
  selector: 'app-membresia-details',
  templateUrl: './membresia-details.component.html',
  styleUrl: './membresia-details.component.css'
})
export class MembresiaDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentMembresia: Membresia = {
    nombre: '',
    precio: 0,
    duracion: 0,
//MoDetComp1
  };
  
  message = '';

  constructor(
    private membresiaService: MembresiaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getMembresia(this.route.snapshot.params["id"]);
    }
  }

  getMembresia(id: string): void {
    this.membresiaService.get(id)
      .subscribe({
        next: (data) => {
          this.currentMembresia = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateMembresia(): void {
    this.message = '';

    this.membresiaService.update(this.currentMembresia.id, this.currentMembresia)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This membresia was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteMembresia(): void {
    this.membresiaService.delete(this.currentMembresia.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/membresia']);
        },
        error: (e) => console.error(e)
      });
  }

}
