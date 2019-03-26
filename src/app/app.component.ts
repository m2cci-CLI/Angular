import { Component } from '@angular/core';
import { FormationComponent } from './formation/formation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'la nature de Angular';
  noms: string ='cherif';
  formationAngular:string='Module angular';

  getTitle() :string {
    return `Function: ${this.noms} => ${this.formationAngular} `
    }
}
 