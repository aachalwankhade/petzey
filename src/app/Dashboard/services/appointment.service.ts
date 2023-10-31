import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  url ="https://petzeyapplication.azurewebsites.net/api/Setting/AllAppointments";

  Total="https://petzeyapplication.azurewebsites.net/api/Appointment/TotalAppointments";
  confirm ="https://petzeyapplication.azurewebsites.net/api/Appointment/ConfirmedAppointments";
   closed="https://petzeyapplication.azurewebsites.net/api/Appointment/ClosedAppointments";
    cancelled="https://petzeyapplication.azurewebsites.net/api/Appointment/CancelledAppointments";
 
  // Inject Repository in the constructor

  constructor(public http: HttpClient) { }
  getAllAppointment(){
    return this.http.get<any>(this.url);
  }

  getViewAllAppointment(){
    return this.http.get<any>(this.Total);
  }
  getConfirmAllAppointment(){
    return this.http.get<any>(this.confirm);
  }
  getClosedAllAppointment(){
    return this.http.get<any>(this.closed);
  }
  getCancelledAllAppointment(){
    return this.http.get<any>(this.cancelled);
  }


   // call the repository to get,post and put the data
}
