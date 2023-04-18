import { Component, OnInit ,OnDestroy,Input,Output,EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
// Input decorador que permite pasar una variable de un padre a un hijo
@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})
export class SaludoComponent implements OnInit,OnDestroy,OnChanges{
  
  @Input() nombre: string ="Anonimo"
  @Output() mensajeEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor(){

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("cambios ocurridos"+JSON.stringify(changes))
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit():void{
    // instrucciones previas a la renderizacion
    console.log(" ngOninit del componente saludo");
  }

  /*ejemplo para gestionar un evento de tipo click*/
  alertaSaludo():void{
    alert("Hola,#{this.nombre}...alerta despachada desde un click de boton");
  }

  enviarMensajeAlPadre():void{
    this.mensajeEmitter.emit("hola $[this.nombre]")
  }


  // orden del ciclo de vida
  //ngOnChanges()
  //ngOnInit
  //ngOnDestroy()
}
