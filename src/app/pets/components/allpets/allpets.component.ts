import { Component } from '@angular/core';
import { PetService } from '../../services/pet.service';

@Component({
  selector: 'app-allpets',
  templateUrl: './allpets.component.html',
  styleUrls: ['./allpets.component.css']
})
export class AllPetsComponent {

 users:any;
 gender:string='';

  // Variable declaration and initialization

//   // Dependency Injection inside constructor
  constructor( public AllPets: PetService) { /* TODO document why this constructor is empty */
    this.AllPets.getAllPets().subscribe(AllPets=>{
      this.users=AllPets;
      
      if(AllPets.petGender==0){
        this.gender='male';
      }
      else{
        this.gender='female'
      }
    })
}
  

  ngOnInit(): void {

    
    // Fetch / Load data

   
    // Validation Logic
  }

 
  
  // Logic for the submit
  onSubmit() {}


allpetsArray = [
  {
    img: "assets/pets/pet 1.jpg",
    name: "Doggo",
    info: "Male,2.2 years",
    owner: "owner:john doe"
  },
  {
    img: "assets/pets/pet 3.jpg",
    name: "Doggo",
    info: "Male,2.2 years",
    owner: "owner:john doe"
  },  {
    img: "assets/pets/pet 2.jpg",
    name: "Doggo",
    info: "Male,2.2 years",
    owner: "owner:john doe"
  },  {
    img: "assets/pets/pet 3.jpg",
    name: "Doggo",
    info: "Male,2.2 years",
    owner: "owner:john doe"
  }
  
  
];



}
