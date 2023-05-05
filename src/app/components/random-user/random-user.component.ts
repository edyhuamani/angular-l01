import { Component, Input, OnInit } from '@angular/core';
import { RandomUserService } from 'src/app/services/random-user.service';
import { IRandomContact, Results } from 'src/app/models/randomuser.interface';

@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.scss']
})
export class RandomUserComponent implements OnInit {

  randomResults:Results | undefined
  @Input() randomContact:IRandomContact | undefined

  constructor(
    //private randomUserService:RandomUserService
  ){

  }
  ngOnInit(): void {
    console.log("-----------ngOnInit----------")
    /*
    this.randomUserService.obtenerRandomContact().subscribe((response : Results) => {
        this.randomContact = response.results[0];
        console.table(this.randomContact.name);
        console.table(this.randomContact);

    });
    */
  }

}
