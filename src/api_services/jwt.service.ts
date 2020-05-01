import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user_control/_user.service';





@Injectable()
export class Jwt implements HttpInterceptor {

  constructor(private userService:UserService){}
  intercept(request:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>
  {
   let currentUser = this.userService.currentUserValue;
     
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: { 
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }           
     return next.handle(request);
    
  
  }
   addToken(request:HttpRequest<any>,token:string)
     {
          return request.clone({
                                setHeaders: {
                               'Authorization': `Bearer ${token}`
                               }
                             });
     }
    
}