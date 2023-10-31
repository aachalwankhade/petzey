import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AllappointmentsComponent } from './Dashboard/components/allappointments/allappointments.component';
import { NavbarComponent } from './Dashboard/components/navbar/navbar.component';
import { SidebarComponent } from './Dashboard/components/sidebar/sidebar.component';
import { AllPetsComponent } from './pets/components/allpets/allpets.component';
import { AddpetComponent } from './profile/components/addpet/addpet.component';
import { EditprofileComponent } from './profile/components/editprofile/editprofile.component';
import { ViewprofileComponent } from './profile/components/viewprofile/viewprofile.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    AllappointmentsComponent,
    AllPetsComponent,
    ViewprofileComponent,
    EditprofileComponent,
    AddpetComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
    
    
    
    // ServiceWorkerModule.register('ngsw-worker.js', {
    //   enabled: !isDevMode(),
    //   // Register the ServiceWorker as soon as the application is stable
    //   // or after 30 seconds (whichever comes first).
    //   registrationStrategy: 'registerWhenStable:30000'
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
