import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class Design {

    isMenuCollapsed:BehaviorSubject<boolean>;
    ismenu:Observable<boolean>

    constructor()
    {
        this.isMenuCollapsed=new BehaviorSubject<boolean>(false);
        this.ismenu=this.isMenuCollapsed.asObservable();
    }

    menutoggle(chan?:any)
    {
        console.log(chan);
        this.isMenuCollapsed.next(chan)
        console.log("Service called");
    }
    
}