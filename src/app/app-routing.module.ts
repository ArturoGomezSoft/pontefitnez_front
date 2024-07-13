import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticuloAddComponent } from './components/articulo-add/articulo-add.component';
import { ArticuloListComponent } from './components/articulo-list/articulo-list.component';
import { ArticuloDetailsComponent } from './components/articulo-details/articulo-details.component';
import { ClienteAddComponent } from './components/cliente-add/cliente-add.component';
import { ClienteListComponent } from './components/cliente-list/cliente-list.component';
import { ClienteDetailsComponent } from './components/cliente-details/cliente-details.component';
import { ReposicionAddComponent } from './components/reposicion-add/reposicion-add.component';
import { ReposicionListComponent } from './components/reposicion-list/reposicion-list.component';
import { ReposicionDetailsComponent } from './components/reposicion-details/reposicion-details.component';
import { VentaAddComponent } from './components/venta-add/venta-add.component';
import { VentaListComponent } from './components/venta-list/venta-list.component';
import { VentaDetailsComponent } from './components/venta-details/venta-details.component';
import { MembresiaAddComponent } from './components/membresia-add/membresia-add.component';
import { MembresiaListComponent } from './components/membresia-list/membresia-list.component';
import { MembresiaDetailsComponent } from './components/membresia-details/membresia-details.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
//AppRoutMod1

const routes: Routes = [
  { path: '', redirectTo: 'cliente', pathMatch: 'full' },
  { path: 'articulos', redirectTo: 'articulos', pathMatch: 'full' },
  { path: 'add_articulo', component: ArticuloAddComponent },
  { path: 'articulo', component: ArticuloListComponent },
  { path: 'articulo/:id', component: ArticuloDetailsComponent },
  { path: 'clientes', redirectTo: 'clientes', pathMatch: 'full' },
  { path: 'add_cliente', component: ClienteAddComponent },
  { path: 'cliente', component: ClienteListComponent },
  { path: 'cliente/:id', component: ClienteDetailsComponent },
  { path: 'reposicions', redirectTo: 'reposicions', pathMatch: 'full' },
  { path: 'add_reposicion', component: ReposicionAddComponent },
  { path: 'reposicion', component: ReposicionListComponent },
  { path: 'reposicion/:id', component: ReposicionDetailsComponent },
  { path: 'ventas', redirectTo: 'ventas', pathMatch: 'full' },
  { path: 'add_venta', component: VentaAddComponent },
  { path: 'venta', component: VentaListComponent },
  { path: 'venta/:id', component: VentaDetailsComponent },
  { path: 'membresias', redirectTo: 'membresias', pathMatch: 'full' },
  { path: 'add_membresia', component: MembresiaAddComponent },
  { path: 'membresia', component: MembresiaListComponent },
  { path: 'membresia/:id', component: MembresiaDetailsComponent },
  { path: 'users', redirectTo: 'users', pathMatch: 'full' },
  { path: 'add_user', component: UserAddComponent },
  { path: 'user', component: UserListComponent },
  { path: 'user/:id', component: UserDetailsComponent },
//AppRoutMod2
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
