import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { ContactDetailPageComponent } from './pages/contact-detail-page/contact-detail-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { AuthGuard } from './guards/auth.guard';
import { RandomContactPageComponent } from './pages/random-contact-page/random-contact-page.component';

const routes: Routes = [
  {
    path:'', // raiz del proyecto
    pathMatch:'full',
    redirectTo :'home'
  },
  {
    path:'login',
    component : LoginPageComponent
  },
  {
    path:'home',
    component : HomePageComponent,
    children:[
      {
        path:'hijo',
        component: HomePageComponent
      }
    ],
    canActivate:[AuthGuard]
  },
  {
    path:'contacts',
    component : ContactsPageComponent,
    canActivate:[AuthGuard] // Se colocan los guards que deben de cumplirse
  },
  {
    path:'contacts/:id',
    component : ContactDetailPageComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'random',
    component : RandomContactPageComponent,

  } ,
  {
    path:'**',
    component : NotFoundPageComponent,

  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
