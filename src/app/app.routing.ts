import { Routes, RouterModule } from "@angular/router";
import { DashBoard } from "../dashboard/dashboard.component";
import { LoginComponent } from "../pages/login/login.component";
import { RegisterComponent } from "../pages/register/register.component";
import { AuthGuard } from "../api_services/user_control/auth.guard";
import { EditProfileComponent } from '../pages/edit-profile/edit-profile.component';

const routes: Routes = [
  { path: "",
    component: DashBoard,
    canActivate: [AuthGuard],
    pathMatch: "full" },
  { path: "login",
   component: LoginComponent,
    pathMatch: "full" },
  { path: "register",
    component: RegisterComponent,
    pathMatch: "full" },
  {
    path:"edit-profile",
    component:EditProfileComponent},
  { path:"**", redirectTo:''}
];

export const appRoutingModule = RouterModule.forRoot(routes);
