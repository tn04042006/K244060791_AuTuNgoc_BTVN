import { Injectable } from '@angular/core'; // 1. Đổi import
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, retry, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root' 
})
export class CustomerHttpService18 {
  private _url: string = "/datasets/customer18.json";

  constructor(private _http: HttpClient) { }

  getCustomersHandleError(): Observable<any> {
    return this._http.get<any>(this._url)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }
}