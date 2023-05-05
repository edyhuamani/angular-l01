import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo-pipes',
  templateUrl: './ejemplo-pipes.component.html',
  styleUrls: ['./ejemplo-pipes.component.scss']
})
export class EjemploPipesComponent implements OnInit,OnDestroy{

  dob :Date =new Date(1991,9,14)
  cambio:Boolean =true
  constructor(){}

  ngOnInit(): void {
    console.log("--------------ngOnInit-----------------")
  }
  ngOnDestroy(): void {
    console.log("-------------ngOnDestroy------------------")
  }

  cambiarFormato(){
    this.cambio=!this.cambio
  }

  get dateFormat(){
    return this.cambio ? 'shortFate': 'fullDate'
  }
}
