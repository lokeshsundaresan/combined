import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutProfileComponent } from '../../pages/about-profile/about-profile.component';
import { ProfileComponent, ProfileTags } from './profile.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,RouterModule
  ],
  declarations: [ProfileComponent,AboutProfileComponent,ProfileTags,ProfileComponent]
})
export class ProfileModule { }
