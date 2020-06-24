import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { UserService } from 'api_services/user_control/_user.service';

@Component({

    selector:'dash-board',
    templateUrl:'./dashboard.component.html',
    styleUrls:['./dashboard.component.css']

})

export class DashBoard{
  images;
  current_user:string;
  constructor(private http: HttpClient,private user:UserService){
    this.current_user= this.user.currentUserValue.username 
  }

  ngOnInit(){

  }

  selectImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
    }
  }
  onSubmit(){
    const formData = new FormData();
    formData.append('img', this.images);
    formData.append('username',this.current_user)

    this.http.post<any>('https://chats--lokeshvirtusa.repl.co/file', formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

 
}