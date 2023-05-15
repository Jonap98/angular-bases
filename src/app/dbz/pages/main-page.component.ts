import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  // Esta es una inyección de dependencias
  // Habilita en todo el componente del MainPage, toda la info utilizada en ese servicio
  constructor( public dbzService: DbzService ) {

  }

}
