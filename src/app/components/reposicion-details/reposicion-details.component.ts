import { Component, Input, OnInit } from '@angular/core';
import { ReposicionService } from '../../services/reposicion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Reposicion } from '../../models/reposicion/reposicion.model';

@Component({
  selector: 'app-reposicion-details',
  templateUrl: './reposicion-details.component.html',
  styleUrl: './reposicion-details.component.css'
})
export class ReposicionDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentReposicion: Reposicion = {
    nombre: '',
    cantidad: 0,
    costo: 0,
    tipo_pago: '',
    fecha_hora: '',
//MoDetComp1
  };
  
  message = '';

  constructor(
    private reposicionService: ReposicionService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getReposicion(this.route.snapshot.params["id"]);
    }
  }

  getReposicion(id: string): void {
    this.reposicionService.get(id)
      .subscribe({
        next: (data) => {
          this.currentReposicion = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateReposicion(): void {
    this.message = '';

    this.reposicionService.update(this.currentReposicion.id, this.currentReposicion)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This reposicion was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteReposicion(): void {
    this.reposicionService.delete(this.currentReposicion.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/reposicion']);
        },
        error: (e) => console.error(e)
      });
  }

}
