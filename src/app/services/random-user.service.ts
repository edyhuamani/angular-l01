import { HttpClient, HttpErrorResponse ,HttpParams} from '@angular/common/http';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { IRandomContact, Results } from '../models/randomuser.interface';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService implements OnInit,OnDestroy{

  constructor(
    private http :HttpClient
  ) { }


  ngOnDestroy(): void {
    console.log("--------------ngOnDestroy---------------")
  }

  ngOnInit(): void {
    console.log("--------------ngOnInit---------------")
    //this.http.get("");
  }

  handleError(error:HttpErrorResponse){
    if (error.status===0){
      console.error('Ha ocurrido un error: ${error.error}' )
    }else{
      console.error('Error en el backend: ${error.status} La respuesta es ${error.error}' )
    }
    return throwError(()=>new Error(
      'Error en la peticion de contacto aleatorio')
    );
  }

  // Permite obtener
  obtenerRandomContact ():Observable<any>{

    //return this.http.get("https://randomuser.me/api");
    /*
    const req=this.http.get("https://randomuser.me/api");
    req.subscribe(
      (data)=>console.log(data),
      (error)=>this.handleError(error),
      ()=> console.log("finalizado")
      )
    return req;
    */
    return this.http.get<Results>("https://randomuser.me/api").pipe(
      retry(2), // numero de reintentos de peticiones
      catchError(this.handleError)
    )

  }
  // ? la interrogante indica que el parametro es opcional
  obtenerRandomContacts (n:number, sexo?:string ):Observable<Results>{
    // Parametros a pasar
    console.log("sexo->"+sexo)



    let params:HttpParams = new HttpParams().set("results",n);

    if (sexo){
      params = params.set("gender",sexo)
    } else {

    }



    //console.log("param1...."+params.get("results"))
    //console.log("param2...."+params.get("gender"))

    //return this.http.get("https://randomuser.me/api",);
    //return this.http.get<Results>("https://randomuser.me/api",{ params: params }).pipe(
    return this.http.get<Results>("https://randomuser.me/api",{ params: params }).pipe(
      retry(2), // numero de reintentos de peticiones
      catchError(this.handleError)
    )

  }

  obtenerRandomContactsPorGenero(n:number,sexo:string):Observable<Results>{
    // Parametros a pasar
    const params:HttpParams = new HttpParams().set("gender",sexo)

    //return this.http.get("https://randomuser.me/api",);
    return this.http.get<Results>("",{ params: params }).pipe(
      retry(2), // numero de reintentos de peticiones
      catchError(this.handleError)
    )
  }







}
