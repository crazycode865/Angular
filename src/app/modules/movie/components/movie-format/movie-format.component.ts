import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-format',
  templateUrl: './movie-format.component.html',
  styleUrls: ['./movie-format.component.css'],
})
export class MovieFormatComponent implements OnInit {
  formatsArray!: string[];
  movieFormat!: Movie[];

  constructor(private _movieService: MovieService, private _router: Router) {}

  ngOnInit(): void {
    this._movieService.getDistinctFormat().subscribe({
      next: (data) => (this.formatsArray = data),
    });
  }

  viewByFormat = (format: string) => {
    this._movieService.getByFormat(format).subscribe({
      next: (data) => (this.movieFormat = data),
    });
    this._router.navigate(['/movies', format]);
  };
}
