import { Component } from '@angular/core';
import { User } from '../interface/user';
import { UserService } from '../api_services/user_control/_user.service';
import { Router } from '@angular/router';
import { Design } from '../api_services/design.service';
import { ChatService } from '../api_services/chat.service';
import { ProfileService } from '../api_services/user_control/profile.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent  {
  
  currentUser:User;
  isMenu=false;
  profilepic:any

  constructor(private userService:UserService,private design:Design,private profile:ProfileService,
              private router:Router,private chats:ChatService,private domSanitizer:DomSanitizer)
            {
               this.userService.currentUser.subscribe(user=>this.currentUser = user);
               this.design.isMenuCollapsed.subscribe(data=>{this.isMenu=data});
               if(this.currentUser){
               this.profile.ProfileUser.subscribe(data=>{
                    this.photoconvert(data.img);
                })
              }
              }
              photoconvert(pics)
              {
                var img=Buffer.from(pics);
                let json = JSON.stringify(img);
                let bufferOriginal = Buffer.from(JSON.parse(json).data);
                 var srcurl=bufferOriginal.toString('utf8');
                 this.profilepic=this.domSanitizer.bypassSecurityTrustUrl('data:image/JPEG;base64,'+srcurl);
              }

  logout()
  {
    this.userService.logout();
  }
}
