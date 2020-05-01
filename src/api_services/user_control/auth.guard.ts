import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { UserService } from './_user.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(private _authService: UserService,
    private _router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) 
    {
      const currentUser = this._authService.currentUserValue;
        if (currentUser) {
            // authorised so return true
            return true;
        }
        this._router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
    
 }