import { Component } from '@angular/core';
import { User } from '../interface/user';
import { UserService } from '../api_services/user_control/_user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent  {
  
  currentUser:User;

  constructor(private userService:UserService,
              private router:Router)
            {
               this.userService.currentUser.subscribe(user=>this.currentUser = user);
            }
  logout()
  {
    this.userService.logout();
  }
}
