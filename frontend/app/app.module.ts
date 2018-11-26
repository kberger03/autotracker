// autotracker
import { NgModule, ApplicationRef, Input }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule }           from '@angular/http';
import { FormsModule }          from '@angular/forms';
import { CommonModule }         from '@angular/common';
import { AgmCoreModule }        from 'angular2-google-maps/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home';
import { LoginComponent } from './login/login';
import { SignupComponent } from './signup/signup';
import { ProfileComponent } from './profile/profile';
import { MaintActComponent } from './maintAct/maintAct';
import { addVehicleModalComponent } from './addVehicleModal/addVehicleModal';
import { addActiveModalComponent } from './addActiveModal/addActiveModal';
import { navbarComponent } from './navbar/navbar';
import { navbar2Component } from './navbar2/navbar2';
import { navbar3Component } from './navbar3/navbar3';
import { UsersService } from './services/users.service';
import { AuthService } from './services/auth.service';
import { VehiclesService } from './services/vehicles.service';
import { ActivesService } from './services/actives.service';
import { PDFService } from './services/pdf.service';

// Routes to jump to 
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent }, 
  { path: 'profile', component: ProfileComponent}, 
  { path: 'maintact', component: MaintActComponent }
];

@NgModule({
  imports: [ 
    BrowserModule,
    RouterModule.forRoot(appRoutes), 
    HttpModule, 
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDCr2_3X_DxJADKn21Qq4VvPAN970ADHrI'
      // apiKey: 'AIzaSyCA-S4XiJZQ8xXUibPzrsn1efJIe6sBoyc'//old key 
    })
  ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    MaintActComponent,
    addVehicleModalComponent,
    addActiveModalComponent,
    navbarComponent, 
    navbar2Component,
    navbar3Component
  ],
  providers: [
    UsersService,
    AuthService, 
    VehiclesService, 
    ActivesService, 
    PDFService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}