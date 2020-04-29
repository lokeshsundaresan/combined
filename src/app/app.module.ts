import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';
import { SideNavbar } from '../component/side-navbar/side-navbar.component';
import { Navbar } from '../component/main-navbar/navbar.component';
import { DashBoard } from '../dashboard/dashboard.component';


@NgModule({
  imports:      [ BrowserModule, 
                  ReactiveFormsModule, 
                  FormsModule , NgbModule,
                  appRoutingModule ],
  declarations: [ AppComponent,SideNavbar,Navbar,DashBoard],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
