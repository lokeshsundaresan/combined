import { Component, OnInit} from '@angular/core';
import { UserService } from '../../api_services/user_control/_user.service';
import { User } from 'interface/user';
import { Design } from '../../api_services/design.service';
import { ProfileService } from '../../api_services/user_control/profile.service';
import { first } from 'rxjs/operators';

@Component({
    selector: 'side-navbar',
    templateUrl: './side-navbar.component.html',
    styleUrls: ['./side-navbar.component.css']
})

export class SideNavbar implements OnInit{

    currentUser:User
    ismenu=false;
    profileData:User

    constructor(private user:UserService,private design:Design,private prf:ProfileService) {
        this.user.currentUser.subscribe(data=>{
            this.currentUser=data;
        });
        this.design.isMenuCollapsed.subscribe(
            data=>{
                   this.ismenu=data;
                    setTimeout(() => {
                        this.ngOnInit();
                    }, 1000);
                }
        );
       
     }
    ngOnInit()
    {
        this.prf.ProfileUser.pipe(first())
        .subscribe(
            data=>{this.profileData=data;}
        )
    }

  
}
