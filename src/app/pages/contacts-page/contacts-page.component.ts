import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IContacto } from 'src/app/models/contact.interface';
import { NavigationExtras } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';
import { RandomUserService } from 'src/app/services/random-user.service';
import { IRandomContact, Results } from 'src/app/models/randomuser.interface';



@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {

  listaContactos: IContacto[] = []
  listaRandomContactos: IRandomContact[] = []

  /*
  listaContactos :IContacto[] =[
    {
      id:0,
      nombre:'Martin',
      apellidos:'San Jose',
      email:'martin@imaginaGroup.com',
      sexo:'hombre'
    },
    {
      id:1,
      nombre:'Andres',
      apellidos:'garcia',
      email:'andres@imaginaGroup.com',
      sexo:'hombre'
    }
    ,
    {
      id:2,
      nombre:'Ana',
      apellidos:'fernandez',
      email:'ana@imaginaGroup.com',
      sexo:'mujer'
    }

  ]
  */

  filtroSexo: string = 'todos'

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contactService: ContactService,
    private randomUserService: RandomUserService
  ) {

  }

  ngOnInit(): void {
    console.log("-------onInit------")
    //Obtener queryparams
    let sexo = '';
    this.route.queryParams.subscribe((params: any) => {
      console.log('QueryParam all ' + JSON.stringify(params));
      console.log('QueryParam ' + params.sexo);
      sexo = params.sexo
      if (params.sexo) {
        this.filtroSexo = params.sexo;
        if (params.sexo=='female' || params.sexo=='male'){

          console.log("init call api GENDER Ok.........")
          console.log("GENDER ->"+this.filtroSexo)
          this.randomUserService.obtenerRandomContacts(10,this.filtroSexo).subscribe(
            {
              // oBSERVABLE
              next: (response: Results) => {
                console.log(response)
                response.results.forEach((result:IRandomContact,index:number)=>{
                   this.listaRandomContactos.push(result)
                })
                console.log(this.listaRandomContactos)


              },
              error: (error) => console.log(error),
              complete: () => console.log("Peticion completado")

            }
          )


        }
      } else {
        console.log("init call api .........")
        this.randomUserService.obtenerRandomContacts(10).subscribe(
          {
            // oBSERVABLE
            next: (response: Results) => {
              console.log(response)
              response.results.forEach((result:IRandomContact,index:number)=>{
                 this.listaRandomContactos.push(result)
              })
              console.log(this.listaRandomContactos)


            },
            error: (error) => console.log(error),
            complete: () => console.log("Peticion completado")

          }
        )
      }


      console.log("end call api .........")

      /*
      this.contactService.obtenerContactos(this.filtroSexo).then((lista) => {
        console.log("lista" + JSON.stringify(lista))
        this.listaContactos = lista
      })
        .catch((error) => console.log('Ha ocurrido un error al obtener los datos ' + error))
        .finally(() => console.info("consulta finalizada"))
      */


    })

    //this.listaContactos = this.listaContactos.filter((elemento=>elemento.sexo=sexo))
    //this.listaContactos.filter( contacto=> )
    console.log("sexo selecionado " + sexo)
    /*
    const result = this.listaContactos.filter(s => s.sexo.indexOf(sexo));
    console.log(JSON.stringify(result));
    */

    /*
    console.log("init call api .........")
    this.randomUserService.obtenerRandomContacts(10).subscribe(
      {

        next: (response: Results) => {
          console.log(response)
          response.results.forEach((result:IRandomContact,index:number)=>{
             this.listaRandomContactos.push(result)
          })
          console.log(this.listaRandomContactos)


        },
        error: (error) => console.log(error),
        complete: () => console.log("Peticion completado")

      }
    )
    console.log("end call api .........")
    */


  }


  //volverAHome():IContacto| any{
  /*
  volverAHome(contacto: IContacto) {
    // Configuro el navigation extras como un modelandview de spring
    let navigationExtras: NavigationExtras = {
      state: {
        data: contacto
      }
    }
    // lanzo la redireccion mas la informacion adicional
    this.router.navigate(['/home'], navigationExtras)
  }
  */

  volverAHome(contacto: IRandomContact) {
    // Configuro el navigation extras como un modelandview de spring
    let navigationExtras: NavigationExtras = {
      state: {
        data: contacto
      }
    }
    // lanzo la redireccion mas la informacion adicional
    this.router.navigate(['/home'], navigationExtras)
  }



}
