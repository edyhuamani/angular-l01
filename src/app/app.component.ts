import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title:string = 'ngRouting';
  token:string | any;
  constructor(
    private router:Router
  ){

  }

  ngOnInit(): void {
    console.log("--------------ngOnInit-------------")

    this.token = sessionStorage.getItem("token");
    console.log("token obtenido "+this.token)
  }

  logout():void{
    console.log("--------------logout-------------")
    sessionStorage.removeItem("token")
    this.token=null;
    this.router.navigate(['login'])
  }
}


// a traves inputs / outputs
// a traves de inyeccion @viewchild , @contentchild , @contentChildren
// a traves de servicios / promesas /observables
// a traves de parametros
