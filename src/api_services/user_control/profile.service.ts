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

   _getProfile='https://blog-1.lokeshvirtusa.repl.co/getprofile';
  
  intercept(request:HttpRequest<any>,next:HttpHandler)
  {
    return next.handle(request);
  }

  constructor(private http: HttpClient,private router:Router)
  {
    this.ProfileUserSubject=new BehaviorSubject<User>(JSON.parse(localStorage.getItem('User')));
    this.ProfileUser=this.ProfileUserSubject.asObservable();
  
  }

  getProfileDetails(User:User)
  {
    return this.http.post<any>(this._getProfile,User)
                     .pipe(map(user=>{
                       
                       this.ProfileUserSubject.next(user);
                       localStorage.setItem('User', JSON.stringify(User));
                     }));
  }

}