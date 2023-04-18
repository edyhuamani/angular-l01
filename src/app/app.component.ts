import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {
  title = 'HolaMundo';
  nombre = 'Hi Martin app is running v2';
  usuario ="@masajo"
  mensajeEmitter=""
  /*
  recibirMensajeHijo(event :evento){
    alert(evento)
  }
  */
}
