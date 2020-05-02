import { Component, OnInit } from '@angular/core';
import { UserService } from '../../api_services/user_control/_user.service';
import { User } from 'interface/user';

@Component({
    selector: 'side-navbar',
    templateUrl: './side-navbar.component.html',
    styleUrls: ['./side-navbar.component.css']
})
export class SideNavbar implements OnInit {
    currentUser:User
    constructor(private user:UserService) {
        this.user.currentUser.subscribe(data=>{
            this.currentUser=data;
        })
     }

    ngOnInit(): void { }
}
