import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = "https://localhost:8000/api/user"
  constructor(
    private httpClient: HttpClient
  ) { }

  deleteUser(id: any): Observable{
    return this.httpClient.delete(this.url + "/id", httpOptions).pipe(
      tap(_ => console.log("user deleted + " + id)),
      catchError(this.handleError)
    )
  }
}
