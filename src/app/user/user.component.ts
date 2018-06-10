import { Component, OnInit } from '@angular/core';
import { AppService } from "../app.service";
import { User } from "./user.model";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  users: [User]
  constructor(private appService: AppService) { }
  
  ngOnInit() {
    this.appService.getFollowers().subscribe(
      data => this.users = data);
  }
}