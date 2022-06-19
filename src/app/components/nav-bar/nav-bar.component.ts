import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/modules/movie/services/movie.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  genreArray!: string[];
  languageArray!: string[];
  typeArray!: string[];
  formatArray!: string[];
  constructor(private _movieService: MovieService) {}

  ngOnInit(): void {
    this._movieService.getDistinctGenre().subscribe({
      next: (data) => (this.genreArray = data),
    });
    this._movieService.getDistinctLanguage().subscribe({
      next: (data) => (this.languageArray = data),
    });
    this._movieService.getDistinctType().subscribe({
      next: (data) => (this.typeArray = data),
    });
    this._movieService.getDistinctFormat().subscribe({
      next: (data) => (this.formatArray = data),
    });
  }
}
