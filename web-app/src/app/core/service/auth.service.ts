import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { catchError } from "rxjs/operators";
import { Observable } from 'rxjs';
// import { User } from '../../models/user'


interface User {
  email: string,
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private base_url: string = 'http://localhost:3000'
  user!: User

  constructor(private http: HttpClient) {}

  signup(name: User, email: User): Observable<User>{
    return this.http.post(`${this.base_url}/signup`, {})
  }
}
