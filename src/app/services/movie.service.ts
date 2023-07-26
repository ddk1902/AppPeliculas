import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
//ApiKey 69fe1a90
private Api_Url: string = 'http://www.omdbapi.com/?apikey=69fe1a90';

  constructor(private http:HttpClient) { }

    getMovies(searchTerm : string): Observable<any> {
      return this.http.get(`${this.Api_Url}&s=${searchTerm }`);
     
   }
}
