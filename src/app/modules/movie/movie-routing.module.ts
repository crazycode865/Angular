import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { BookingComponent } from './components/booking/booking.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieFormatComponent } from './components/movie-format/movie-format.component';
import { MovieGenreComponent } from './components/movie-genre/movie-genre.component';
import { MovieLanguageComponent } from './components/movie-language/movie-language.component';
import { MovieTypeComponent } from './components/movie-type/movie-type.component';
import { MovieComponent } from './components/movie/movie.component';

const routes: Routes = [
  {
    path: 'genre',
    component: MovieGenreComponent,
    children: [{ path: ':genre', component: MovieComponent }],
  },
  {
    path: 'language',
    component: MovieLanguageComponent,

    children: [{ path: ':language', component: MovieComponent }],
  },
  {
    path: 'format',
    component: MovieFormatComponent,
    children: [{ path: ':format', component: MovieComponent }],
  },
  {
    path: 'type',
    component: MovieTypeComponent,
    children: [{ path: ':type', component: MovieComponent }],
  },
  { path: 'movie-details/:id', component: MovieDetailsComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieRoutingModule {}
