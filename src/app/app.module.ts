import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { RegisterComponent } from './users/register/register.component';
import { CustomersignupComponent } from './users/register/customersignup/customersignup.component';
import { StoresignupComponent } from './users/register/storesignup/storesignup.component';
import { ArtistsignupComponent } from './users/register/artistsignup/artistsignup.component';
import { LoginComponent } from './users/login/login.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    RegisterComponent,
    CustomersignupComponent,
    StoresignupComponent,
    ArtistsignupComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
