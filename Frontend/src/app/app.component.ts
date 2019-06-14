import { Component } from '@angular/core';

@Component({
  // El selector es el Nombre para poder incrustarlo en otra vista.
  selector: 'app-root',
  // templateUre incica la vista asociada.
  templateUrl: './app.component.html',
  // styleUrl incida el css asociado.
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mi Proyecto';
}
