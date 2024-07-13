import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
//AppMod1

@NgModule({
  declarations: [
    AppComponent,
    ArticuloAddComponent,
    ArticuloListComponent,
    ArticuloDetailsComponent,
    ClienteAddComponent,
    ClienteListComponent,
    ClienteDetailsComponent,
    ReposicionAddComponent,
    ReposicionListComponent,
    ReposicionDetailsComponent,
    VentaAddComponent,
    VentaListComponent,
    VentaDetailsComponent,
    MembresiaAddComponent,
    MembresiaListComponent,
    MembresiaDetailsComponent,
    UserAddComponent,
    UserListComponent,
    UserDetailsComponent,
//AppMod2
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
