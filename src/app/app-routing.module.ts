import { CartComponent } from './components/cart/cart.component';
import { DoctorDetailsComponent } from './components/doctor-details/doctor-details.component';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { DoctorsListComponent } from './components/doctors-list/doctors-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: WelcomeComponent, pathMatch: 'full'},
  {path: 'list', component: DoctorsListComponent},
  {path: 'cart', component: CartComponent},
  {path: 'details/:id', component: DoctorDetailsComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
