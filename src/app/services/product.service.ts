import { Injectable } from '@angular/core';

import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}
  url = 'http://localhost:3000';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getAllProducts(): Observable<any[]> {
    return this.httpClient
      .get<any[]>(this.url + '/all')
      .pipe(retry(2), catchError(this.handleError));
  }

  addProductInCart(product): Observable<any[]> {
    console.log('entrou', product);

    return this.httpClient
      .post<any[]>(this.url + '/addItem', { ...product })
      .pipe(retry(2), catchError(this.handleError));
  }

  getItensCart(): Observable<any[]> {
    return this.httpClient
      .get<any[]>(this.url + '/cart')
      .pipe(retry(2), catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage =
        `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
