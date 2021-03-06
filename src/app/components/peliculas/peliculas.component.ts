import { Component, DoCheck, OnInit, OnDestroy } from '@angular/core';
import { Pelicula } from '../../models/pelicula'
import { PeliculaService } from '../../services/pelicula.service'

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit, DoCheck {

  public titulo: string
  public peliculas: Pelicula[]
  public favorita: Pelicula
  public fecha: any

  constructor(private _peliculaService: PeliculaService) {
    this.titulo = "Componente pelicula"
    this.peliculas = this._peliculaService.getPeliculas()
    this.favorita = new Pelicula('', 0, '')
    this.fecha = new Date(2020, 8, 12)
  }

  ngOnInit(): void {
    console.log("Componente iniciado")
    console.log(this._peliculaService.holaMundo())
  }

  ngDoCheck(){
    console.log("Docheck iniciado")
  }

  cambiarTitulo(){
    this.titulo = "El titulo ha sido cambiado"
  }

  ngOnDestroy(){
    console.log("El componente se va a eliminar")
  }

  mostrarFavorita(event: any){
    this.favorita = event.pelicula
  }

}
