import { Component } from '@angular/core';
import { Membresia } from '../../models/membresia/membresia.model';
import { MembresiaService } from '../../services/membresia.service';

@Component({
  selector: 'app-membresia-add',
  templateUrl: './membresia-add.component.html',
  styleUrl: './membresia-add.component.css'
})
export class MembresiaAddComponent {

  membresia: Membresia = {
	nombre: '',
	precio: 0,
	duracion: 0,
	tipo: '',
//MoAddComp1
  };
  submitted = false;

  constructor(private membresiaService: MembresiaService) { }

  saveMembresia(): void {
    const data = {
		nombre: this.membresia.nombre,
		precio: this.membresia.precio,
		duracion: this.membresia.duracion,
		tipo: this.membresia.tipo,
//MoAddComp2
    };

    this.membresiaService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newMembresia(): void {
    this.submitted = false;
    this.membresia = {
		nombre: '',
		precio: 0,
		duracion: 0,
		tipo: '',
//MoAddComp3
    };
  }

}
