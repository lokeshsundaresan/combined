import { Component, OnInit } from '@angular/core';
import { UserService } from 'api_services/user_control/_user.service';
import { User } from 'interface/user';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    
})
export class Navbar implements OnInit {
    currentUser:User
    constructor(private user:UserService) {
        this.user.currentUser.subscribe(data=>{
            this.currentUser=data;
        })
     }

    ngOnInit(): void { }
}
