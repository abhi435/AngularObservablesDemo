import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { User } from "./user/user.model";

@Injectable()
export class AppService {

  constructor() { }

  public getFollowers(): Observable<any> {
    let followers: User[] = [{ id: 1, firstName: 'Rohit', lastName: 'Abhimanyu'},
    { id: 2, firstName: 'Raj', lastName: 'Kapoor'},
    { id: 3, firstName: 'Ajit', lastName: 'Kumar'},
    { id: 4, firstName: 'Abhishek', lastName: 'Yadav'},
    ];
    return Observable.of(followers).delay(500);
  }

}
