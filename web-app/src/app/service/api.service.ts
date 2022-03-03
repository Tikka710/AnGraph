import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { catchError } from "rxjs/operators";
import { Observable } from 'rxjs';

import { of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {}

  private base_url: string = 'http://localhost:3000'
  items!: Item

  getUsers(): Observable<Item> {
    return this.http.get<Item>(`${this.base_url}/users`).pipe(
      catchError(this.handleError<Item>('getUsers'))
    );
  }
  // addComment(comment: Comment): Observable<Comment> {
  //   return this.http.post<Comment>(`${this.base_url}/comments`, comment)
  //   .pipe(
  //     catchError(this.handleError<Comment>('addComment'))
  //   );
  // }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: リモート上のロギング基盤にエラーを送信する
      console.error(error); // かわりにconsoleに出力
  

  
      // 空の結果を返して、アプリを持続可能にする
      return of(result as T);
    };
  }

}

export interface Item{
  users: [
      {
        id: number,
        name: string,
        email: string
      }
    ]
   
  }
  



