import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from "./user/user.model";
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
  public followersData;
  constructor(private http: HttpClient) { }

  public getFollowers(): Observable<User[]> {
    return this.http.get("http://jsonplaceholder.typicode.com/users")
    .map(this.extractData); 
        
    // let followers: User[] = [{ id: 1, firstName: 'Rohit', lastName: 'Abhimanyu'},
    // { id: 2, firstName: 'Raj', lastName: 'Kapoor'},
    // { id: 3, firstName: 'Ajit', lastName: 'Kumar'},
    // { id: 4, firstName: 'Abhishek', lastName: 'Yadav'},
    // ];
    //return Observable.of(this.http.get("http://jsonplaceholder.typicode.com/users")).delay(500);
  }

  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

  private extractData(res: User[]) {
    return res;
  }
}
