import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient
  ) { }

  // Permite lanzar un request para el login y obtiene un observable
  // usando http client
  login(email:string,password:string):Observable<any>{

    let body={
      email:email,
      password:password
    }
    // http siempre dewvolvera un observable
    return this.http.post("https://reqres.in/api/login/",body)
  }
}
