import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { appRoutingModule } from "./app.routing";
import { SideNavbar } from "../component/side-navbar/side-navbar.component";
import { Navbar } from "../component/main-navbar/navbar.component";
import { DashBoard } from "../dashboard/dashboard.component";
import { LoginComponent } from "../pages/login/login.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { UserService } from "../api_services/user_control/_user.service";
import { ProfileService } from "../api_services/user_control/profile.service";
import { Jwt } from "../api_services/jwt.service";
import { ErrorInterceptor } from "../api_services/error.service";
import { RegisterComponent } from "../pages/register/register.component";


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    appRoutingModule,
    HttpClientModule,
  
  ],
  declarations: [
    AppComponent,
    SideNavbar,
    Navbar,
    DashBoard,
    LoginComponent,
    RegisterComponent
  ],
  providers: [
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ProfileService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Jwt,
      multi: true
    },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
