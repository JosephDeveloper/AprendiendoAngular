import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Pelicula } from './../../models/pelicula';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  @Input() pelicula: Pelicula
  @Output() marcarFavorita = new EventEmitter()

  constructor() {
    this.pelicula = new Pelicula('', 0, '')
  }

  ngOnInit(): void {
  }

  seleccionar(event: any, pelicula: Pelicula){
    this.marcarFavorita.emit({
      pelicula: pelicula
    })
  }

}
