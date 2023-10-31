import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 



@Injectable({
  providedIn: 'root'
})
export class PetService {
  url ="https://petzypatientapi20230106143316.azurewebsites.net/api/controller/AllPets";

  constructor(public http: HttpClient) { }
  getAllPets(){
    return this.http.get<any>(this.url);
  }
}
