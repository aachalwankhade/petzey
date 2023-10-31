import { Component } from '@angular/core';
import { AppointmentService } from '../../services/appointment.service';

@Component({
  selector: 'app-allappointments',
  templateUrl: './allappointments.component.html',
  styleUrls: ['./allappointments.component.css']
})
export class AllappointmentsComponent {

 
  
    users:any;
    Total:any;
    Confirm:any;
    Closed:any;
    Cancelled:any;
    gender:string='';

    // Variable declaration and initialization
  
  //   // Dependency Injection inside constructor
    constructor( public AllAppointment: AppointmentService) { /* TODO document why this constructor is empty */
      this.AllAppointment.getAllAppointment().subscribe(AllAppointment=>{
        console.log(AllAppointment)
        
        if(AllAppointment.petGender==0){
          this.gender='male';
        }
        else{
          this.gender='female'
        }
        this.users=AllAppointment;
      })


      this.AllAppointment.getViewAllAppointment().subscribe(ViewAllAppointment=>{
        console.log(ViewAllAppointment)
        this.Total=ViewAllAppointment;
      })
  
      this.AllAppointment.getConfirmAllAppointment().subscribe(ConfirmAllAppointment=>{
        console.log(ConfirmAllAppointment)
        this.Confirm=ConfirmAllAppointment;
      })
      this.AllAppointment.getClosedAllAppointment().subscribe(ClosedAllAppointment=>{
        console.log(ClosedAllAppointment)
        this.Closed=ClosedAllAppointment;
      })
      this.AllAppointment.getCancelledAllAppointment().subscribe(CancelledAllAppointment=>{
        console.log(CancelledAllAppointment)
        this.Cancelled=CancelledAllAppointment;
      })

  }


    
}


