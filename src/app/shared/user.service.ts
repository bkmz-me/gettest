import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Response } from '@angular/http';
import {Observable} from 'rxjs';
// import { Observable, of, from } from 'rxjs';
import 'rxjs/add/operator/map';
import { User } from './user.model';

@Injectable()
export class UserService {
  readonly rootUrl = 'https://localhost:44315';
  constructor(private http: HttpClient) { }

  registerUser(user: User) {
    const body: User = {
      UserName: user.UserName,
      Password: user.Password,
      Email: user.Email
    };
    return this.http.post(this.rootUrl + '/api/User/Register', body);
  }
}
