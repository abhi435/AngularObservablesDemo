import { Component, OnInit } from '@angular/core';
import { AppService } from "../app.service";
import { User } from "./user.model";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  observableUsers: Observable<User[]>
  users: User[];
  errorMessage: String;
  constructor(private appService: AppService) { }
  
  ngOnInit() {
    this.observableUsers = this.appService.getFollowers();
    console.log(this.observableUsers);
    this.observableUsers.subscribe(
      users => this.users = users,
      error =>  this.errorMessage = <any>error); 
  }
  
  

}