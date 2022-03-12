import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { catchError } from "rxjs/operators";
import { Observable } from 'rxjs';
import { Comment, ResponseComment} from '../models/comment';
import { of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private base_url: string = 'http://localhost:3000'
  comments!: ResponseComment

  constructor(private http: HttpClient) { }

  getComments(): Observable<ResponseComment>{
    return this.http.get<ResponseComment>(`${this.base_url}/comments`)
    .pipe(
      catchError(this.handleError<ResponseComment>('getComments'))
    );
  }

  addComment(comment: Comment): Observable<ResponseComment> {
    return this.http.post<ResponseComment>(`${this.base_url}/comments`, comment)
    .pipe(
      catchError(this.handleError<ResponseComment>('addComment'))
    );
  }

  updateComment(comment: Comment): Observable<ResponseComment>{
    return this.http.put<ResponseComment>(`${this.base_url}/comments/${comment.id}`, comment)
    .pipe(
      catchError(this.handleError<ResponseComment>('updateComment'))
    );
  }

  deleteComment(comment: Comment): Observable<ResponseComment>{
    return this.http.delete<ResponseComment>(`${this.base_url}/comments/${comment.id}`)
    .pipe(
      catchError(this.handleError<ResponseComment>('deleteComment'))
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
