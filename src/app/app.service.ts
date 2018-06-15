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
      .map((data: User[]) => data); 
  }

  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

}