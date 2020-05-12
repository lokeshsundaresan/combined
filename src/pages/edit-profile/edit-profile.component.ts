import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../interface/user';
import { ProfileService } from '../../api_services/user_control/profile.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  profileForm:FormGroup;
  profileData:User;
  canmodify=false;
  submitted=false;

  constructor(private fb:FormBuilder,private user:ProfileService,private router:Router){

  }
  ngOnInit()
  {
        this.user.ProfileUser.subscribe(data=>{this.profileData=data});
        this.profileForm=this.fb.group({
        username:[this.profileData.username],
        pics:[''],
        firstname:[this.profileData.firstname,Validators.required],
        lastname:[this.profileData.lastname,Validators.required],
        email:[this.profileData.email,Validators.email],
        city:[this.profileData.city],
        dob:[this.profileData.dob],
        gender:[this.profileData.gender],
        bio:[this.profileData.bio]

         });
         this.profileForm.disable();
         
  }
   get f(){return this.profileForm.controls;}
 
   canedit()
   {
     if(this.canmodify)
     {
       this.canmodify=false;
       this.profileForm.disable();
     }
     else
     {
       this.canmodify=true;
       this.profileForm.enable();
     }
   }
  
   onSubmit()
   {
      this.submitted = true;

      if(this.profileForm.invalid)
      {
        return;
      }
      this.user.updateProfile(this.profileForm.value)
               .pipe(first())
               .subscribe(
                 data=>{ 
                     this.router.navigate(['/profile']);                    
                })
      
   }
}
