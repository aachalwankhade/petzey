import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class profileService {


  viewprofile ="https://petzypatientapi20230106143316.azurewebsites.net/api/PetParent";

  constructor(public http: HttpClient) { }
  getViewProfile(){
    return this.http.get<any>(this.viewprofile);
  }


  
}


