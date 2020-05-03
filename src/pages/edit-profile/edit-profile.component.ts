import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProfileService } from 'api_services/user_control/profile.service';
import { User } from 'interface/user';

@Component({
  selector: 'edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  profileForm:FormGroup
  profileData:User
  submitted=false;
  constructor(private fb:FormBuilder,private user:ProfileService){

  }
  ngOnInit()
  {
        this.user.ProfileUser.subscribe(data=>{this.profileData=data});
        this.profileForm=this.fb.group({
        username:[this.profileData.username],
        pics:[''],
        firstname:[this.profileData.firstName,Validators.required],
        lastname:[this.profileData.lastName,Validators.required],
        email:['',Validators.email],
        mobile:['',[Validators.minLength(10)]],
        age:['',[Validators.max(45),Validators.min(18)]],
        city:[''],
        dob:['']

         });
         
  }
   get f(){return this.profileForm.controls;}

   onSubmit()
   {
      this.submitted = true;
     console.log(this.profileForm.value);
   }
}