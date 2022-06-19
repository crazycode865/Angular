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

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  movies!: Movie[];
  // moviesOfFormat!: Movie[];
  genre!: string;
  type!: string;
  language!: string;
  format!: string;
  // moviesDetails!: Movie;
  constructor(
    private _movieService: MovieService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((map) => {
      let gen = map.get('genre');
      if (gen) this.genre = gen;

      let typ = map.get('type');
      if (typ) this.type = typ;

      let lang = map.get('language');
      if (lang) this.language = lang;

      let frmat = map.get('format');
      if (frmat) this.format = frmat;
    });

    this._movieService.getByGenre(this.genre).subscribe({
      next: (data) => {
        this.movies = data;
      },
      complete: () => console.log(`completed loading movies by genre`),
    });
    this._movieService.getByType(this.type).subscribe({
      next: (data1) => {
        this.movies = data1;
      },
      error: () => console.log(`error loading movies by type`),
      complete: () => console.log(`completed loading movies by type`),
    });

    this._movieService.getByLanguage(this.language).subscribe({
      next: (data2) => {
        this.movies = data2;
      },
      error: () => console.log(`error loading movies by language`),
      complete: () => console.log(`completed loading movies by language`),
    });

    this._movieService.getByFormat(this.format).subscribe({
      next: (data) => {
        this.movies = data;
      },
      error: () => console.log(`error loading movies by format`),
      complete: () => console.log(`completed loading movies by format`),
    });
  }

  onSubmit = (movie: Movie) => {
    //to navigate to productdetails component
    this._router.navigate(['/movie-details', movie.movieId]);
  };
}
