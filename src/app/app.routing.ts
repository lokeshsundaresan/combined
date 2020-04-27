import { Routes, RouterModule } from '@angular/router';

import {DashBoard} from '../dashboard/dashboard.component'



const routes: Routes = [

    { path: ''  ,        component: DashBoard},
    { path: '**',        redirectTo: '' }

  
];

export const appRoutingModule = RouterModule.forRoot(routes);

