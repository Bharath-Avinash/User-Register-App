import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { User } from '../User';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  array :any=[];
  constructor(private userService: RegisterService) { }

  ngOnInit(): void {

     let response = this.userService.getUsers();
      response.subscribe(data=> this.array=data);
  }

  public removeUser(username : string){
    let response = this.userService.deleteUser(username);
    response.subscribe(data => this.array = data);
  }

}
