import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/modules/movie/models/movie';
import { Show } from 'src/app/modules/movie/models/show';
import { MovieService } from 'src/app/modules/movie/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movies: Movie[] = [];

  constructor(
    private _movieService: MovieService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this._movieService.getAllMovies().subscribe({
      next: (data) => (this.movies = data),
      complete: () => console.log(`getting  all movies in home component`),
    });
  }

  onSubmit = (movie: Movie) => {
    //to navigate to moviedetails component
    this._router.navigate(['/movie-details', movie.movieId]);
  };
}
