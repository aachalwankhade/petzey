import { Component } from '@angular/core';
import { profileService } from '../../services/profile.service';
@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent {
  users:any;
parentName: any;
  
  constructor( public ViewProfile: profileService) { 

  this.ViewProfile.getViewProfile().subscribe((ViewProfile: any)=>{
    console.log(ViewProfile)
    
    
    this.users=ViewProfile;
  })
  
}

}
// name="Dr.David Miller";
// mobile="0987654321";
// location="New York,USA";


// petname = "Doggo";
// petinfo="Male,2.2 years";