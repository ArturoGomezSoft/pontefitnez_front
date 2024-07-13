import { Component } from '@angular/core';
import { User } from '../../models/user/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.css'
})
export class UserAddComponent {

  user: User = {
	usuario: '',
	contrasena: '',
//MoAddComp1
  };
  submitted = false;

  constructor(private userService: UserService) { }

  saveUser(): void {
    const data = {
		usuario: this.user.usuario,
		contrasena: this.user.contrasena,
//MoAddComp2
    };

    this.userService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newUser(): void {
    this.submitted = false;
    this.user = {
		usuario: '',
		contrasena: '',
//MoAddComp3
    };
  }

}
