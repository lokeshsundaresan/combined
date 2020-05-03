import { Component, OnInit } from '@angular/core';
import { UserService } from 'api_services/user_control/_user.service';
import { User } from 'interface/user';
import { SideNavbar } from '../side-navbar/side-navbar.component';
import { Design } from 'api_services/design.service';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    
})
export class Navbar implements OnInit {
    istoogle=false;
    currentUser:User
    constructor(private user:UserService,private design:Design) {
        this.user.currentUser.subscribe(data=>{
            this.currentUser=data;
        })
     }

    ngOnInit(): void { }

    toolme()
    {
        if(this.istoogle)
        {
            this.istoogle=false;
            console.log("clicked me");
            this.design.menutoggle(this.istoogle);

        }
        else
        {
            this.istoogle=true;
            console.log("clicked me");
            this.design.menutoggle(this.istoogle);
        }


    }
}
