import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { catchError } from "rxjs/operators";
import { Observable } from 'rxjs';
import { Comment } from '../models/comment';
import { of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private base_url: string = 'http://localhost:3000'
  comments!: Comment

  constructor(private http: HttpClient) { }

  getComments(): Observable<Comment>{
    return this.http.get<Comment>(`${this.base_url}/comments`)
    .pipe(
      catchError(this.handleError<Comment>('getComments'))
    );
  }

  addComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(`${this.base_url}/comments`, comment)
    .pipe(
      catchError(this.handleError<Comment>('addComment'))
    );
  }




  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: リモート上のロギング基盤にエラーを送信する
      console.error(error); // かわりにconsoleに出力
      // 空の結果を返して、アプリを持続可能にする
      return of(result as T);
    };
  }
  

}
