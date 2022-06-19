import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-type',
  templateUrl: './movie-type.component.html',
  styleUrls: ['./movie-type.component.css'],
})
export class MovieTypeComponent implements OnInit {
  typesArray!: string[];
  movieType!: Movie[];

  constructor(private _movieService: MovieService, private _router: Router) {}

  ngOnInit(): void {
    this._movieService.getDistinctType().subscribe({
      next: (data) => (this.typesArray = data),
    });
  }
}
