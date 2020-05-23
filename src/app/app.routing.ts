import { Routes, RouterModule } from "@angular/router";
import { DashBoard } from "../dashboard/dashboard.component";
import { LoginComponent } from "../pages/login/login.component";
import { RegisterComponent } from "../pages/register/register.component";
import { AuthGuard } from "../api_services/user_control/auth.guard";
import { EditProfileComponent } from '../pages/edit-profile/edit-profile.component';
import { ProfileComponent } from '../component/profile/profile.component';
import { AboutProfileComponent } from '../pages/about-profile/about-profile.component';
import { FriendsComponent } from '../component/friends/friends.component';
import { ChatsComponent } from 'component/chats/chats.component';


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
    path:"profile",
    component:ProfileComponent,children:[{path:"about",component:AboutProfileComponent},{path:'',component:AboutProfileComponent}]},
  {
    path:"edit-profile",
    component:EditProfileComponent
  },
  {
    path:"friends",
    component:FriendsComponent
  },
  {
   path:"chats",
   component:ChatsComponent
  },
  { path:"**", redirectTo:''}
];

export const appRoutingModule = RouterModule.forRoot(routes);
