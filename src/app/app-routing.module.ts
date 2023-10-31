import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavbarComponent} from './Dashboard/components/navbar/navbar.component'
import {SidebarComponent} from './Dashboard/components/sidebar/sidebar.component'
import{AllappointmentsComponent} from './Dashboard/components/allappointments/allappointments.component'
import { AllPetsComponent } from './pets/components/allpets/allpets.component';
import { ViewprofileComponent } from './profile/components/viewprofile/viewprofile.component';
import { EditprofileComponent } from './profile/components/editprofile/editprofile.component';
import { AddpetComponent } from './profile/components/addpet/addpet.component';
const routes: Routes = [
  {path:"navbar",component:NavbarComponent},
  {path:"sidebar",component:SidebarComponent},
  {path:"all-appointments",component:AllappointmentsComponent},
  {path:"all-pets",component: AllPetsComponent},
  {path:"profile",component: ViewprofileComponent},
  {path:"edit-profile",component: EditprofileComponent},
  {path:"add-pets",component: AddpetComponent},







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
