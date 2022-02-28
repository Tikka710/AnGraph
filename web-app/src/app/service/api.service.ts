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
  // APIの呼び出し
  async callAPI(request: any){
      try{
        const accessToken = localStorage.getItem('accessToken') || '';
      const accessRequest = request.clone({ headers: request.headers.set('access-token', accessToken) });

      // リクエスト実行。成功なら、応答データをそのまま返す。
      const ret: any = await this.http.request(accessRequest).toPromise();
      return ret.body;
      } catch (e) {
        throw e
      }
  }

  getUsers(): Observable<Item> {
    return this.http.get<Item>(`${this.base_url}/users`);
  }

  get hello$(){
    return this.http.get<Hello>(`${this.base_url}/api`);
  }

  get item$(){
    return this.http.get<Item>(`${this.base_url}/users`)
    .pipe(
      catchError(this.handleError<Item>('item$'))
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

export interface Item{
  users: [
    {
    id: number,
    name: string,
    email: string
  }
    ]
   
  }
  


export interface Hello{
  message: string
}
