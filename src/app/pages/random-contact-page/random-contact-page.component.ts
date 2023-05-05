import { Component, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { IRandomContact, Results } from 'src/app/models/randomuser.interface';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-random-contact-page',
  templateUrl: './random-contact-page.component.html',
  styleUrls: ['./random-contact-page.component.scss']
})
export class RandomContactPageComponent implements OnInit{

  @Output() contact :IRandomContact  | undefined
  contacts :Results  | undefined

  constructor(
    private randomUserService:RandomUserService
  ){ }

  async ngOnInit(): Promise<void> {
    console.log("-----------ngOnInit----------")

     await this.randomUserService.obtenerRandomContact().subscribe((response : Results) => {
        this.contact = response.results[0];
        console.table(this.contact.name);
        console.table(this.contact);

     });
  }

  obtenerNuevoContacto(){
    /*
    this.randomUserService.obtenerRandomContact().subscribe(
      (response : Results) => {
      this.contact = response.results[0];
      },
      (error)=>console.log(error)
    );
    */
    // forma correcta
    this.randomUserService.obtenerRandomContact().subscribe({
      next :(response : Results) => {
        this.contact = response.results[0];
        },
      error:(error)=>console.log(error),
      complete:()=>console.log("Peticion completado")

    })
  }



  obtenerListaContactos (n:number){
    this.randomUserService.obtenerRandomContacts(n).subscribe(
      {

        next :(response : Results) => {
          console.log(response)
          this.contacts = response;
          },
        error:(error)=>console.log(error),
        complete:()=>console.log("Peticion completado")

      }
    )}


}
