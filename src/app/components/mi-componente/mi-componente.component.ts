import { Component } from '@angular/core'

@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html'
})

export class MiComponente{

    public titulo: string
    public mostrarPeliculas: boolean

    constructor(){
        this.titulo = "Hola"
        this.mostrarPeliculas = true
    }

    ocultarPeliculas(){
        this.mostrarPeliculas = false
    }
}