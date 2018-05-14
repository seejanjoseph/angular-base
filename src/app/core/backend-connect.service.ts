import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';



@Injectable()
export class BackendConnectService {
  private baseUrl = '/api/';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  post(endPoint, input): Observable<any> {
    return this.http.post(`${this.baseUrl}${endPoint}`, input, this.httpOptions).pipe(
      tap((item) => console.log(item)),
      catchError(this.handleError('addHero'))
    );
  }
  get(endPoint): Observable<any> {
    return this.http.get(`${this.baseUrl}${endPoint}`, this.httpOptions).pipe(
      catchError(this.handleError('get'))
    );
  }
  /*post(endPoint, input): Observable<any> {
    return this.http.post(`${this.baseUrl}${endPoint}`, input, this.httpOptions).pipe(
      catchError(this.handleError('post'))
    );
  }*/

  put(endPoint, input): Observable<any> {
    return this.http.put(`${this.baseUrl}${endPoint}`, input, this.httpOptions).pipe(
      catchError(this.handleError('put'))
    );
  }

  delete(endPoint): Observable<any> {
    return this.http.delete(`${this.baseUrl}${endPoint}`, this.httpOptions).pipe(
      catchError(this.handleError('delete'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}