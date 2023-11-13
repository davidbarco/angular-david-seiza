import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-personajes',
  templateUrl: './card-personajes.component.html',
  styleUrls: ['./card-personajes.component.css']
})
export class CardPersonajesComponent {
  @Input() mascotas: any = [];

  eliminar(mascotas: any){
    console.log(mascotas)
  }

}
