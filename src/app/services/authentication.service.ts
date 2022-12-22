import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
const TOKEN_KEY = 'my-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  token = '';
  constructor(
    private http: HttpClient,
    private storage: Storage) {
    this.loadToken();
   }

   async loadToken(){
     const token = await this.storage.get('key');
     if(token && token.value){
       console.log('set token:', token.value);
       this.token = token.value;
       this.isAuthenticated.next(true);
     }else{
       this.isAuthenticated.next(false);
     }
   }
   login(credentials: {email, password}): Observable<any> {
     var url = "https://localhost:8000/api/login?";
     return this.http.post(url, credentials);
    //   .map(response =>{
    //     console.log("hallo");
    //  });
    //  return this.http.post('https://localhost:8000/api/login', credentials)
    //  .map((data: any) => data.token),
    //    .switchMap(token => {
    //      //const key = TOKEN_KEY;
    //      return from(this.storage.set('TOKEN_KEY', 'token' ));
    //    }),
    //    .tap(_ => {
    //      this.isAuthenticated.next(true);
    //    })
    //  )
   }
   logout(): Promise<void> {
     this.isAuthenticated.next(false);
     return this.storage.remove(TOKEN_KEY);
   }

}
