import { Injectable } from '@angular/core'
import { Pelicula } from '../models/pelicula'

//para saber que es un servicio
@Injectable()

export class PeliculaService{

    public peliculas: Pelicula[]

    constructor(){
        this.peliculas = [
            new Pelicula("Spiderman 4", 2019, 'https://media.revistagq.com/photos/5d5d19b10ef2260008f5cdb7/master/pass/mejor%20spider-man%20pelicula%20sony%20marvel.jpg'),
            new Pelicula("Los vengadores", 2020, 'https://i.blogs.es/d93d8d/marvel/450_1000.jpeg'),
            new Pelicula("Rapido y furioso", 2018, 'https://www.latercera.com/resizer/znQiYogOEfK9gkDrNO6Od4Xv_Zc=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/OVNWP2R2KVFTRP53GJNKRDLORE.jpg')
            
            /* {year: 2019, title: "Spiderman 4", image: 'https://media.revistagq.com/photos/5d5d19b10ef2260008f5cdb7/master/pass/mejor%20spider-man%20pelicula%20sony%20marvel.jpg'},
            {year: 2020, title: "Los vengadores", image: 'https://i.blogs.es/d93d8d/marvel/450_1000.jpeg'},
            {year: 2018, title: "Rapido y furioso", image: 'https://www.latercera.com/resizer/znQiYogOEfK9gkDrNO6Od4Xv_Zc=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/OVNWP2R2KVFTRP53GJNKRDLORE.jpg'} */
        ]
    }

    holaMundo(){
        return 'Hola mundo'
    }

    getPeliculas(){
        return this.peliculas
    }
}