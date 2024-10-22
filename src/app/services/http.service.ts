import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiURL='http://localhost:3000/users';
  private apiURL2='http://localhost:3000/products';

  constructor(private http:HttpClient) { }

  //USED IN LOGIN COMPONENT
  login(email: string, password: string): Observable<any> {
    console.log("login API is ON");
    return this.http.get<User[]>(this.apiURL);
  }

  //USED IN SIGNUP COMPONENT
  signup(user:User):Observable<User>{
    return this.http.post<User>(this.apiURL,user);
  }

  //USED IN CARD-CONTAINER COMPONENT
  getProducts(){
    console.log("Product API is ON");
    return this.http.get<User[]>(this.apiURL2);
  }


}
