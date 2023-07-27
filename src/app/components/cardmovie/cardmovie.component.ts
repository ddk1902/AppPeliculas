import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movies';

@Component({
  selector: 'app-card-movie',
  templateUrl: './cardmovie.component.html',
  styleUrls: ['./cardmovie.component.css']
})
export class CardMovieComponent implements OnInit {
  @Input('movie') movie!: Movie;

  constructor() { }

  ngOnInit(): void {    
  }

  getImagen() {
    return this.movie.Poster !== 'N/A' ? this.movie.Poster : 'https://via.placeholder.com/600'
  }


}