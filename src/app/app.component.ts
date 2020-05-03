import { Component } from '@angular/core';
import { User } from '../interface/user';
import { UserService } from '../api_services/user_control/_user.service';
import { Router } from '@angular/router';
import { Design } from '../api_services/design.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent  {
  
  currentUser:User;
  isMenu=false;
  constructor(private userService:UserService,private design:Design,
              private router:Router)
            {
               this.userService.currentUser.subscribe(user=>this.currentUser = user);
               this.design.isMenuCollapsed.subscribe(data=>{this.isMenu=data})
            }
  logout()
  {
    this.userService.logout();
  }
}
