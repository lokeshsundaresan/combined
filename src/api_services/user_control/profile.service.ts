import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, mapTo } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from 'interface/user';



@Injectable({ providedIn: 'root' })
export class ProfileService implements HttpInterceptor{
   
   private ProfileUserSubject: BehaviorSubject<User>;
   public ProfileUser:Observable<User>

   _getProfile='https://chats--lokeshvirtusa.repl.co/currentUser';
   _updateProfile='https://blog-1.lokeshvirtusa.repl.co/updateProfile';
  
  intercept(request:HttpRequest<any>,next:HttpHandler)
  {
    return next.handle(request);
  }

  constructor(private http: HttpClient,private router:Router)
  {
    this.ProfileUserSubject=new BehaviorSubject<User>(JSON.parse(localStorage.getItem('UserDetails')));
    this.ProfileUser=this.ProfileUserSubject.asObservable();
  }

  getProfileDetails(user:User)
  {
    return this.http.post<any>(this._getProfile,user)
                     .pipe(map(userdetails=>{
                       this.ProfileUserSubject.next(userdetails);
                       this.ProfileUser=this.ProfileUserSubject;
                       localStorage.setItem('UserDetails', JSON.stringify(userdetails));
                     }));
  }
  updateCoverPic(image:any,username:string)
  {
    const formData = new FormData();
    formData.append('coverpic',image);
    formData.append('username',username);

    return this.http.post<any>('https://chats--lokeshvirtusa.repl.co/coverpic', formData).pipe(map(user=>{
      this.getProfileDetails(JSON.parse(localStorage.getItem('currentUser'))).subscribe();
    }));

  }
  updateProfile(profile:User)
  {
    return this.http.post<any>(this._updateProfile,profile)
                     .pipe(map (prof=>{
                        this.ProfileUserSubject.next(prof);
                        this.ProfileUser=this.ProfileUserSubject;
                        localStorage.setItem('UserDetails',JSON.stringify(prof));
                     }))
  }
  profilepic(image:any,username:string)
  {
    const formData = new FormData();
    formData.append('img',image);
    formData.append('username',username)

    return this.http.post<any>('https://chats--lokeshvirtusa.repl.co/file', formData).pipe(map(user=>{
      this.getProfileDetails(JSON.parse(localStorage.getItem('currentUser'))).subscribe();
    }));
    
   
  }
}