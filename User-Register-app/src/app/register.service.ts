import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {


  
  constructor(  private http :HttpClient) { }

  public doRegistration(user :User){
    console.log("do save")
    return this.http.post("http://localhost:8081/save-user",user, {responseType : "text" as "json"});
  }

  public getUsers(){
    return this.http.get("http://localhost:8081/all-users");
  }

  public deleteUser(username :string){
    return this.http.get("http://localhost:8081/delete/"+username);
  }

  

}
