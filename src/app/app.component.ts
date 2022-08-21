import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  collapse = true;

  public about = {
    who: '¡Hola! Soy Fran, graduado en ingeniería informática por la Universidad de Alicante. También trabajo a tiempo completo como desarrollador frontend especialziado en Angular. En mis tiempos libres también desarrollo proyectos por mi cuenta.',
    why: 'Soy un ingeniero con amplios conocimientos tanto técnicos como funcionales. Cuento con más de 2 años de experiencia laboral como desarrollador de software. Actualmente me encuentro cursando el máster universitario de Ingeniería Informática que me habilita como ingeniero superior en informática.'
  }

}
