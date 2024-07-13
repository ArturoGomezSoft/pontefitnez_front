import { Component, Input, OnInit } from '@angular/core';
import { ArticuloService } from '../../services/articulo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Articulo } from '../../models/articulo/articulo.model';

@Component({
  selector: 'app-articulo-details',
  templateUrl: './articulo-details.component.html',
  styleUrl: './articulo-details.component.css'
})
export class ArticuloDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentArticulo: Articulo = {
    nombre: '',
    precio: 0,
    stock: 0,
//MoDetComp1
  };
  
  message = '';

  constructor(
    private articuloService: ArticuloService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getArticulo(this.route.snapshot.params["id"]);
    }
  }

  getArticulo(id: string): void {
    this.articuloService.get(id)
      .subscribe({
        next: (data) => {
          this.currentArticulo = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateArticulo(): void {
    this.message = '';

    this.articuloService.update(this.currentArticulo.id, this.currentArticulo)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This articulo was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteArticulo(): void {
    this.articuloService.delete(this.currentArticulo.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/articulo']);
        },
        error: (e) => console.error(e)
      });
  }

}
