import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addpet',
  templateUrl: './addpet.component.html',
  styleUrls: ['./addpet.component.css']
})
export class AddpetComponent {

  constructor(private router: Router) { }

  onCancel() {
    this.router.navigate(['/profile']);
  }


  getUserFormData(data: any) {
    console.warn(data);
  }

  
}
