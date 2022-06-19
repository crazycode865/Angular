import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './components/movie/movie.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { ShowComponent } from './components/show/show.component';
import { ShowDetailsComponent } from './components/show-details/show-details.component';
import { TheatreDetailsComponent } from './components/theatre-details/theatre-details.component';
import { TheatreComponent } from './components/theatre/theatre.component';
import { BookingDetailsComponent } from './components/booking-details/booking-details.component';
import { SharedModule } from '../shared/shared.module';
import { MovieRoutingModule } from './movie-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MovieFormatComponent } from './components/movie-format/movie-format.component';
import { MovieGenreComponent } from './components/movie-genre/movie-genre.component';
import { MovieLanguageComponent } from './components/movie-language/movie-language.component';
import { MovieTypeComponent } from './components/movie-type/movie-type.component';

@NgModule({
  declarations: [
    MovieComponent,
    MovieDetailsComponent,
    ShowComponent,
    ShowDetailsComponent,
    TheatreDetailsComponent,
    BookingDetailsComponent,
    MovieComponent,
    MovieFormatComponent,
    MovieGenreComponent,
    MovieLanguageComponent,
    MovieTypeComponent,
  ],
  imports: [CommonModule, SharedModule, MovieRoutingModule, HttpClientModule],
})
export class MovieModule {}
