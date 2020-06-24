import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from '../../api_services/user_control/profile.service';
import { User } from 'interface/user';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 
  profileData:User;
  imageurl:any;
  photo:any;

  constructor(private profile:ProfileService,private domSanitizer:DomSanitizer) {
  }

  ngOnInit() {
    this.profile.ProfileUser.subscribe(data=>{
      this.profileData=data;
    })
    this.photo=this.photocovert(this.profileData.img);
    this.imageurl=this.photocovert(this.profileData.coverpic);

  }
  photocovert(pics)
  {
   var img=Buffer.from(pics);
   let json = JSON.stringify(img);
   let bufferOriginal = Buffer.from(JSON.parse(json).data);
   let srcurl=bufferOriginal.toString('utf8');
    return this.domSanitizer.bypassSecurityTrustUrl('data:image/JPEG;base64,'+srcurl);
  }
}



@Component({
  selector:'profile',
  templateUrl:'./profiletags.component.html',
  styleUrls:['./profile.component.css']
})
export class ProfileTags 
{
  
  @Input() photo:any;
  @Input() coverpic:any;
  images:any;
  username:string;
 
  constructor(private user:ProfileService)
  {
   var object=JSON.parse(localStorage.getItem('currentUser'));
   this.username=object.username;
  }
  selectImage(event)
  {
         if (event.target.files.length > 0) {
           const file = event.target.files[0];
           this.images = file;
           const reader = new FileReader();
           reader.onload = e => this.coverpic = reader.result;
           reader.readAsDataURL(file);
         }
         this.user.updateCoverPic(this.images,this.username).subscribe();
         
 }

}