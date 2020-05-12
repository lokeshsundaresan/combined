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
import { Design } from '../api_services/design.service';
import { EditProfileComponent } from '../pages/edit-profile/edit-profile.component';
import { ProfileModule } from '../component/profile/profile.module';
import { FriendsComponent, modal } from '../component/friends/friends.component';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    appRoutingModule,
    ProfileModule,
    HttpClientModule,
  
  ],
  declarations: [
    AppComponent,
    SideNavbar,
    Navbar,
    DashBoard,
    LoginComponent,
    RegisterComponent,
    EditProfileComponent,
    FriendsComponent,modal
  ],
  providers: [
    UserService,Design,
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
  bootstrap: [AppComponent],
  entryComponents:[mod]
})
export class AppModule {}
