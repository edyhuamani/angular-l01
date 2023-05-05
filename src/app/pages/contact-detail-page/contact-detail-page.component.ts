import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IContacto } from 'src/app/models/contact.interface';
import { IRandomContact } from 'src/app/models/randomuser.interface';
import { NombreCompletoPipe } from 'src/app/pipes/nombre-completo.pipe';

@Component({
  selector: 'app-contact-detail-page',
  templateUrl: './contact-detail-page.component.html',
  styleUrls: ['./contact-detail-page.component.scss']
})
export class ContactDetailPageComponent implements OnInit{

  id:any
  contacto:IRandomContact | undefined
  /*
  contacto:IContacto ={
    id:0,
    nombre:'',
    apellidos:'',
    email:'',
    sexo:'nujer'

  }
  */

  constructor(
    private router:Router,
    private route:ActivatedRoute
  ){

  }

  ngOnInit(): void {
    console.log("------ngOnInit-----")
    this.route.params.subscribe(
      (params:any)=>{
        console.log(" "+params)
        if (params.id){
          this.id = params.id;
        }
      }
    )
    if (history.state.data){
      this.contacto = history.state.data
    }
  }

  retornarListaContactos():void{
    console.log("------retornarListaContactos-----")
    this.router.navigate(['contacts'])
  }

}
