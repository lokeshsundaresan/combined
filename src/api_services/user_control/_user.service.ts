import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, mapTo } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ProfileService } from './profile.service';
import { User } from 'interface/user';




@Injectable({ providedIn: 'root' })
export class UserService implements HttpInterceptor{

  intercept(request:HttpRequest<any>,next:HttpHandler)
  {
    return next.handle(request);
  }

   private currentUserSubject: BehaviorSubject<User>;
   public currentUser: Observable<User>;
 
    constructor(private http: HttpClient,private router:Router,private profile:ProfileService) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

     _registerData='https://blog-1.lokeshvirtusa.repl.co/register';
     _loginCrediential="https://blog-1.lokeshvirtusa.repl.co/login";
     _getUser="https://blog-1.lokeshvirtusa.repl.co/getUser";


    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

   getuser()
   {
    return this.http.get<any>(this._getUser); 
   }
   register(user: User) {
     console.log(user);
        return this.http.post<any>(this._registerData, user );
    }
    verify(user: User){      
      return this.http.post<any>(this._loginCrediential,user)
               .pipe(map(user => {
                if(user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                   this.storeTokens(user);
                   this.currentUserSubject.next(user);
                }
                return user;
            }));
    }

 
    logout()
    {
      localStorage.removeItem('currentUser');
      localStorage.removeItem('User');
      this.currentUserSubject.next(null);
        this.router.navigate(['/login']);
    }

    storeTokens(temp:User)
    {
         this.profile.getProfileDetails(temp).subscribe();
         localStorage.setItem('currentUser', JSON.stringify(temp));

    }
   
    
}