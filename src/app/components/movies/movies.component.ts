import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit
{
  constructor(private movieService:MovieService){}

  ngOnInit(): void { }


  // Creamos una función llamada getMovies para poder listar todas las peliculas a través de los términos de búsqueda
  // Definimos el parámetro searchTerms para los términos de búsqueda
  // A través de un observable nos subscribimos a los datos que trae la búsqueda

  getMovies(searchTerms:string){
    this.movieService.getMovies(searchTerms).subscribe(data => {
      console.log(data);
    })
  }


}
