// Importamos httpClient para poder trabajar con peticiones http
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//A través de la librería rxjs podemos trabajar con Observables
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
//ApiKey 69fe1a90


//Definimos una variable para definir la url de donde consumimos la API
private Api_Url: string = 'http://www.omdbapi.com/?apikey=69fe1a90';

  constructor(private http:HttpClient) { }

   // Aquí llamamos a la función getMovies que tenemos en el component con los términos de búsqueda
   //Le decimos al o¡bservable con <any> que nos puede traer todo tipo de resultados
    getMovies(searchTerm : string): Observable<any> {
      return this.http.get(`${this.Api_Url}&s=${searchTerm }`);
     
   }
}
