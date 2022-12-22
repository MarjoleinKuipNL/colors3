import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  constructor(
    public httpClient: HttpClient
  ) { }
  getProducts(): Observable {
    return this.httpClient.get(apiUrl)
      .pipe(
        tap(product => console.log('fetched products')),
        catchError(this.handleError('getProducts', []))
      );
  }
  getProduct(id: any): Observable {
    const url = `${apiUrl}/${id}`;
    return this.httpClient.get(url).pipe(
      tap(_ => console.log(`fetched product id=${id}`)),
      catchError(this.handleError(`getProduct id=${id}`))
    );
  }

  addProduct(product: Product): Observable {
    return this.httpClient.post(apiUrl, product, httpOptions).pipe(
      tap((prod: Product) => console.log(`added product w/ id=${prod._id}`)),
      catchError(this.handleError('addProduct'))
    );
  }

  updateProduct(id: any, product: any): Observable {
    const url = `${apiUrl}/${id}`;
    return this.httpClient.put(url, product, httpOptions).pipe(
      tap(_ => console.log(`updated product id=${id}`)),
      catchError(this.handleError('updateProduct'))
    );
  }

  deleteProduct(id: any): Observable {
    const url = `${apiUrl}/${id}`;

    return this.httpClient.delete(url, httpOptions).pipe(
      tap(_ => console.log(`deleted product id=${id}`)),
      catchError(this.handleError('deleteProduct'))
    );
  }
}
