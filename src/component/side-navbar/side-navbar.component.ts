import { Component, OnInit, Injectable } from '@angular/core';
import { UserService } from '../../api_services/user_control/_user.service';
import { User } from 'interface/user';
import { Design } from '../../api_services/design.service';

@Component({
    selector: 'side-navbar',
    templateUrl: './side-navbar.component.html',
    styleUrls: ['./side-navbar.component.css']
})

export class SideNavbar implements OnInit {
    currentUser:User
    ismenu=false;
    constructor(private user:UserService,private design:Design) {
        this.user.currentUser.subscribe(data=>{
            this.currentUser=data;
        });
        this.design.isMenuCollapsed.subscribe(
            data=>{console.log("fuck you bitch"+data);
                   this.ismenu=data}
        );
     }

    ngOnInit(): void { }

  
}
