import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';
import { SideNavbar } from 'component/side-navbar/side-navbar.component';
import { Navbar } from 'component/main-navbar/navbar.component';


@NgModule({
  imports:      [ BrowserModule, 
                  ReactiveFormsModule, 
                  FormsModule , 
                  appRoutingModule ],
  declarations: [ AppComponent,SideNavbar,Navbar],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
