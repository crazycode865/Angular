import {
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movie.service';
import { TheatreDetailsComponent } from '../theatre-details/theatre-details.component';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  movies!: Movie[];
  type = '';

  constructor(
    private _movieService: MovieService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log(`in movie`);
    this._activatedRoute.paramMap.subscribe((map) => {
      let typ = map.get('type');
      if (typ) this.type = typ;
      console.log('Inside movie component');

      this._movieService.getByChoice(this.type).subscribe({
        next: (data) => {
          (this.movies = data), console.log(this.movies);
        },
      });
    });
  }

  onSubmit = (movie: Movie) => {
    //to navigate to productdetails component
    this._router.navigate(['/movie-details', movie.movieId]);
  };
}
