import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-type',
  templateUrl: './movie-category.component.html',
  styleUrls: ['./movie-category.component.css'],
})
export class MovieCategoryComponent implements OnInit {
  typesArray!: string[];
  category!: string;
  constructor(
    private _movieService: MovieService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((map) => {
      let cat = map.get('category');
      if (cat) this.category = cat;
      console.log(this.category);

      this._movieService.getByCategory(this.category).subscribe({
        next: (data) => (this.typesArray = data),
      });
    });
  }
}
