import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-kaban-tasks',
  templateUrl: './kaban-tasks.component.html',
  styleUrls: ['./kaban-tasks.component.scss'],
})
export class KabanTasksComponent {
  todo = [
    'Aprender animaciones en Angular',
    'Aprender a gestionar Angular CLI ',
    'Aprender a hacer una build en Angular',
    'Aprender a desplegar bundle de Angular',
  ];

  done = [
    'Aprender typeScript',
    'Aprender JS y ES ',
    'Aprender Angular',
    'Configurar IDE',
    'Crear Hola Mundo  en angular',
    'Aprender a gestionar servicios en angular',
  ];

  drop(event: CdkDragDrop<string[]>): void {
    console.log("event "+event.container.data)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }
}
