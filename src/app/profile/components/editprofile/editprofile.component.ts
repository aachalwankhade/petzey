import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent {
  constructor(private router: Router,) { }

  onCancel() {
    this.router.navigate(['/profile']);
  }



  
}
