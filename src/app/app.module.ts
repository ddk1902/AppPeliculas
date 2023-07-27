import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Módulos
import {HttpClientModule} from '@angular/common/http';
//Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { CardMovieComponent } from './components/cardmovie/cardmovie.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    CardMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
