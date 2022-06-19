import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-genre',
  templateUrl: './movie-genre.component.html',
  styleUrls: ['./movie-genre.component.css'],
})
export class MovieGenreComponent implements OnInit {
  genresArray!: string[];
  movieGenre!: Movie[];

  constructor(private _movieService: MovieService, private _router: Router) {}

  ngOnInit(): void {
    this._movieService.getDistinctGenre().subscribe({
      next: (data) => (this.genresArray = data),
    });
  }
}
