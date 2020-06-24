import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../interface/user';
import { ProfileService } from '../../api_services/user_control/profile.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

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
  photo:any;
  images: any;

  

  constructor(private fb:FormBuilder,private user:ProfileService,private router:Router,private domSanitizer: DomSanitizer){

  }
  loadform()
  {
    this.profileForm=this.fb.group({
      username:[this.profileData.username],
      firstname:[this.profileData.firstname,Validators.required],
      lastname:[this.profileData.lastname,Validators.required],
      email:[this.profileData.email,Validators.email],
      city:[this.profileData.city],
      dob:[this.profileData.dob],
      gender:[this.profileData.gender],
      bio:[this.profileData.bio]
       });
       this.profileForm.disable();
       this.photocovert(this.profileData.img); 
  }
  ngOnInit()
  { 
        
        this.user.ProfileUser.subscribe(data=>{this.profileData=data;});
        this.loadform();
  }

  selectImage(event)
   {
          if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.images = file;
            const reader = new FileReader();
            reader.onload = e => this.photo = reader.result;
            reader.readAsDataURL(file);
          }
            this.user.profilepic(this.images,this.profileData.username).subscribe();
          
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
   photocovert(pics)
   {
    var img=Buffer.from(pics);
    let json = JSON.stringify(img);
    let bufferOriginal = Buffer.from(JSON.parse(json).data);
     var srcurl=bufferOriginal.toString('utf8');
     this.photo=this.domSanitizer.bypassSecurityTrustUrl('data:image/JPEG;base64,'+srcurl);
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
