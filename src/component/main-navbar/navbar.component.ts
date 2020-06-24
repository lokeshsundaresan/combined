import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../api_services/user_control/_user.service';
import { User } from 'interface/user';
import { Design } from '../../api_services/design.service';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    
})
export class Navbar implements OnInit {
    istoogle=false;
    currentUser:User;
   @Input() profilepic:any

    constructor(private user:UserService,private design:Design) {
        this.user.currentUser.subscribe(data=>{
            this.currentUser=data;
        })
     }

    ngOnInit(): void { }

    toolme()
    {
        /* this method is used to toogle the menubar */
        if(this.istoogle)
        {
            this.istoogle=false;
            this.design.menutoggle(this.istoogle);

        }
        else
        {
            this.istoogle=true;
            this.design.menutoggle(this.istoogle);
        }
    }
    logout()
    {
        this.user.logout();
    }
    fullscreen()
    {
       
    }
}
