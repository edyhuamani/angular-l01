import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IContacto } from 'src/app/models/contact.interface';
import { IRandomContact } from 'src/app/models/randomuser.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{

  token: string | null =null;
  contactoSeleccionado: IRandomContact | undefined

  constructor(
    private router :Router
  ){

  }

  ngOnInit(): void {
    console.log("----- ngOnInit------")
    //
    this.token = sessionStorage.getItem("token");
    // Leemos el estado del historial de naveghacion
    if (history.state.data){
      console.log(history.state.data)
      this.contactoSeleccionado = history.state.data
    }
  }

  navegarAContacts():void{
    let navigationExtras :NavigationExtras = {
      queryParams :{
        sexo :'todos'

      }
    }

    this.router.navigate(['/dashboard/contacts'],navigationExtras);

  }

}
