import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  email: string = '';
  password: string = ''

  constructor(
    private router: Router,
    private authService: AuthService
  ) {

  }

  ngOnInit(): void {
    console.log("--------------ngOnInit----------")
    let token = sessionStorage.getItem('token')

    if (token) {
      this.router.navigate(['home'])
    }
  }

  loginUser() {
    //sessionStorage.setItem("token","123456789")
    //this.authService.login("eve.holt@reqres.in","cityslicka").subscribe(

    console.log("email " + this.email)
    console.log("password " + this.password)
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        if (response.token) {
          console.log(JSON.stringify(response))
          sessionStorage.setItem("token", response.token)
          this.router.navigate(['/dashboard'])
        }
      }
      , (error) => {
        console.error("Ha Habido un error al hacer login" + error)
      },
      () => console.log("Peticion de login terminada...")

    )

    //this.router.navigate(['contacts'])
  }

}
