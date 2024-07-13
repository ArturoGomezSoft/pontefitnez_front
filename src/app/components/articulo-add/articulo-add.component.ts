import { Component } from '@angular/core';
import { Articulo } from '../../models/articulo/articulo.model';
import { ArticuloService } from '../../services/articulo.service';

@Component({
  selector: 'app-articulo-add',
  templateUrl: './articulo-add.component.html',
  styleUrl: './articulo-add.component.css'
})
export class ArticuloAddComponent {

  articulo: Articulo = {
	nombre: '',
	precio: 0,
	stock: 0,
//MoAddComp1
  };
  submitted = false;

  constructor(private articuloService: ArticuloService) { }

  saveArticulo(): void {
    const data = {
		nombre: this.articulo.nombre,
		precio: this.articulo.precio,
		stock: this.articulo.stock,
//MoAddComp2
    };

    this.articuloService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newArticulo(): void {
    this.submitted = false;
    this.articulo = {
		nombre: '',
		precio: 0,
		stock: 0,
//MoAddComp3
    };
  }

}
