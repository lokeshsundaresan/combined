import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable,throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserService } from './user_control/_user.service';



@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private userService: UserService,
                private router:Router) {}

    intercept(request:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>> 
    {
        return next.handle(request)
                   .pipe(catchError((err:any)=>{
                   if (err.status === 401)
                   {
                     this.userService.logout();     
                     location.reload(true); 
                   }
                   const error = err.error.message || err.statusText;
                   return throwError(error);
                   }));
    } 
}