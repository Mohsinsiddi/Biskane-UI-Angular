import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomersignupComponent} from './users/register/customersignup/customersignup.component';
import {StoresignupComponent} from './users/register/storesignup/storesignup.component';
import {ArtistsignupComponent} from './users/register/artistsignup/artistsignup.component';
import {LoginComponent} from './users/login/login.component';
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
   
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  
  {
    path:"home",
    component:HomeComponent
  },

  {
    path:"customersignup",
    component:CustomersignupComponent
  },

  {
    path:"storesignup",
    component:StoresignupComponent
  },

  {
    path:"artistsignup",
    component:ArtistsignupComponent
  },
  
  {
    path:"login",
    component:LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
