import { NgModule } from '@angular/core';
import { AboutProfileComponent } from '../../pages/about-profile/about-profile.component';
import { ProfileComponent, ProfileTags } from './profile.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    RouterModule
  ],
  declarations: [ProfileComponent,AboutProfileComponent,ProfileTags,ProfileComponent]
})
export class ProfileModule { }
