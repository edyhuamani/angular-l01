import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit{
  constructor(
    private authService:AuthService
  ){

  }

  ngOnInit(): void {
    console.log("------------------ngOnInit---------------------")

    this.authService.login("eve.holt@reqres.in","ityslicka").subscribe(
    (response) => {
        console.log("Respuesta Login"+response+ JSON.stringify(response))
        sessionStorage.setItem("token",response.token)
    }
    ,(error)=>console.log("Ha ocurrido un error "+error)
    )

  }
}
