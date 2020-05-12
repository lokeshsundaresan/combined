import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../api_services/user_control/profile.service';
import { User } from 'interface/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 
  Details:User;
  imageurl:any;
  constructor(private profile:ProfileService) {
    this.imageurl="https://images.unsplash.com/photo-1518104593124-ac2e82a5eb9d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80";
   }

  ngOnInit() {
    this.profile.ProfileUser.subscribe(data=>{})

  }

}
@Component({
  selector:'profile',
  templateUrl:'./profiletags.component.html',
  styleUrls:['./profile.component.css']
})
export class ProfileTags 
{
  imageurl:any;
  constructor(private profile:ProfileService) {
    this.imageurl="https://images.unsplash.com/photo-1518104593124-ac2e82a5eb9d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80";
   }


}