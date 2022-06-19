import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-language',
  templateUrl: './movie-language.component.html',
  styleUrls: ['./movie-language.component.css'],
})
export class MovieLanguageComponent implements OnInit {
  languageArray!: string[];
  movieLanguage!: Movie[];

  constructor(private _movieService: MovieService, private _router: Router) {}

  ngOnInit(): void {
    this._movieService.getDistinctLanguage().subscribe({
      next: (data) => (this.languageArray = data),
    });
  }

  viewByLanguage = (language: string) => {
    this._movieService.getByLanguage(language).subscribe({
      next: (data) => (this.movieLanguage = data),
    });
    this._router.navigate(['/movies', language]);
  };
}
