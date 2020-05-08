import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ProfileService } from 'api_services/user_control/profile.service';
import { User } from 'interface/user';
import { first } from 'rxjs/operators';

@Component({
  selector: 'about-profile',
  templateUrl: './about-profile.component.html',
  styleUrls: ['./about-profile.component.css']
})
export class AboutProfileComponent implements OnInit,OnDestroy {
  @Input() profileData:User;
  constructor(private user:ProfileService) { }

  ngOnInit() {
    this.user.ProfileUser.pipe(first())
             .subscribe(
               data=>{
                   this.profileData=data;
               }
             )
  }
  ngOnDestroy()
  {
    this.profileData=null;
  }

}
